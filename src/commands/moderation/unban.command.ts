import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { getLogChannel } from '../../utils/log-channel.js';

export const unbanCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('unban')
    .setDescription('Desbanea a un usuario del servidor')
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addStringOption(opt =>
      opt.setName('user_id').setDescription('ID del usuario a desbanear').setRequired(true),
    )
    .addStringOption(opt =>
      opt.setName('motivo').setDescription('Motivo del desbaneo').setRequired(false),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId || !interaction.guild) return;

    const userId = interaction.options.getString('user_id', true);
    const reason = interaction.options.getString('motivo') ?? 'Sin motivo';

    try {
      await interaction.guild.members.unban(userId, reason);
    } catch {
      await interaction.editReply('❌ No se pudo desbanear. Verifica que el ID sea correcto y que el usuario esté baneado.');
      return;
    }

    const log = await prisma.moderationLog.create({
      data: { guildId, targetId: userId, moderatorId: interaction.user.id, type: 'UNBAN', reason },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild, config, 'mod');
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          new EmbedBuilder()
            .setColor(0x57f287)
            .setTitle('🔓 Usuario desbaneado')
            .addFields(
              { name: 'Usuario ID', value: userId, inline: true },
              { name: 'Moderador', value: `<@${interaction.user.id}>`, inline: true },
              { name: 'Motivo', value: reason },
              { name: 'ID', value: log.id, inline: true },
            )
            .setTimestamp(),
        ],
      });
    }

    await interaction.editReply(`✅ Usuario \`${userId}\` desbaneado.`);
  },
};
