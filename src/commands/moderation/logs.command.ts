import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import {
  MODERATION_COLORS,
  buildModerationNoticeEmbed,
} from '../../utils/moderation-ui.js';
import { formatDate } from '../../utils/ui.js';

const TYPE_LABELS: Record<string, string> = {
  WARN: '⚠️ Aviso',
  KICK: '👢 Expulsión',
  BAN: '🔨 Baneo',
  UNBAN: '🔓 Desbaneo',
  TEMPBAN: '🔨 Ban temporal',
  MUTE: '🔇 Mute',
  TEMPMUTE: '🔇 Mute temporal',
  UNMUTE: '🔊 Unmute',
  TIMEOUT: '⏱️ Timeout',
  UNTIMEOUT: '✅ Timeout eliminado',
  FILTER: '🚫 Filtro',
  SPAM: '📵 Spam',
};

export const logsCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('logs')
    .setDescription('Muestra el historial de moderación de un usuario')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario').setRequired(true),
    )
    .addIntegerOption(opt =>
      opt.setName('pagina').setDescription('Página (default: 1)').setMinValue(1).setRequired(false),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId) return;

    const target = interaction.options.getUser('usuario', true);
    const page = (interaction.options.getInteger('pagina') ?? 1) - 1;
    const pageSize = 8;

    const [entries, total] = await Promise.all([
      prisma.moderationLog.findMany({
        where: { guildId, targetId: target.id },
        orderBy: { createdAt: 'desc' },
        skip: page * pageSize,
        take: pageSize,
      }),
      prisma.moderationLog.count({ where: { guildId, targetId: target.id } }),
    ]);

    if (total === 0) {
      await interaction.editReply({
        embeds: [
          buildModerationNoticeEmbed({
            title: 'Sin historial',
            description: `**${target.tag}** no tiene acciones de moderación registradas.`,
            color: MODERATION_COLORS.success,
          }),
        ],
      });
      return;
    }

    const fields = entries.map(e => ({
      name: `${TYPE_LABELS[e.type] ?? e.type} — ${formatDate(e.createdAt)}`,
      value: `**Motivo:** ${e.reason ?? 'Sin motivo'}\n**Moderador:** <@${e.moderatorId}>\n**ID:** \`${e.id}\``,
    }));

    const totalPages = Math.ceil(total / pageSize);

    await interaction.editReply({
      embeds: [
        buildModerationNoticeEmbed({
          title: `Historial de ${target.tag}`,
          description: `Total de acciones: **${total}** • Página ${page + 1}/${totalPages}`,
          color: MODERATION_COLORS.log,
          fields,
        }),
      ],
    });
  },
};
