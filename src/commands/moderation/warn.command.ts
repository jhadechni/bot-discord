import {
  SlashCommandBuilder,
  PermissionFlagsBits,
} from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { getLogChannel } from '../../utils/log-channel.js';
import {
  MODERATION_COLORS,
  buildModerationLogEmbed,
  buildModerationStaffEmbed,
  buildModerationUserDmEmbed,
} from '../../utils/moderation-ui.js';

export const warnCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('warn')
    .setDescription('Advierte a un usuario')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption((opt) =>
      opt
        .setName('usuario')
        .setDescription('Usuario a advertir')
        .setRequired(true),
    )
    .addStringOption((opt) =>
      opt
        .setName('motivo')
        .setDescription('Motivo de la advertencia')
        .setRequired(true),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId) return;

    const target = interaction.options.getUser('usuario', true);
    const reason = interaction.options.getString('motivo', true).trim();

    const log = await prisma.moderationLog.create({
      data: {
        guildId,
        targetId: target.id,
        moderatorId: interaction.user.id,
        type: 'WARN',
        reason,
      },
    });

    let dmDelivered = true;
    try {
      await target.send({
        embeds: [
          buildModerationUserDmEmbed({
            title: 'Has recibido una advertencia',
            color: MODERATION_COLORS.warning,
            guildName: interaction.guild?.name ?? 'este servidor',
            reason,
          }),
        ],
      });
    } catch {
      dmDelivered = false;
    }

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild!, config, 'mod');
    const warningsCount = await prisma.moderationLog.count({
      where: { guildId, targetId: target.id, type: 'WARN' },
    });
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          buildModerationLogEmbed({
            title: 'Advertencia registrada',
            color: MODERATION_COLORS.warning,
            targetId: target.id,
            targetTag: target.tag,
            moderatorId: interaction.user.id,
            reason,
            logId: log.id,
            createdAt: log.createdAt,
          }).addFields({ name: 'Acumulado', value: `${warningsCount} advertencia${warningsCount === 1 ? '' : 's'}`, inline: true }),
        ],
      });
    }

    await interaction.editReply({
      embeds: [
        buildModerationStaffEmbed({
          title: 'Advertencia registrada',
          color: MODERATION_COLORS.success,
          targetMention: `<@${target.id}>`,
          reason,
          dmDelivered,
          fields: [
            { name: 'Acumulado', value: `${warningsCount}`, inline: true },
            { name: 'ID interno', value: `\`${log.id}\``, inline: true },
          ],
        }),
      ],
    });
  },
};
