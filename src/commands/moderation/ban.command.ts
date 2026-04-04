import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { getLogChannel } from '../../utils/log-channel.js';

export const banCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Banea a un usuario del servidor')
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario a banear').setRequired(true),
    )
    .addStringOption(opt =>
      opt.setName('motivo').setDescription('Motivo del baneo').setRequired(false),
    )
    .addIntegerOption(opt =>
      opt
        .setName('borrar_mensajes')
        .setDescription('Días de mensajes a borrar (0-7)')
        .setMinValue(0)
        .setMaxValue(7)
        .setRequired(false),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId) return;

    const target = interaction.options.getUser('usuario', true);
    const reason = interaction.options.getString('motivo') ?? 'Sin motivo';
    const deleteMessageSeconds = (interaction.options.getInteger('borrar_mensajes') ?? 0) * 86400;

    const member = interaction.guild?.members.cache.get(target.id);
    if (member && !member.bannable) {
      await interaction.editReply('❌ No tengo permisos para banear a este usuario.');
      return;
    }

    try {
      await target.send(
        `🔨 Has sido baneado de **${interaction.guild?.name}**.\nMotivo: ${reason}`,
      );
    } catch {
      // DMs desactivados
    }

    await interaction.guild?.members.ban(target, { reason, deleteMessageSeconds });

    const log = await prisma.moderationLog.create({
      data: {
        guildId,
        targetId: target.id,
        moderatorId: interaction.user.id,
        type: 'BAN',
        reason,
      },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild!, config, 'mod');
    if (logsChannel) {
      const embed = new EmbedBuilder()
        .setColor(0x992d22)
        .setTitle('🔨 Usuario baneado')
        .addFields(
          { name: 'Usuario', value: `${target.tag} (${target.id})`, inline: true },
          { name: 'Moderador', value: `<@${interaction.user.id}>`, inline: true },
          { name: 'Motivo', value: reason },
          { name: 'ID', value: log.id, inline: true },
        )
        .setTimestamp();
      await logsChannel.send({ embeds: [embed] });
    }

    await interaction.editReply(`✅ **${target.tag}** fue baneado.`);
  },
};
