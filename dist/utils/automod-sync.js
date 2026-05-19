import { AutoModerationRuleTriggerType, AutoModerationActionType, AutoModerationRuleEventType, } from 'discord.js';
import { prisma } from '../database/prisma.js';
import { logger } from '../core/logger.js';
const RULE_NAME = 'Aquaris Bot Filter';
const MAX_KEYWORDS = 1000; // Límite Discord por regla
/**
 * Sincroniza las FilterWord de la BD con una regla de AutoMod nativo de Discord.
 * - Crea la regla si no existe y hay palabras.
 * - Actualiza la regla si ya existe.
 * - Elimina la regla si la lista de palabras queda vacía.
 * Siempre fire-and-forget desde los sitios de llamada.
 */
export async function syncAutoModRule(client, guildId) {
    const guild = client.guilds.cache.get(guildId);
    if (!guild)
        return;
    try {
        const words = await prisma.filterWord.findMany({ where: { guildId }, select: { word: true } });
        // *palabra* → coincidencia de subcadena (wildcard Discord AutoMod)
        const keywords = words.slice(0, MAX_KEYWORDS).map(w => `*${w.word}*`);
        if (words.length > MAX_KEYWORDS) {
            logger.warn(`[automod] Guild ${guildId}: ${words.length} palabras exceden el límite de ${MAX_KEYWORDS}. Se usarán las primeras ${MAX_KEYWORDS}.`);
        }
        const rules = await guild.autoModerationRules.fetch();
        const existing = rules.find(r => r.name === RULE_NAME);
        if (existing) {
            if (keywords.length === 0) {
                await existing.delete('No quedan palabras en el filtro');
                logger.info(`[automod] Regla eliminada para guild ${guildId}`);
            }
            else {
                await existing.edit({
                    triggerMetadata: { keywordFilter: keywords },
                    exemptRoles: [],
                    reason: 'Sincronización filtro de palabras',
                });
                logger.info(`[automod] Regla actualizada: ${keywords.length} palabras para guild ${guildId}`);
            }
        }
        else if (keywords.length > 0) {
            await guild.autoModerationRules.create({
                name: RULE_NAME,
                eventType: AutoModerationRuleEventType.MessageSend,
                triggerType: AutoModerationRuleTriggerType.Keyword,
                triggerMetadata: { keywordFilter: keywords },
                actions: [{ type: AutoModerationActionType.BlockMessage }],
                exemptRoles: [],
                enabled: true,
                reason: 'Filtro de palabras del bot Aquaris',
            });
            logger.info(`[automod] Regla creada: ${keywords.length} palabras para guild ${guildId}`);
        }
    }
    catch (err) {
        logger.warn({ err }, `[automod] Error sincronizando regla AutoMod para guild ${guildId}`);
    }
}
//# sourceMappingURL=automod-sync.js.map