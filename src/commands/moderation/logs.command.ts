import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';

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
      await interaction.editReply(`✅ **${target.tag}** no tiene historial de moderación.`);
      return;
    }

    const fields = entries.map(e => ({
      name: `${TYPE_LABELS[e.type] ?? e.type} — ${e.createdAt.toLocaleDateString('es-ES')}`,
      value: `**Motivo:** ${e.reason ?? 'Sin motivo'}\n**Moderador:** <@${e.moderatorId}>\n**ID:** \`${e.id}\``,
    }));

    const totalPages = Math.ceil(total / pageSize);

    const embed = new EmbedBuilder()
      .setColor(0x5865f2)
      .setTitle(`📋 Historial de ${target.tag}`)
      .setDescription(`Total de acciones: **${total}** • Página ${page + 1}/${totalPages}`)
      .addFields(fields)
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  },
};
