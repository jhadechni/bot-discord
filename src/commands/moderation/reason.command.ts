import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';

export const reasonCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('reason')
    .setDescription('Edita el motivo de una acción de moderación')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addStringOption(opt =>
      opt.setName('id').setDescription('ID de la acción (obtenido con /logs)').setRequired(true),
    )
    .addStringOption(opt =>
      opt.setName('motivo').setDescription('Nuevo motivo').setRequired(true).setMaxLength(500),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId) return;

    const id = interaction.options.getString('id', true);
    const newReason = interaction.options.getString('motivo', true);

    const entry = await prisma.moderationLog.findFirst({
      where: { id, guildId },
    });

    if (!entry) {
      await interaction.editReply('❌ No se encontró ninguna acción con ese ID en este servidor.');
      return;
    }

    await prisma.moderationLog.update({
      where: { id },
      data: { reason: newReason },
    });

    const embed = new EmbedBuilder()
      .setColor(0x57f287)
      .setTitle('✏️ Motivo actualizado')
      .addFields(
        { name: 'ID', value: `\`${id}\``, inline: true },
        { name: 'Tipo', value: entry.type, inline: true },
        { name: 'Usuario', value: `<@${entry.targetId}>`, inline: true },
        { name: 'Motivo anterior', value: entry.reason ?? 'Sin motivo' },
        { name: 'Motivo nuevo', value: newReason },
      )
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  },
};
