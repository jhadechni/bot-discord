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
  buildModerationNoticeEmbed,
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
            'No se pudo aplicar el ban temporal',
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
            title: 'Has recibido un ban temporal',
            color: MODERATION_COLORS.danger,
            guildName: interaction.guild.name,
            duration: durationLabel,
            reason,
          }),
        ],
      });
    } catch {
      dmDelivered = false;
    }

    await interaction.guild.members.ban(target, { reason });

    const log = await prisma.moderationLog.create({
      data: { guildId, targetId: target.id, moderatorId: interaction.user.id, type: 'TEMPBAN', reason, duration },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild, config, 'mod');
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          buildModerationLogEmbed({
            title: 'Ban temporal aplicado',
            color: MODERATION_COLORS.danger,
            targetId: target.id,
            targetTag: target.tag,
            moderatorId: interaction.user.id,
            duration: durationLabel,
            reason,
            logId: log.id,
            createdAt: log.createdAt,
          }),
        ],
      });
    }

    // Desbanear automáticamente al expirar
    const guild = interaction.guild;
    setTimeout(async () => {
      try {
        await guild.members.unban(target.id, 'Tempban expirado');
        const expiryLogsChannel = getLogChannel(guild, config, 'mod');
        if (expiryLogsChannel) {
          await expiryLogsChannel.send({
            embeds: [
              buildModerationNoticeEmbed({
                title: 'Ban temporal expirado',
                color: MODERATION_COLORS.success,
                footer: 'logs',
                fields: [
                  { name: 'Usuario', value: `${target.tag}\nID: \`${target.id}\``, inline: true },
                  { name: 'Duración original', value: durationLabel, inline: true },
                ],
              }),
            ],
          });
        }
      } catch { /* Usuario ya desbaneado o error */ }
    }, duration * 60 * 1000);

    await interaction.editReply({
      embeds: [
        buildModerationStaffEmbed({
          title: 'Ban temporal aplicado',
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
