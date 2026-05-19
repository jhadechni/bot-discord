import type { Guild } from 'discord.js';
import type { GuildConfig } from '../generated/prisma/client.js';
export type LogType = 'mod' | 'automod' | 'recruit' | 'joins' | 'leaves';
/**
 * Devuelve el ID del canal de logs para el tipo indicado.
 * Si el canal específico no está configurado, cae al general (logsChannelId).
 */
export declare function getLogChannelId(config: GuildConfig, type: LogType): string | null;
/**
 * Devuelve el canal de Discord listo para enviar, o null si no está configurado/accesible.
 */
export declare function getLogChannel(guild: Guild, config: GuildConfig, type: LogType): import("discord.js").NewsChannel | import("discord.js").StageChannel | import("discord.js").TextChannel | import("discord.js").PublicThreadChannel<boolean> | import("discord.js").PrivateThreadChannel | import("discord.js").VoiceChannel | null;
//# sourceMappingURL=log-channel.d.ts.map