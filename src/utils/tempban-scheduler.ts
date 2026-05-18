import { prisma } from '../database/prisma.js';
import { client } from '../core/client.js';
import { logger } from '../core/logger.js';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { getLogChannel } from './log-channel.js';
import { formatTime } from './time.js';
import { MODERATION_COLORS, buildModerationNoticeEmbed } from './moderation-ui.js';

const POLL_MS = 60_000;

export function startTempbanScheduler(): void {
  let running = false;

  setInterval(async () => {
    if (running) return;
    running = true;

    try {
      const now = new Date();

      const expired = await prisma.moderationLog.findMany({
        where: { type: 'TEMPBAN', active: true, duration: { not: null } },
      });

      for (const log of expired) {
        if (log.duration === null) continue;
        const expiresAt = new Date(log.createdAt.getTime() + log.duration * 60_000);
        if (expiresAt > now) continue;

        try {
          const guild = client.guilds.cache.get(log.guildId);
          if (!guild) continue;

          await guild.members.unban(log.targetId, 'Tempban expirado').catch(() => null);

          await prisma.moderationLog.update({
            where: { id: log.id },
            data: { active: false },
          });

          const config = await getOrCreateGuildConfig(log.guildId);
          const logsChannel = getLogChannel(guild, config, 'mod');
          if (logsChannel) {
            await logsChannel.send({
              embeds: [
                buildModerationNoticeEmbed({
                  title: '✅ Ban temporal expirado',
                  color: MODERATION_COLORS.success,
                  footer: 'logs',
                  fields: [
                    { name: 'Usuario', value: `<@${log.targetId}>\nID: \`${log.targetId}\``, inline: true },
                    { name: 'Duración original', value: formatTime(log.duration), inline: true },
                  ],
                }),
              ],
            });
          }
        } catch (err) {
          logger.warn({ err, logId: log.id }, 'Error al expirar tempban');
        }
      }
    } catch (err) {
      logger.warn({ err }, 'Error en tempban scheduler');
    } finally {
      running = false;
    }
  }, POLL_MS);
}
