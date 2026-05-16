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

const MAX_TIMEOUT_MINUTES = 40_320;
const MAX_TIMEOUT_MS = MAX_TIMEOUT_MINUTES * 60 * 1000; // 28 días (máximo de Discord)

export const muteCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('mute')
    .setDescription('Silencia a un usuario (timeout hasta 28 días)')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario a silenciar').setRequired(true),
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
            'No se pudo aplicar el mute',
            'No tengo permisos para silenciar a este usuario o su rol está por encima del mío.',
          ),
        ],
      });
      return;
    }

    const reason = normalizeModerationReason(interaction.options.getString('motivo'));
    const durationLabel = formatTime(MAX_TIMEOUT_MINUTES);
    await target.timeout(MAX_TIMEOUT_MS, reason);

    const log = await prisma.moderationLog.create({
      data: { guildId, targetId: target.id, moderatorId: interaction.user.id, type: 'MUTE', reason },
    });

    let dmDelivered = true;
    try {
      await target.user.send({
        embeds: [
          buildModerationUserDmEmbed({
            title: 'Has sido silenciado/a',
            color: MODERATION_COLORS.mute,
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
            title: 'Usuario silenciado',
            color: MODERATION_COLORS.mute,
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
            title: 'Usuario silenciado',
            color: MODERATION_COLORS.mute,
            targetMention: `<@${target.id}>`,
            duration: durationLabel,
            reason,
            description: `<@${target.id}> ha sido silenciado/a temporalmente.`,
          }),
        ],
      });
    }

    await interaction.editReply({
      embeds: [
        buildModerationStaffEmbed({
          title: 'Mute aplicado',
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

export const tempmuteCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('tempmute')
    .setDescription('Silencia temporalmente a un usuario')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario a silenciar').setRequired(true),
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
            'No se pudo aplicar el mute temporal',
            'No tengo permisos para silenciar a este usuario o su rol está por encima del mío.',
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
      data: { guildId, targetId: target.id, moderatorId: interaction.user.id, type: 'TEMPMUTE', reason, duration },
    });

    let dmDelivered = true;
    try {
      await target.user.send({
        embeds: [
          buildModerationUserDmEmbed({
            title: 'Has recibido un mute temporal',
            color: MODERATION_COLORS.mute,
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
            title: 'Mute temporal aplicado',
            color: MODERATION_COLORS.mute,
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
            title: 'Usuario silenciado temporalmente',
            color: MODERATION_COLORS.mute,
            targetMention: `<@${target.id}>`,
            duration: durationLabel,
            reason,
            description: `<@${target.id}> ha sido silenciado/a temporalmente por **${durationLabel}**.`,
          }),
        ],
      });
    }

    await interaction.editReply({
      embeds: [
        buildModerationStaffEmbed({
          title: 'Mute temporal aplicado',
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

export const unmuteCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('unmute')
    .setDescription('Quita el silencio a un usuario')
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
            'No se pudo quitar el mute',
            'No tengo permisos para moderar a este usuario o su rol está por encima del mío.',
          ),
        ],
      });
      return;
    }

    const reason = normalizeModerationReason(interaction.options.getString('motivo'));
    await target.timeout(null, reason);

    const log = await prisma.moderationLog.create({
      data: { guildId, targetId: target.id, moderatorId: interaction.user.id, type: 'UNMUTE', reason },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild, config, 'mod');
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          buildModerationLogEmbed({
            title: 'Mute eliminado',
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
          title: 'Mute eliminado',
          color: MODERATION_COLORS.success,
          targetMention: `<@${target.id}>`,
          reason,
        }),
      ],
    });
  },
};
