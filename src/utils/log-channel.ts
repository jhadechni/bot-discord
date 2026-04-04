import type { Guild } from 'discord.js';
import type { GuildConfig } from '../generated/prisma/client.js';

export type LogType = 'mod' | 'automod' | 'recruit' | 'joins' | 'leaves';

/**
 * Devuelve el ID del canal de logs para el tipo indicado.
 * Si el canal específico no está configurado, cae al general (logsChannelId).
 */
export function getLogChannelId(config: GuildConfig, type: LogType): string | null {
  const specific = {
    mod: config.logsModChannelId,
    automod: config.logsAutomodChannelId,
    recruit: config.logsRecruitChannelId,
    joins: config.logsJoinsChannelId,
    leaves: config.logsLeavesChannelId,
  }[type];

  return specific ?? config.logsChannelId ?? null;
}

/**
 * Devuelve el canal de Discord listo para enviar, o null si no está configurado/accesible.
 */
export function getLogChannel(guild: Guild, config: GuildConfig, type: LogType) {
  const id = getLogChannelId(config, type);
  if (!id) return null;
  const ch = guild.channels.cache.get(id);
  return ch?.isTextBased() ? ch : null;
}
