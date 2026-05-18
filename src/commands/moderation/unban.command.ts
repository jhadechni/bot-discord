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
  buildModerationUserDmEmbed,
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
            '⚠️ No se pudo retirar el ban',
            'No se encontró un ban activo o no tengo permisos para retirarlo.',
          ),
        ],
      });
      return;
    }

    const log = await prisma.moderationLog.create({
      data: { guildId, targetId: userId, moderatorId: interaction.user.id, type: 'UNBAN', reason, active: true },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild, config, 'mod');
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          buildModerationLogEmbed({
            title: '✅ Usuario desbaneado',
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

    try {
      const unbannedUser = await interaction.client.users.fetch(userId);
      await unbannedUser.send({
        embeds: [
          buildModerationUserDmEmbed({
            title: '✅ Tu ban ha sido retirado',
            description: 'La restricción de acceso al servidor fue retirada.',
            color: MODERATION_COLORS.success,
            guildName: interaction.guild.name,
            reason,
          }),
        ],
      });
    } catch { /* Usuario no encontrado o DM cerrados */ }

    await interaction.editReply({
      embeds: [
        buildModerationStaffEmbed({
          title: '✅ Ban retirado',
          color: MODERATION_COLORS.success,
          description: `El ban del usuario \`${userId}\` fue retirado correctamente.`,
        }),
      ],
    });
  },
};
