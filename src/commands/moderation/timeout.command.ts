import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { getLogChannel } from '../../utils/log-channel.js';
import { formatTime } from '../../utils/time.js';
import {
  MODERATION_COLORS,
  buildModerationErrorEmbed,
  buildModerationLogEmbed,
  buildModerationPublicEmbed,
  buildModerationStaffEmbed,
  buildModerationUserDmEmbed,
  normalizeModerationReason,
} from '../../utils/moderation-ui.js';

export const timeoutCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('timeout')
    .setDescription('Aplica un timeout a un usuario')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario').setRequired(true),
    )
    .addIntegerOption(opt =>
      opt.setName('duracion').setDescription('Duración en minutos').setRequired(true).setMinValue(1).setMaxValue(40320),
    )
    .addStringOption(opt =>
      opt.setName('motivo').setDescription('Motivo').setRequired(false),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId || !interaction.guild) return;

    const target = interaction.options.getMember('usuario');
    if (!target || !('moderatable' in target) || !target.moderatable) {
      await interaction.editReply({
        embeds: [
          buildModerationErrorEmbed(
            'No se pudo aplicar el timeout',
            'No tengo permisos para moderar a este usuario o su rol está por encima del mío.',
          ),
        ],
      });
      return;
    }

    const duration = interaction.options.getInteger('duracion', true);
    const durationLabel = formatTime(duration);
    const reason = normalizeModerationReason(interaction.options.getString('motivo'));

    await target.timeout(duration * 60 * 1000, reason);

    const log = await prisma.moderationLog.create({
      data: { guildId, targetId: target.id, moderatorId: interaction.user.id, type: 'TIMEOUT', reason, duration },
    });

    let dmDelivered = true;
    try {
      await target.user.send({
        embeds: [
          buildModerationUserDmEmbed({
            title: 'Has recibido un timeout',
            color: MODERATION_COLORS.timeout,
            guildName: interaction.guild.name,
            duration: durationLabel,
            reason,
          }),
        ],
      });
    } catch {
      dmDelivered = false;
    }

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild, config, 'mod');
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          buildModerationLogEmbed({
            title: 'Timeout aplicado',
            color: MODERATION_COLORS.timeout,
            targetId: target.id,
            targetTag: target.user.tag,
            moderatorId: interaction.user.id,
            duration: durationLabel,
            reason,
            logId: log.id,
            createdAt: log.createdAt,
          }),
        ],
      });
    }

    const publicCh = interaction.guild.channels.cache.get(interaction.channelId);
    if (publicCh?.isTextBased() && !publicCh.isDMBased()) {
      await publicCh.send({
        embeds: [
          buildModerationPublicEmbed({
            title: 'Timeout aplicado',
            color: MODERATION_COLORS.timeout,
            targetMention: `<@${target.id}>`,
            duration: durationLabel,
            reason,
            description: `<@${target.id}> recibió un timeout de **${durationLabel}**.`,
          }),
        ],
      });
    }

    await interaction.editReply({
      embeds: [
        buildModerationStaffEmbed({
          title: 'Timeout aplicado',
          color: MODERATION_COLORS.success,
          targetMention: `<@${target.id}>`,
          duration: durationLabel,
          reason,
          dmDelivered,
        }),
      ],
    });
  },
};

export const untimeoutCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('untimeout')
    .setDescription('Elimina el timeout de un usuario')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario').setRequired(true),
    )
    .addStringOption(opt =>
      opt.setName('motivo').setDescription('Motivo').setRequired(false),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId || !interaction.guild) return;

    const target = interaction.options.getMember('usuario');
    if (!target || !('moderatable' in target) || !target.moderatable) {
      await interaction.editReply({
        embeds: [
          buildModerationErrorEmbed(
            'No se pudo quitar el timeout',
            'No tengo permisos para moderar a este usuario o su rol está por encima del mío.',
          ),
        ],
      });
      return;
    }

    const reason = normalizeModerationReason(interaction.options.getString('motivo'));
    await target.timeout(null, reason);

    const log = await prisma.moderationLog.create({
      data: { guildId, targetId: target.id, moderatorId: interaction.user.id, type: 'UNTIMEOUT', reason },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild, config, 'mod');
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          buildModerationLogEmbed({
            title: 'Timeout eliminado',
            color: MODERATION_COLORS.success,
            targetId: target.id,
            targetTag: target.user.tag,
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
          title: 'Timeout eliminado',
          color: MODERATION_COLORS.success,
          targetMention: `<@${target.id}>`,
          reason,
        }),
      ],
    });
  },
};
