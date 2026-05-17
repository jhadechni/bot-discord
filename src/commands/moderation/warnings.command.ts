import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import {
  MODERATION_COLORS,
  buildModerationNoticeEmbed,
} from '../../utils/moderation-ui.js';
import { formatDate } from '../../utils/ui.js';

export const warningsCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('warnings')
    .setDescription('Muestra los avisos de un usuario')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario').setRequired(true),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId) return;

    const target = interaction.options.getUser('usuario', true);

    const warns = await prisma.moderationLog.findMany({
      where: { guildId, targetId: target.id, type: 'WARN' },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    if (warns.length === 0) {
      await interaction.editReply({
        embeds: [
          buildModerationNoticeEmbed({
            title: 'Sin advertencias',
            description: `**${target.tag}** no tiene advertencias registradas.`,
            color: MODERATION_COLORS.success,
          }),
        ],
      });
      return;
    }

    const fields = warns.map((w, i) => ({
      name: `#${i + 1} — ${formatDate(w.createdAt)}`,
      value: `**Motivo:** ${w.reason ?? 'Sin motivo'}\n**Moderador:** <@${w.moderatorId}>\n**ID:** \`${w.id}\``,
    }));

    await interaction.editReply({
      embeds: [
        buildModerationNoticeEmbed({
          title: `Advertencias de ${target.tag}`,
          description: `Total mostrado: **${warns.length}** (últimas 10)`,
          color: MODERATION_COLORS.warning,
          fields,
        }),
      ],
    });
  },
};
