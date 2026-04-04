import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { getLogChannel } from '../../utils/log-channel.js';

export const kickCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Expulsa a un usuario del servidor')
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario a expulsar').setRequired(true),
    )
    .addStringOption(opt =>
      opt.setName('motivo').setDescription('Motivo de la expulsión').setRequired(false),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId) return;

    const target = interaction.options.getMember('usuario');
    if (!target || !('kickable' in target)) {
      await interaction.editReply('❌ No se encontró al usuario en el servidor.');
      return;
    }
    if (!target.kickable) {
      await interaction.editReply('❌ No tengo permisos para expulsar a este usuario.');
      return;
    }

    const reason = interaction.options.getString('motivo') ?? 'Sin motivo';

    try {
      await target.user.send(
        `👢 Has sido expulsado de **${interaction.guild?.name}**.\nMotivo: ${reason}`,
      );
    } catch {
      // DMs desactivados
    }

    await target.kick(reason);

    const log = await prisma.moderationLog.create({
      data: {
        guildId,
        targetId: target.id,
        moderatorId: interaction.user.id,
        type: 'KICK',
        reason,
      },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild!, config, 'mod');
    if (logsChannel) {
      const embed = new EmbedBuilder()
        .setColor(0xed4245)
        .setTitle('👢 Usuario expulsado')
        .addFields(
          { name: 'Usuario', value: `${target.user.tag} (${target.id})`, inline: true },
          { name: 'Moderador', value: `<@${interaction.user.id}>`, inline: true },
          { name: 'Motivo', value: reason },
          { name: 'ID', value: log.id, inline: true },
        )
        .setTimestamp();
      await logsChannel.send({ embeds: [embed] });
    }

    await interaction.editReply(`✅ **${target.user.tag}** fue expulsado.`);
  },
};
