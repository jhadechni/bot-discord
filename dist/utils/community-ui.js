import { AQUARIS_COLORS, buildAquarisEmbed } from './message-ui.js';
export const COMMUNITY_COLORS = {
    welcome: AQUARIS_COLORS.success,
    leave: AQUARIS_COLORS.neutral,
    boost: AQUARIS_COLORS.info,
    log: AQUARIS_COLORS.log,
};
export function buildWelcomePublicEmbed(options) {
    return buildAquarisEmbed({
        title: `¡Bienvenido(a) a ${options.guildName}!`,
        description: `¡Hola <@${options.userId}>, bienvenido(a) a 👋  **${options.guildName}**!\n\n` +
            `> <:reglasdiscord:1506679644743663677>  **Normas**\n` +
            `> Te recomendamos leer nuestras reglas de la comunidad en <#1463318340562059297>.\n` +
            `> \n` +
            `> <:tiendadiscord:1506679688595116133>  **Tienda**\n` +
            `> Compra recursos, realiza pedidos y revisa información de la tienda en <#1463354578052448298>.\n` +
            `> \n` +
            `> <:reclutamientodiscord:1506679670601678908>  **Reclutamiento**\n` +
            `> ¿Quieres formar parte del clan Aquaris? Consulta el apartado de reclutamiento en <#1463267844778098866>.\n\n` +
            `-# ✨ Ahora somos **${options.memberCount}** miembros. ¡Disfruta del servidor y bienvenido al proyecto! <:LogoDiscord:1506671086425608373>`,
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
    }).setThumbnail(options.avatarUrl ?? null);
}
export function buildFarewellPublicEmbed(options) {
    return buildAquarisEmbed({
        description: `<@${options.userId}> ya no forma parte de ${options.guildName} <:salida:1506691970175733891>\n\n` +
            `> <:calamaraquaris:1506691948096913599>   **Comunidad**\n` +
            `> La aventura continúa con **${options.memberCount}** miembros activos.\n` +
            `> \n` +
            `> <:RolAquaris:1506435880162955305>  **Aquaris**\n` +
            `> Gracias por haber compartido parte del viaje con nosotros.\n\n` +
            `-# 💙 Las puertas de Aquaris siempre estarán abiertas. <:LogoDiscord:1506669476035432638>`,
        color: COMMUNITY_COLORS.leave,
        footer: 'community',
    }).setThumbnail(options.avatarUrl ?? null);
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