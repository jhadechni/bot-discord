import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';

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
      await interaction.editReply(`✅ **${target.tag}** no tiene avisos.`);
      return;
    }

    const fields = warns.map((w, i) => ({
      name: `#${i + 1} — ${w.createdAt.toLocaleDateString('es-ES')}`,
      value: `**Motivo:** ${w.reason ?? 'Sin motivo'}\n**Moderador:** <@${w.moderatorId}>\n**ID:** \`${w.id}\``,
    }));

    const embed = new EmbedBuilder()
      .setColor(0xfee75c)
      .setTitle(`⚠️ Avisos de ${target.tag}`)
      .setDescription(`Total: **${warns.length}** (últimos 10)`)
      .addFields(fields)
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  },
};
