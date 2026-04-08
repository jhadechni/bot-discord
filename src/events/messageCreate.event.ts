import type { BotEvent } from '../types/event.js';
import { prisma } from '../database/prisma.js';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { getLogChannel } from '../utils/log-channel.js';
import { calcLevel, randomMessageXp } from '../utils/xp.js';
import { logger } from '../core/logger.js';
import { EmbedBuilder, type Message } from 'discord.js';
import type { GuildConfig } from '../generated/prisma/client.js';

// ── Anti-spam tracking (en memoria) ──────────────────────────────────────────
interface SpamEntry {
  timestamps: number[];   // timestamps de mensajes recientes
  mentions: number[];     // timestamps de mensajes con menciones
}

const spamMap = new Map<string, SpamEntry>();

// Umbrales
const SPAM_MSG_COUNT = 5;   // X mensajes...
const SPAM_MSG_WINDOW = 8_000;  // ...en Y ms
const SPAM_MENTION_COUNT = 4;
const SPAM_MENTION_WINDOW = 10_000;

function getSpamEntry(key: string): SpamEntry {
  if (!spamMap.has(key)) spamMap.set(key, { timestamps: [], mentions: [] });
  return spamMap.get(key)!;
}

function pruneOld(arr: number[], window: number): number[] {
  const cutoff = Date.now() - window;
  return arr.filter(t => t > cutoff);
}

// ── XP cooldown (en memoria) ──────────────────────────────────────────────────
const xpCooldown = new Map<string, number>(); // key: guildId-userId → last XP timestamp

async function trackMessageXp(
  message: Message<true>,
  guildId: string,
  userId: string,
  config: GuildConfig,
): Promise<void> {
  const key = `${guildId}-${userId}`;
  const now = Date.now();
  const lastXp = xpCooldown.get(key) ?? 0;
  const onCooldown = now - lastXp < 60_000;
  const xpGain = onCooldown ? 0 : randomMessageXp();

  if (!onCooldown) xpCooldown.set(key, now);

  const activity = await prisma.userActivity.upsert({
    where: { guildId_userId: { guildId, userId } },
    update: { xp: { increment: xpGain }, messageCount: { increment: 1 } },
    create: { guildId, userId, xp: xpGain, messageCount: 1, level: 0 },
  });

  if (xpGain > 0) {
    const newLevel = calcLevel(activity.xp);
    if (newLevel > activity.level) {
      await prisma.userActivity.update({
        where: { guildId_userId: { guildId, userId } },
        data: { level: newLevel },
      });

      if (config.levelUpChannelId) {
        const ch = message.guild.channels.cache.get(config.levelUpChannelId);
        if (ch?.isTextBased()) {
          await ch.send({
            embeds: [
              new EmbedBuilder()
                .setColor(0xf1c40f)
                .setTitle('⬆️ ¡Subiste de nivel!')
                .setDescription(`<@${userId}> ha alcanzado el **nivel ${newLevel}** 🎉`)
                .setTimestamp(),
            ],
          });
        }
      }
    }
  }
}

export { invalidateFilterCache } from '../utils/filter.js';
import { getFilteredWords, findBannedWord } from '../utils/filter.js';

