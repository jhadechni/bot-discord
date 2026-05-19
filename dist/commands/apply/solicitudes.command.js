import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import { prisma } from '../../database/prisma.js';
import { RECRUITMENT_COLORS, buildRecruitmentNoticeEmbed, buildRecruitmentErrorEmbed, } from '../../utils/recruitment-ui.js';
import { formatDate } from '../../utils/ui.js';
const STATUS_LABELS = {
    OPEN: '📋 Pendiente',
    ACCEPTED: '🤝 En entrevista',
};
const PAGE_SIZE = 8;
export const solicitudesCommand = {
    data: new SlashCommandBuilder()
        .setName('solicitudes')
        .setDescription('Lista las solicitudes de reclutamiento pendientes')
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
        .addStringOption(opt => opt
        .setName('estado')
        .setDescription('Filtrar por estado (default: pendientes)')
        .setRequired(false)
        .addChoices({ name: 'Pendientes (sin revisar)', value: 'OPEN' }, { name: 'En entrevista', value: 'ACCEPTED' }, { name: 'Todas las activas', value: 'ALL' }))
        .addIntegerOption(opt => opt.setName('pagina').setDescription('Página (default: 1)').setMinValue(1).setRequired(false)),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const guildId = interaction.guildId;
        if (!guildId)
            return;
        const estadoOpt = interaction.options.getString('estado') ?? 'OPEN';
        const page = (interaction.options.getInteger('pagina') ?? 1) - 1;
        const statusFilter = estadoOpt === 'ALL' ? { in: ['OPEN', 'ACCEPTED'] } : estadoOpt;
        const whereClause = {
            guildId,
            status: typeof statusFilter === 'string' ? statusFilter : { in: statusFilter.in },
        };
        const [tickets, total] = await Promise.all([
            prisma.recruitmentTicket.findMany({
                where: whereClause,
                orderBy: { createdAt: 'asc' },
                skip: page * PAGE_SIZE,
                take: PAGE_SIZE,
            }),
            prisma.recruitmentTicket.count({ where: whereClause }),
        ]);
        const totalPages = Math.ceil(total / PAGE_SIZE) || 1;
        if (total === 0) {
            const label = estadoOpt === 'OPEN' ? 'pendientes' :
                estadoOpt === 'ACCEPTED' ? 'en entrevista' :
                    'activas';
            await interaction.editReply({
                embeds: [
                    buildRecruitmentNoticeEmbed({
                        title: '📋 Solicitudes de reclutamiento',
                        description: `No hay solicitudes ${label} en este momento.`,
                        color: RECRUITMENT_COLORS.system,
                    }),
                ],
            });
            return;
        }
        const ticketFields = tickets.map((t, i) => {
            const index = page * PAGE_SIZE + i + 1;
            const channelLine = t.channelId ? `<#${t.channelId}>` : 'Sin canal';
            const roleLine = t.minecraftRole ?? 'No especificado';
            return {
                name: `#${index} — ${STATUS_LABELS[t.status] ?? t.status}`,
                value: `**Solicitante:** <@${t.userId}>\n` +
                    `**Rol:** ${roleLine}\n` +
                    `**Canal:** ${channelLine}\n` +
                    `**Fecha:** ${formatDate(t.createdAt)}\n` +
                    `**ID:** \`${t.id}\``,
            };
        });
        const estadoLabel = estadoOpt === 'ALL' ? 'activas' :
            estadoOpt === 'OPEN' ? 'pendientes' :
                'en entrevista';
        await interaction.editReply({
            embeds: [
                buildRecruitmentNoticeEmbed({
                    title: '📋 Solicitudes de reclutamiento',
                    color: RECRUITMENT_COLORS.info,
                    fields: [
                        { name: 'Estado', value: estadoLabel.charAt(0).toUpperCase() + estadoLabel.slice(1), inline: true },
                        { name: 'Total', value: `${total}`, inline: true },
                        { name: 'Página', value: `${page + 1} / ${totalPages}`, inline: true },
                        ...ticketFields,
                    ],
                }),
            ],
        });
    },
};
//# sourceMappingURL=solicitudes.command.js.map