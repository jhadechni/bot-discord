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
    const reason = normalizeModerationReason(interaction.options.getString('motivo'));
    const deleteMessageSeconds = (interaction.options.getInteger('borrar_mensajes') ?? 0) * 86400;

    const member = interaction.guild?.members.cache.get(target.id);
    if (member && !member.bannable) {
      await interaction.editReply({
        embeds: [
          buildModerationErrorEmbed(
            'No se pudo aplicar el ban',
            'No tengo permisos para banear a este usuario o su rol está por encima del mío.',
          ),
        ],
      });
      return;
    }

    let dmDelivered = true;
    try {
      await target.send({
        embeds: [
          buildModerationUserDmEmbed({
            title: 'Has sido baneado/a',
            color: MODERATION_COLORS.danger,
            guildName: interaction.guild?.name ?? 'este servidor',
            reason,
          }),
        ],
      });
    } catch {
      dmDelivered = false;
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
      await logsChannel.send({
        embeds: [
          buildModerationLogEmbed({
            title: 'Usuario baneado',
            color: MODERATION_COLORS.danger,
            targetId: target.id,
            targetTag: target.tag,
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
          title: 'Ban aplicado',
          color: MODERATION_COLORS.success,
          targetMention: `<@${target.id}>`,
          reason,
          dmDelivered,
        }),
      ],
    });
  },
};
