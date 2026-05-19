import { AQUARIS_COLORS, buildAquarisEmbed } from './message-ui.js';
export const COMMUNITY_COLORS = {
    welcome: AQUARIS_COLORS.success,
    leave: AQUARIS_COLORS.neutral,
    boost: AQUARIS_COLORS.info,
    log: AQUARIS_COLORS.log,
};
export function buildWelcomePublicEmbed(options) {
    return buildAquarisEmbed({
        title: 'Bienvenido a Aquaris',
        description: `Hola <@${options.userId}>, bienvenido a **${options.guildName}**.\n` +
            `Ahora somos **${options.memberCount}** miembros. Revisa los canales de informacion para orientarte.`,
        color: COMMUNITY_COLORS.welcome,
        footer: 'community',
    }).setThumbnail(options.avatarUrl);
}
export function buildJoinLogEmbed(options) {
    return buildAquarisEmbed({
        title: 'Nuevo miembro',
        color: COMMUNITY_COLORS.log,
        footer: 'logsCommunity',
        fields: [
            { name: 'Usuario', value: `<@${options.userId}> (${options.userTag})`, inline: true },
            { name: 'ID', value: options.userId, inline: true },
            { name: 'Miembros', value: options.memberCount.toLocaleString(), inline: true },
        ],
    }).setThumbnail(options.avatarUrl);
}
export function buildLeaveLogEmbed(options) {
    return buildAquarisEmbed({
        title: 'Miembro salió del servidor',
        color: COMMUNITY_COLORS.leave,
        footer: 'logsCommunity',
        fields: [
            { name: 'Usuario', value: options.userTag, inline: true },
            { name: 'ID', value: options.userId, inline: true },
            { name: 'Miembros actuales', value: options.memberCount.toLocaleString(), inline: true },
        ],
    }).setThumbnail(options.avatarUrl);
}
export function buildBoostPublicEmbed(options) {
    return buildAquarisEmbed({
        title: 'Nuevo boost del servidor',
        description: `<@${options.userId}> ha boosteado **${options.guildName}**. Gracias por apoyar a la comunidad.`,
        color: COMMUNITY_COLORS.boost,
        footer: 'community',
    }).setThumbnail(options.avatarUrl);
}
//# sourceMappingURL=community-ui.js.map