const messageCreateEvent: BotEvent<'messageCreate'> = {
  name: 'messageCreate',

  async execute(message) {
    // Ignorar bots y DMs
    if (message.author.bot || !message.inGuild()) return;

    const guildId = message.guildId;
    const userId = message.author.id;
    const member = message.member;

    if (!member) return;

    const hasModerationBypass =
      member.permissions.has('Administrator') ||
      member.permissions.has('ManageMessages') ||
      member.permissions.has('ModerateMembers');

    const config = await getOrCreateGuildConfig(guildId);

    if (hasModerationBypass) {
      try {
        await trackMessageXp(message, guildId, userId, config);
      } catch (err) {
        logger.warn({ err }, 'Error actualizando XP de mensaje');
      }
      return;
    }

    // ── 1. Filtro de palabras ─────────────────────────────────────────────────
    const filteredWords = await getFilteredWords(guildId);
    if (filteredWords.size > 0) {
      const matched = findBannedWord(message.content, filteredWords);

      if (matched) {
        try {
          await message.delete();
        } catch { /* mensaje ya eliminado */ }

        try {
          await message.author.send(
            `🚫 Tu mensaje en **${message.guild.name}** fue eliminado por contener una palabra no permitida.`,
          );
        } catch { /* DMs desactivados */ }

        const log = await prisma.moderationLog.create({
          data: {
            guildId,
            targetId: userId,
            moderatorId: message.client.user?.id ?? 'bot',
            type: 'FILTER',
            reason: `Palabra filtrada: "${matched}"`,
          },
        });

        const automodLogCh = getLogChannel(message.guild, config, 'automod');
        if (automodLogCh) {
          await automodLogCh.send({
            embeds: [
              new EmbedBuilder()
                .setColor(0xed4245)
                .setTitle('🚫 Mensaje filtrado')
                .addFields(
                  { name: 'Usuario', value: `<@${userId}> (${message.author.tag})`, inline: true },
                  { name: 'Canal', value: `<#${message.channelId}>`, inline: true },
                  { name: 'Palabra detectada', value: `\`${matched}\``, inline: true },
                  { name: 'Contenido', value: message.content.slice(0, 500) },
                  { name: 'ID Log', value: log.id, inline: true },
                )
                .setTimestamp(),
            ],
          });
        }

        return; // No procesar anti-spam si ya se filtró
      }
    }

    // ── 2. Anti-spam ──────────────────────────────────────────────────────────
    const key = `${guildId}-${userId}`;
    const entry = getSpamEntry(key);
    const now = Date.now();

    entry.timestamps = pruneOld(entry.timestamps, SPAM_MSG_WINDOW);
    entry.timestamps.push(now);

    const mentionCount = message.mentions.users.size + message.mentions.roles.size;
    if (mentionCount > 0) {
      entry.mentions = pruneOld(entry.mentions, SPAM_MENTION_WINDOW);
      for (let i = 0; i < mentionCount; i++) entry.mentions.push(now);
    }

    const isMessageSpam = entry.timestamps.length >= SPAM_MSG_COUNT;
    const isMentionSpam = entry.mentions.length >= SPAM_MENTION_COUNT;

    if (!isMessageSpam && !isMentionSpam) {
      // ── 3. XP por mensaje (solo mensajes limpios) ─────────────────────────
      try {
        await trackMessageXp(message, guildId, userId, config);
      } catch (err) {
        logger.warn({ err }, 'Error actualizando XP de mensaje');
      }
      return;
    }

    // Limpiar el tracking para evitar múltiples triggers
    spamMap.delete(key);

    const spamType = isMentionSpam ? 'mention spam' : 'spam de mensajes';

    // Borrar los mensajes recientes del spammer en el canal
    try {
      const recent = await message.channel.messages.fetch({ limit: 10 });
      const toDelete = [...recent.values()].filter(
        m => m.author.id === userId && Date.now() - m.createdTimestamp < 30_000,
      );
      if (toDelete.length > 1 && 'bulkDelete' in message.channel) {
        await message.channel.bulkDelete(toDelete, true);
      } else if (toDelete.length === 1) {
        await toDelete[0]?.delete().catch(() => undefined);
      }
    } catch (err) {
      logger.warn({ err }, 'No se pudieron borrar mensajes de spam');
    }

    // Aplicar timeout de 10 minutos
    try {
      if (member.moderatable) {
        await member.timeout(10 * 60 * 1000, `Auto-mod: ${spamType}`);
      }
    } catch (err) {
      logger.warn({ err }, 'No se pudo aplicar timeout al spammer');
    }

    // Notificar al usuario
    try {
      await message.author.send(
        `⚠️ Has sido silenciado temporalmente en **${message.guild.name}** por ${spamType}.\nDuración: 10 minutos.`,
      );
    } catch { /* DMs desactivados */ }

    const log = await prisma.moderationLog.create({
      data: {
        guildId,
        targetId: userId,
        moderatorId: message.client.user?.id ?? 'bot',
        type: 'SPAM',
        reason: `Auto-mod: ${spamType}`,
        duration: 10,
      },
    });

    // Mensaje público en el canal donde se detectó el spam
    const publicCh = message.guild.channels.cache.get(message.channelId);
    if (publicCh?.isTextBased() && !publicCh.isDMBased()) {
      await publicCh.send({
        embeds: [
          new EmbedBuilder()
            .setColor(0xe67e22)
            .setTitle('📵 Usuario silenciado automáticamente')
            .setDescription(`<@${userId}> ha sido silenciado por **10 minutos** por ${spamType}.`)
            .setTimestamp(),
        ],
      });
    }

    const automodLogCh = getLogChannel(message.guild, config, 'automod');
    if (automodLogCh) {
      await automodLogCh.send({
        embeds: [
          new EmbedBuilder()
            .setColor(0xe67e22)
            .setTitle('📵 Anti-spam activado')
            .addFields(
              { name: 'Usuario', value: `<@${userId}> (${message.author.tag})`, inline: true },
              { name: 'Canal', value: `<#${message.channelId}>`, inline: true },
              { name: 'Tipo', value: spamType, inline: true },
              { name: 'Acción', value: 'Timeout 10 minutos + mensajes eliminados' },
              { name: 'ID Log', value: log.id, inline: true },
            )
            .setTimestamp(),
        ],
      });
    }
  },
};

export default messageCreateEvent;
