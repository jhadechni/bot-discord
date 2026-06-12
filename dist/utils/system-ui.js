import { AQUARIS_COLORS, buildAquarisEmbed, buildAquarisErrorEmbed } from './message-ui.js';
export const SYSTEM_COLORS = {
    info: AQUARIS_COLORS.system,
    success: AQUARIS_COLORS.success,
    warning: AQUARIS_COLORS.warning,
    error: AQUARIS_COLORS.danger,
};
function channelMention(id) {
    return id ? `<#${id}>` : 'No configurado';
}
function roleMention(id) {
    return id ? `<@&${id}>` : 'No configurado';
}
function rawId(id) {
    return id ? `\`${id}\`` : 'No configurado';
}
export function buildConfigOverviewEmbeds(config) {
    return [
        buildAquarisEmbed({
            title: 'Configuracion del servidor',
            description: 'Canales principales configurados para Aquaris.',
            color: SYSTEM_COLORS.info,
            footer: 'system',
            fields: [
                { name: 'Bienvenida / despedida', value: channelMention(config.welcomeChannelId), inline: true },
                { name: 'Sugerencias', value: channelMention(config.suggestionsChannelId), inline: true },
                { name: 'Subida de nivel', value: channelMention(config.levelUpChannelId), inline: true },
                { name: 'Boost', value: channelMention(config.boostChannelId), inline: true },
                { name: 'Categoria reclutamiento', value: rawId(config.recruitmentCategoryId), inline: true },
            ],
        }),
        buildAquarisEmbed({
            title: 'Canales de logs',
            color: AQUARIS_COLORS.log,
            footer: 'system',
            fields: [
                { name: 'General', value: channelMention(config.logsChannelId), inline: true },
                { name: 'Moderacion', value: channelMention(config.logsModChannelId), inline: true },
                { name: 'Auto-moderacion', value: channelMention(config.logsAutomodChannelId), inline: true },
                { name: 'Reclutamiento', value: channelMention(config.logsRecruitChannelId), inline: true },
                { name: 'Entradas', value: channelMention(config.logsJoinsChannelId), inline: true },
                { name: 'Salidas', value: channelMention(config.logsLeavesChannelId), inline: true },
            ],
        }),
        buildAquarisEmbed({
            title: 'Roles y tienda',
            color: AQUARIS_COLORS.info,
            footer: 'system',
            fields: [
                { name: 'Visitante', value: roleMention(config.visitorRoleId), inline: true },
                { name: 'Aspirante', value: roleMention(config.aspirantRoleId), inline: true },
                { name: 'Lider', value: roleMention(config.liderRoleId), inline: true },
                { name: 'Co-Lider', value: roleMention(config.coLiderRoleId), inline: true },
                { name: 'Aquaris', value: roleMention(config.aquarisRoleId), inline: true },
                { name: 'Staff', value: roleMention(config.staffRoleId), inline: true },
                { name: 'Reclutador', value: roleMention(config.reclutadorRoleId), inline: true },
                { name: 'Comerciante', value: roleMention(config.comercianteRoleId), inline: true },
                { name: 'Canal staff pedidos', value: channelMention(config.shopStaffChannelId), inline: true },
                { name: 'Categoria pedidos', value: rawId(config.shopCategoryId), inline: true },
            ],
        }),
    ];
}
export function buildSystemNoticeEmbed(title, description, color = SYSTEM_COLORS.success) {
    return buildAquarisEmbed({
        title,
        description,
        color,
        footer: 'system',
    });
}
export function buildSystemErrorEmbed(title, description) {
    return buildAquarisErrorEmbed(title, description);
}
export function buildHelpEmbed(isStaff) {
    const fields = [
        {
            name: 'General',
            value: [
                '`/ping` - Comprueba que el bot responde.',
                '`/help` - Muestra este listado.',
            ].join('\n'),
        },
        {
            name: 'Tienda',
            value: [
                '`/tienda ver` - Abre el catalogo publico.',
                '`/pedido crear` - Crea un pedido directo.',
                '`/pedido estado` - Consulta el estado de un pedido.',
                '`/pedido carrito` - Abre el carrito interactivo.',
            ].join('\n'),
        },
        {
            name: 'Comunidad',
            value: [
                '`/apply` - Envia tu solicitud de ingreso al clan.',
                '`/suggest` - Envia una sugerencia al servidor.',
                '`/perfil [usuario]` - Consulta el perfil de XP.',
                '`/top [tipo]` - Muestra rankings del servidor.',
                '`/remind add|lista|editar|cancelar` - Gestiona tus recordatorios.',
            ].join('\n'),
        },
    ];
    if (isStaff) {
        fields.push({
            name: 'Moderacion',
            value: [
                '`/mod disciplina warn|kick|ban|unban|tempban`',
                '`/mod disciplina timeout|untimeout|mute|tempmute|unmute`',
                '`/mod historial warnings|logs|reason`',
                '`/mod chat clear`',
                '`/mod filtro añadir|eliminar|lista`',
            ].join('\n'),
        }, {
            name: 'Staff pedidos',
            value: '`/pedidos lista`',
        }, {
            name: 'Roster',
            value: '`/jugadores registrar` - Registra al jugador desde el canal de entrevista y cierra el canal.',
        }, {
            name: 'Configuracion y utilidades',
            value: [
                '`/config ver`',
                '`/config set-welcome|set-logs|set-suggestions|set-recruitment`',
                '`/config set-niveles|set-boost|set-rol`',
                '`/config nick-rol-agregar|nick-rol-quitar`',
                '`/config set-shop-staff|set-shop-categoria`',
                '`/adormirdani` y `/atrabajardani` - utilidades internas de staff.',
            ].join('\n'),
        });
    }
    return buildAquarisEmbed({
        title: 'Comandos de Aquaris',
        description: isStaff
            ? 'Listado de comandos publicos y de staff disponibles.'
            : 'Listado de comandos publicos. Los comandos de staff solo se muestran a quien tiene acceso.',
        color: AQUARIS_COLORS.info,
        footer: 'system',
        fields,
    });
}
export function buildPingEmbed(wsLatency, dbStatus) {
    return buildAquarisEmbed({
        title: 'Estado del bot',
        color: AQUARIS_COLORS.info,
        footer: 'system',
        fields: [
            { name: 'Latencia WebSocket', value: `${wsLatency}ms`, inline: true },
            { name: 'Base de datos', value: dbStatus, inline: true },
        ],
    });
}
//# sourceMappingURL=system-ui.js.map