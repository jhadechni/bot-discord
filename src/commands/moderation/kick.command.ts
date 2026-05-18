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
    if (!target || !('kickable' in target) || !target.kickable) {
      await interaction.editReply({
        embeds: [
          buildModerationErrorEmbed(
            '⚠️ No se pudo aplicar la expulsión',
            'No puedo expulsar a ese usuario por jerarquía, permisos o protección interna.',
          ),
        ],
      });
      return;
    }

    const reason = normalizeModerationReason(interaction.options.getString('motivo'));

    try {
      await target.user.send({
        embeds: [
          buildModerationUserDmEmbed({
            title: '🚪 Has sido expulsado',
            actionLabel: 'un kick',
            description: 'Has sido retirado del servidor.',
            color: MODERATION_COLORS.kick,
            guildName: interaction.guild?.name ?? 'este servidor',
            reason,
          }),
        ],
      });
    } catch { /* DM cerrados */ }

    await target.kick(reason);

    const log = await prisma.moderationLog.create({
      data: { guildId, targetId: target.id, moderatorId: interaction.user.id, type: 'KICK', reason, active: true },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild!, config, 'mod');
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          buildModerationLogEmbed({
            title: '🚪 Usuario expulsado',
            color: MODERATION_COLORS.kick,
            targetId: target.id,
            targetTag: target.user.globalName ?? target.user.username,
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
          title: '🚪 Expulsión aplicada',
          color: MODERATION_COLORS.kick,
          description: `<@${target.id}> fue expulsado correctamente.`,
          fields: [{ name: 'Motivo', value: reason, inline: false }],
        }),
      ],
    });
  },
};
