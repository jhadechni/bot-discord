import type { BotEvent } from '../types/event.js';
export declare const voiceJoinTimes: Map<string, number>;
/** Registra en voiceJoinTimes a todos los miembros ya en voz al arrancar el bot. */
export declare function initVoiceSessions(guilds: import('discord.js').Collection<string, import('discord.js').Guild>): void;
declare const voiceStateUpdateEvent: BotEvent<'voiceStateUpdate'>;
export default voiceStateUpdateEvent;
//# sourceMappingURL=voiceStateUpdate.event.d.ts.map