/**
 * Devuelve el ID del canal de logs para el tipo indicado.
 * Si el canal específico no está configurado, cae al general (logsChannelId).
 */
export function getLogChannelId(config, type) {
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
export function getLogChannel(guild, config, type) {
    const id = getLogChannelId(config, type);
    if (!id)
        return null;
    const ch = guild.channels.cache.get(id);
    return ch?.isTextBased() ? ch : null;
}
//# sourceMappingURL=log-channel.js.map