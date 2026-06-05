import type { BotEvent } from '../types/event.js';
import { prisma } from '../database/prisma.js';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { buildLevelUpEmbed } from '../utils/levels-ui.js';
import { calcLevel } from '../utils/xp.js';
import { logger } from '../core/logger.js';
import { currentYearMonth } from '../utils/monthly-scheduler.js';

// Map<"guildId-userId", joinTimestamp> — sesiones de voz activas
export const voiceJoinTimes = new Map<string, number>();

/** Registra en voiceJoinTimes a todos los miembros ya en voz al arrancar el bot. */
export function initVoiceSessions(guilds: import('discord.js').Collection<string, import('discord.js').Guild>): void {
  for (const [guildId, guild] of guilds) {
    for (const [, channel] of guild.channels.cache) {
      if (!channel.isVoiceBased()) continue;
      const isAfk = guild.afkChannelId && channel.id === guild.afkChannelId;
      if (isAfk) continue;
      for (const [userId, member] of channel.members) {
        if (member.user.bot) continue;
        const state = member.voice;
        const isMuted = state.selfMute || state.selfDeaf || state.serverMute || state.serverDeaf;
        if (!isMuted) {
          voiceJoinTimes.set(`${guildId}-${userId}`, Date.now());
        }
      }
    }
  }
}

const voiceStateUpdateEvent: BotEvent<'voiceStateUpdate'> = {
  name: 'voiceStateUpdate',

  async execute(oldState, newState) {
    const member = newState.member;
    if (!member || member.user.bot) return;

    const guildId = newState.guild.id;
    const userId = newState.id;
    const key = `${guildId}-${userId}`;

    const afkChannelId = newState.guild.afkChannelId;
    const wasInVoice = !!oldState.channelId;
    const isInVoice = !!newState.channelId;
    const wasInAfk = !!afkChannelId && oldState.channelId === afkChannelId;
    const isInAfk = !!afkChannelId && newState.channelId === afkChannelId;
    const wasMuted = wasInAfk || !!(oldState.selfMute || oldState.selfDeaf || oldState.serverMute || oldState.serverDeaf);
    const isMuted = isInAfk || !!(newState.selfMute || newState.selfDeaf || newState.serverMute || newState.serverDeaf);

    // Empezar a contar: entra a un canal de voz activo (no muteado)
    if (isInVoice && !isMuted && (!wasInVoice || wasMuted)) {
      voiceJoinTimes.set(key, Date.now());
      return;
    }

    // Detener contador: sale de voz O se mutea/ensordece
    if (voiceJoinTimes.has(key) && (!isInVoice || isMuted)) {
      const startTime = voiceJoinTimes.get(key)!;
      voiceJoinTimes.delete(key);

      const minutes = Math.floor((Date.now() - startTime) / 60_000);
      if (minutes < 1) return; // sesión demasiado corta

      const voiceXp = minutes * 5; // 5 XP/minuto
      const yearMonth = currentYearMonth();

      try {
        const [activity] = await Promise.all([
          prisma.userActivity.upsert({
            where: { guildId_userId: { guildId, userId } },
            update: { xp: { increment: voiceXp }, voiceMinutes: { increment: minutes } },
            create: { guildId, userId, xp: voiceXp, voiceMinutes: minutes, level: 0 },
          }),
          prisma.monthlyActivity.upsert({
            where: { guildId_userId_yearMonth: { guildId, userId, yearMonth } },
            update: { xp: { increment: voiceXp }, voiceMinutes: { increment: minutes } },
            create: { guildId, userId, yearMonth, xp: voiceXp, voiceMinutes: minutes },
          }),
        ]);

        const newLevel = calcLevel(activity.xp);
        if (newLevel > activity.level) {
          await prisma.userActivity.update({
            where: { guildId_userId: { guildId, userId } },
            data: { level: newLevel },
          });

          // Notificación de subida de nivel
          const config = await getOrCreateGuildConfig(guildId);
          if (config.levelUpChannelId) {
            const ch = newState.guild.channels.cache.get(config.levelUpChannelId);
            if (ch?.isTextBased()) {
              await ch.send({
                embeds: [buildLevelUpEmbed(userId, newLevel)],
              });
            }
          }
        }
      } catch (err) {
        logger.warn({ err }, 'Error actualizando XP de voz');
      }
    }
  },
};

export default voiceStateUpdateEvent;
