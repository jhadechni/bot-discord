import { type Client } from 'discord.js';
/**
 * Sincroniza las FilterWord de la BD con una regla de AutoMod nativo de Discord.
 * - Crea la regla si no existe y hay palabras.
 * - Actualiza la regla si ya existe.
 * - Elimina la regla si la lista de palabras queda vacía.
 * Siempre fire-and-forget desde los sitios de llamada.
 */
export declare function syncAutoModRule(client: Client, guildId: string): Promise<void>;
//# sourceMappingURL=automod-sync.d.ts.map