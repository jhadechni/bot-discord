import { SlashCommandBuilder } from 'discord.js';
import { prisma } from '../../database/prisma.js';
import { formatVoiceTime } from '../../utils/xp.js';
import { buildLevelEmptyEmbed, buildTopEmbed } from '../../utils/levels-ui.js';
import { currentYearMonth, prevYearMonth } from '../../utils/monthly-scheduler.js';
const TIPO_CHOICES = [
    { name: 'XP', value: 'xp' },
    { name: 'Mensajes', value: 'mensajes' },
    { name: 'Tiempo en voz', value: 'voz' },
];
const TITLES = { xp: 'XP', mensajes: 'Mensajes', voz: 'Tiempo en Voz' };
function statLine(tipo, entry) {
    if (tipo === 'mensajes')
        return `**${entry.messageCount.toLocaleString()}** mensajes`;
    if (tipo === 'voz')
        return `**${formatVoiceTime(entry.voiceMinutes)}**`;
    return `**${entry.xp.toLocaleString()}** XP`;
}
export const topCommand = {
    data: new SlashCommandBuilder()
        .setName('top')
        .setDescription('Ranking de actividad del servidor')
        .addSubcommand(sub => sub
        .setName('global')
        .setDescription('Ranking global de todo el tiempo')
        .addStringOption(opt => opt.setName('tipo').setDescription('Tipo de ranking').setRequired(false).addChoices(...TIPO_CHOICES)))
        .addSubcommand(sub => sub
        .setName('mes')
        .setDescription('Ranking mensual — este mes o el anterior')
        .addStringOption(opt => opt.setName('tipo').setDescription('Tipo de ranking').setRequired(false).addChoices(...TIPO_CHOICES))
        .addStringOption(opt => opt
        .setName('periodo')
        .setDescription('Qué mes ver (por defecto: este mes)')
        .setRequired(false)
        .addChoices({ name: 'Este mes', value: 'actual' }, { name: 'Mes anterior', value: 'anterior' }))),
    async execute(interaction) {
        await interaction.deferReply();
        const guildId = interaction.guildId;
        if (!guildId)
            return;
        const sub = interaction.options.getSubcommand();
        const tipo = interaction.options.getString('tipo') ?? 'xp';
        const orderField = tipo === 'mensajes' ? 'messageCount' : tipo === 'voz' ? 'voiceMinutes' : 'xp';
        const userId = interaction.user.id;
        // ── /top mes ──────────────────────────────────────────────────────────────
        if (sub === 'mes') {
            const periodo = interaction.options.getString('periodo') ?? 'actual';
            const isClosed = periodo === 'anterior';
            const yearMonth = isClosed ? prevYearMonth(1) : currentYearMonth();
            const [top, selfRecord] = await Promise.all([
                prisma.monthlyActivity.findMany({
                    where: { guildId, yearMonth },
                    orderBy: { [orderField]: 'desc' },
                    take: 10,
                }),
                prisma.monthlyActivity.findUnique({
                    where: { guildId_userId_yearMonth: { guildId, userId, yearMonth } },
                }),
            ]);
            const [year, month] = yearMonth.split('-');
            const monthName = new Date(Number(year), Number(month) - 1).toLocaleString('es-ES', { month: 'long', year: 'numeric' });
            if (top.length === 0) {
                await interaction.editReply({
                    embeds: [buildLevelEmptyEmbed(isClosed
                            ? `No hay registros para ${monthName}.`
                            : `El ranking de ${monthName} aún no tiene actividad. Se irá llenando conforme los miembros sean activos.`)],
                });
                return;
            }
            const entries = await Promise.all(top.map(async (entry, i) => {
                const user = await interaction.client.users.fetch(entry.userId).catch(() => null);
                const name = user ? (user.globalName ?? user.username) : `Usuario ${entry.userId.slice(-4)}`;
                const avatarUrl = user?.displayAvatarURL({ size: 256 }) ?? null;
                return { rank: i + 1, name, avatarUrl, statLine: statLine(tipo, entry), level: 0 };
            }));
            const selfInTop = top.some(e => e.userId === userId);
            let selfEntry = null;
            if (!selfInTop && selfRecord) {
                const selfVal = selfRecord[orderField];
                const above = await prisma.monthlyActivity.count({ where: { guildId, yearMonth, [orderField]: { gt: selfVal } } });
                const selfUser = await interaction.client.users.fetch(userId).catch(() => null);
                const selfName = selfUser ? (selfUser.globalName ?? selfUser.username) : `Usuario ${userId.slice(-4)}`;
                selfEntry = { rank: above + 1, name: selfName, avatarUrl: null, statLine: statLine(tipo, selfRecord), level: 0 };
            }
            await interaction.editReply({
                embeds: [buildTopEmbed({
                        title: `Top ${TITLES[tipo]} · ${monthName}`,
                        entries,
                        guildName: interaction.guild?.name ?? 'Servidor',
                        selfEntry,
                        isClosed,
                    })],
            });
            return;
        }
        // ── /top global ───────────────────────────────────────────────────────────
        const [top, selfRecord] = await Promise.all([
            prisma.userActivity.findMany({
                where: { guildId },
                orderBy: { [orderField]: 'desc' },
                take: 10,
            }),
            prisma.userActivity.findUnique({
                where: { guildId_userId: { guildId, userId } },
            }),
        ]);
        if (top.length === 0) {
            await interaction.editReply({ embeds: [buildLevelEmptyEmbed()] });
            return;
        }
        const entries = await Promise.all(top.map(async (entry, i) => {
            const user = await interaction.client.users.fetch(entry.userId).catch(() => null);
            const name = user ? (user.globalName ?? user.username) : `Usuario ${entry.userId.slice(-4)}`;
            const avatarUrl = user?.displayAvatarURL({ size: 256 }) ?? null;
            return { rank: i + 1, name, avatarUrl, statLine: statLine(tipo, entry), level: entry.level };
        }));
        const selfInTop = top.some(e => e.userId === userId);
        let selfEntry = null;
        if (!selfInTop && selfRecord) {
            const selfVal = selfRecord[orderField];
            const above = await prisma.userActivity.count({ where: { guildId, [orderField]: { gt: selfVal } } });
            const selfUser = await interaction.client.users.fetch(userId).catch(() => null);
            const selfName = selfUser ? (selfUser.globalName ?? selfUser.username) : `Usuario ${userId.slice(-4)}`;
            selfEntry = { rank: above + 1, name: selfName, avatarUrl: null, statLine: statLine(tipo, selfRecord), level: selfRecord.level };
        }
        await interaction.editReply({
            embeds: [buildTopEmbed({
                    title: `Top ${TITLES[tipo]} Global`,
                    entries,
                    guildName: interaction.guild?.name ?? 'Servidor',
                    selfEntry,
                })],
        });
    },
};
//# sourceMappingURL=top.command.js.map