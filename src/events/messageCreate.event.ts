import type { BotEvent } from '../types/event.js';
import { prisma } from '../database/prisma.js';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { getLogChannel } from '../utils/log-channel.js';
import {
  buildAutomodFilterDmEmbed,
  buildAutomodFilterLogEmbed,
  buildAutomodSpamDmEmbed,
  buildAutomodSpamLogEmbed,
  buildAutomodSpamPublicEmbed,
  buildAutomodToxicityDmEmbed,
  buildAutomodToxicityLogEmbed,
} from '../utils/automod-ui.js';
import { buildLevelUpEmbed } from '../utils/levels-ui.js';
import { calcLevel, randomMessageXp } from '../utils/xp.js';
import { logger } from '../core/logger.js';
import type { Message } from 'discord.js';
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
            embeds: [buildLevelUpEmbed(userId, newLevel)],
          });
        }
      }
    }
  }
}

export { invalidateFilterCache } from '../utils/filter.js';
import { getFilteredWords, findBannedWord } from '../utils/filter.js';
import { analyzeToxicity } from '../utils/perspective.js';
import { env } from '../config/env.js';

const messageCreateEvent: BotEvent<'messageCreate'> = {
  name: 'messageCreate',

  async execute(message) {
    // Ignorar bots y DMs
    if (message.author.bot || !message.inGuild()) return;

    const guildId = message.guildId;
    const userId = message.author.id;
    const member = message.member;

    if (!member) return;

    const config = await getOrCreateGuildConfig(guildId);

    // ── 1. Filtro de palabras (FilterWord BD) ────────────────────────────────
    const filteredWords = await getFilteredWords(guildId);
    if (filteredWords.size > 0) {
      const matched = findBannedWord(message.content, filteredWords);

      if (matched) {
        try {
          await message.delete();
        } catch { /* mensaje ya eliminado */ }

        try {
          await message.author.send({ embeds: [buildAutomodFilterDmEmbed(message.guild.name)] });
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
              buildAutomodFilterLogEmbed({
                userId,
                userTag: message.author.tag,
                channelId: message.channelId,
                matched,
                content: message.content,
                logId: log.id,
              }),
            ],
          });
        }

        return; // No procesar anti-spam si ya se filtró
      }
    }

    // ── 2. Perspective API (análisis semántico de toxicidad) ──────────────────
    if (env.perspectiveApiKey) {
      const score = await analyzeToxicity(message.content, env.perspectiveApiKey);
      const TOXICITY_THRESHOLD = 0.80;

      if (score !== null && score >= TOXICITY_THRESHOLD) {
        try {
          await message.delete();
        } catch { /* mensaje ya eliminado */ }

        try {
          await message.author.send({ embeds: [buildAutomodToxicityDmEmbed(message.guild.name)] });
        } catch { /* DMs desactivados */ }

        const log = await prisma.moderationLog.create({
          data: {
            guildId,
            targetId: userId,
            moderatorId: message.client.user?.id ?? 'bot',
            type: 'FILTER',
            reason: `Perspective API: toxicidad ${(score * 100).toFixed(0)}%`,
          },
        });

        const automodLogCh = getLogChannel(message.guild, config, 'automod');
        if (automodLogCh) {
          await automodLogCh.send({
            embeds: [
              buildAutomodToxicityLogEmbed({
                userId,
                userTag: message.author.tag,
                channelId: message.channelId,
                score,
                content: message.content,
                logId: log.id,
              }),
            ],
          });
        }

        return;
      }
    }

    // ── 3. Anti-spam (omitido para moderadores) ──────────────────────────────
    const hasModerationBypass =
      member.permissions.has('Administrator') ||
      member.permissions.has('ManageMessages') ||
      member.permissions.has('ModerateMembers');

    if (hasModerationBypass) {
      try {
        await trackMessageXp(message, guildId, userId, config);
      } catch (err) {
        logger.warn({ err }, 'Error actualizando XP de mensaje');
      }
      return;
    }

    // ── Anti-spam ─────────────────────────────────────────────────────────────
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
    const spamDurationLabel = '10 minutos';

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
      await message.author.send({
        embeds: [buildAutomodSpamDmEmbed(message.guild.name, spamType, spamDurationLabel)],
      });
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
        embeds: [buildAutomodSpamPublicEmbed(userId, spamType, spamDurationLabel)],
      });
    }

    const automodLogCh = getLogChannel(message.guild, config, 'automod');
    if (automodLogCh) {
      await automodLogCh.send({
        embeds: [
          buildAutomodSpamLogEmbed({
            userId,
            userTag: message.author.tag,
            channelId: message.channelId,
            spamType,
            durationLabel: spamDurationLabel,
            logId: log.id,
          }),
        ],
      });
    }
  },
};

export default messageCreateEvent;
