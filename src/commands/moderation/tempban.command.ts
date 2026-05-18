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
  buildModerationStaffEmbed,
  buildModerationUserDmEmbed,
  normalizeModerationReason,
} from '../../utils/moderation-ui.js';

export const tempbanCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('tempban')
    .setDescription('Banea a un usuario temporalmente')
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario a banear').setRequired(true),
    )
    .addIntegerOption(opt =>
      opt.setName('duracion').setDescription('Duración en minutos').setRequired(true).setMinValue(1),
    )
    .addStringOption(opt =>
      opt.setName('motivo').setDescription('Motivo del baneo').setRequired(false),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId || !interaction.guild) return;

    const target = interaction.options.getUser('usuario', true);
    const duration = interaction.options.getInteger('duracion', true);
    const durationLabel = formatTime(duration);
    const reason = normalizeModerationReason(interaction.options.getString('motivo'));

    const member = interaction.guild.members.cache.get(target.id);
    if (member && !member.bannable) {
      await interaction.editReply({
        embeds: [
          buildModerationErrorEmbed(
            '⚠️ No se pudo aplicar el ban temporal',
            'No puedo banear temporalmente a ese usuario por jerarquía, permisos o protección interna.',
          ),
        ],
      });
      return;
    }

    try {
      await target.send({
        embeds: [
          buildModerationUserDmEmbed({
            title: '⛔ Has sido baneado temporalmente',
            actionLabel: 'un ban temporal',
            description: 'Has sido retirado temporalmente del servidor.',
            color: MODERATION_COLORS.danger,
            guildName: interaction.guild.name,
            duration: durationLabel,
            reason,
          }),
        ],
      });
    } catch { /* DM cerrados */ }

    await interaction.guild.members.ban(target, { reason });

    const log = await prisma.moderationLog.create({
      data: { guildId, targetId: target.id, moderatorId: interaction.user.id, type: 'TEMPBAN', reason, duration, active: true },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild, config, 'mod');
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          buildModerationLogEmbed({
            title: '⛔ Usuario baneado temporalmente',
            color: MODERATION_COLORS.danger,
            targetId: target.id,
            targetTag: target.globalName ?? target.username,
            moderatorId: interaction.user.id,
            duration: durationLabel,
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
          title: '⛔ Ban temporal aplicado',
          color: MODERATION_COLORS.danger,
          description: `<@${target.id}> fue baneado durante **${durationLabel}**.`,
          fields: [{ name: 'Motivo', value: reason, inline: false }],
        }),
      ],
    });
  },
};
