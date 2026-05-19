import { SlashCommandBuilder, PermissionFlagsBits, ButtonBuilder, ButtonStyle, ActionRowBuilder } from 'discord.js';
import { prisma } from '../../database/prisma.js';
import { MODERATION_COLORS, buildModerationNoticeEmbed, } from '../../utils/moderation-ui.js';
import { formatDate } from '../../utils/ui.js';
const PAGE_SIZE = 8;
export const TYPE_LABELS = {
    WARN: '⚠️ Advertencia',
    KICK: '🚪 Expulsión',
    BAN: '⛔ Baneo',
    UNBAN: '✅ Desbaneo',
    TEMPBAN: '⛔ Ban temporal',
    MUTE: '🔇 Mute',
    TEMPMUTE: '🔇 Mute temporal',
    UNMUTE: '🔊 Unmute',
    TIMEOUT: '⏳ Timeout',
    UNTIMEOUT: '✅ Timeout retirado',
    FILTER: '🚫 Filtro',
    SPAM: '📵 Spam',
};
export async function renderLogsPage(guildId, targetId, page) {
    const [entries, total] = await Promise.all([
        prisma.moderationLog.findMany({
            where: { guildId, targetId },
            orderBy: { createdAt: 'desc' },
            skip: page * PAGE_SIZE,
            take: PAGE_SIZE,
        }),
        prisma.moderationLog.count({ where: { guildId, targetId } }),
    ]);
    const totalPages = Math.ceil(total / PAGE_SIZE) || 1;
    if (total === 0) {
        return {
            embeds: [
                buildModerationNoticeEmbed({
                    title: '🛡️ Historial de moderación',
                    description: `<@${targetId}> no tiene acciones de moderación registradas.`,
                    color: MODERATION_COLORS.success,
                }),
            ],
            components: [],
        };
    }
    const entryFields = entries.map(e => ({
        name: `${TYPE_LABELS[e.type] ?? e.type} — ${formatDate(e.createdAt)}`,
        value: `**Motivo:** ${e.reason ?? 'Sin motivo'}\n**Moderador:** <@${e.moderatorId}>\n**ID:** \`${e.id}\``,
    }));
    const embed = buildModerationNoticeEmbed({
        title: '🛡️ Historial de moderación',
        color: MODERATION_COLORS.info,
        fields: [
            { name: 'Usuario', value: `<@${targetId}>\nID: \`${targetId}\``, inline: true },
            { name: 'Acciones registradas', value: `${total}`, inline: true },
            { name: 'Página', value: `${page + 1} / ${totalPages}`, inline: true },
            ...entryFields,
        ],
    });
    const row = new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId(`mod:logs:${targetId}:${page - 1}`)
        .setLabel('◀ Anterior')
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(page === 0), new ButtonBuilder()
        .setCustomId(`mod:logs:${targetId}:${page + 1}`)
        .setLabel('Siguiente ▶')
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(page >= totalPages - 1));
    return { embeds: [embed], components: [row] };
}
export const logsCommand = {
    data: new SlashCommandBuilder()
        .setName('logs')
        .setDescription('Muestra el historial de moderación de un usuario')
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
        .addUserOption(opt => opt.setName('usuario').setDescription('Usuario').setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const guildId = interaction.guildId;
        if (!guildId)
            return;
        const target = interaction.options.getUser('usuario', true);
        const result = await renderLogsPage(guildId, target.id, 0);
        await interaction.editReply(result);
    },
};
//# sourceMappingURL=logs.command.js.map