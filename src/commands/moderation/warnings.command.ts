import { SlashCommandBuilder, PermissionFlagsBits, ButtonBuilder, ButtonStyle, ActionRowBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import {
  MODERATION_COLORS,
  buildModerationNoticeEmbed,
} from '../../utils/moderation-ui.js';
import { formatDate } from '../../utils/ui.js';

const PAGE_SIZE = 5;

export async function renderWarningsPage(guildId: string, targetId: string, page: number) {
  const [warns, total] = await Promise.all([
    prisma.moderationLog.findMany({
      where: { guildId, targetId, type: 'WARN', active: true },
      orderBy: { createdAt: 'desc' },
      skip: page * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
    prisma.moderationLog.count({ where: { guildId, targetId, type: 'WARN', active: true } }),
  ]);

  const totalPages = Math.ceil(total / PAGE_SIZE) || 1;

  if (total === 0) {
    return {
      embeds: [
        buildModerationNoticeEmbed({
          title: 'Sin advertencias',
          description: `<@${targetId}> no tiene advertencias activas registradas.`,
          color: MODERATION_COLORS.success,
        }),
      ],
      components: [],
    };
  }

  const offset = page * PAGE_SIZE;
  const fields = warns.map((w, i) => ({
    name: `#${offset + i + 1} — ${formatDate(w.createdAt)}`,
    value: `**Motivo:** ${w.reason ?? 'Sin motivo'}\n**Moderador:** <@${w.moderatorId}>\n**ID:** \`${w.id}\``,
  }));

  const embed = buildModerationNoticeEmbed({
    title: '⚠️ Historial de advertencias',
    description: `Advertencias activas para <@${targetId}>`,
    color: MODERATION_COLORS.warning,
    fields: [
      { name: 'Usuario', value: `<@${targetId}>\nID: \`${targetId}\``, inline: true },
      { name: 'Total activas', value: `${total}`, inline: true },
      { name: 'Página', value: `${page + 1} / ${totalPages}`, inline: true },
      ...fields,
    ],
  });

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`mod:warnings:${targetId}:${page - 1}`)
      .setLabel('◀ Anterior')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(page === 0),
    new ButtonBuilder()
      .setCustomId(`mod:warnings:${targetId}:${page + 1}`)
      .setLabel('Siguiente ▶')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(page >= totalPages - 1),
  );

  return { embeds: [embed], components: [row] };
}

export const warningsCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('warnings')
    .setDescription('Muestra los avisos activos de un usuario')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario').setRequired(true),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId) return;

    const target = interaction.options.getUser('usuario', true);
    const result = await renderWarningsPage(guildId, target.id, 0);
    await interaction.editReply(result);
  },
};
