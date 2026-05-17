import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { getLogChannel } from '../../utils/log-channel.js';
import {
  MODERATION_COLORS,
  buildModerationErrorEmbed,
  buildModerationLogEmbed,
  buildModerationStaffEmbed,
  normalizeModerationReason,
} from '../../utils/moderation-ui.js';

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
    const reason = normalizeModerationReason(interaction.options.getString('motivo'));

    try {
      await interaction.guild.members.unban(userId, reason);
    } catch {
      await interaction.editReply({
        embeds: [
          buildModerationErrorEmbed(
            'No se pudo desbanear',
            'Verifica que el ID sea correcto y que el usuario esté baneado.',
          ),
        ],
      });
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
          buildModerationLogEmbed({
            title: 'Usuario desbaneado',
            color: MODERATION_COLORS.success,
            targetId: userId,
            moderatorId: interaction.user.id,
            reason,
            logId: log.id,
            createdAt: log.createdAt,
          }),
        ],
      });
    }

    await interaction.editReply({
      embeds: [
        buildModerationStaffEmbed({
          title: 'Usuario desbaneado',
          color: MODERATION_COLORS.success,
          description: `Usuario ID: \`${userId}\``,
          reason,
        }),
      ],
    });
  },
};
