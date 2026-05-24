import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { getLogChannel } from '../../utils/log-channel.js';
import {
  MODERATION_COLORS,
  buildModerationLogEmbed,
  buildModerationStaffEmbed,
  buildModerationErrorEmbed,
} from '../../utils/moderation-ui.js';

export const unwarnCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('unwarn')
    .setDescription('Elimina una advertencia específica de un usuario')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario al que pertenece la advertencia').setRequired(true),
    )
    .addStringOption(opt =>
      opt.setName('id').setDescription('ID de la advertencia (visible en /warnings)').setRequired(true),
    )
    .addStringOption(opt =>
      opt.setName('motivo').setDescription('Motivo de la eliminación').setRequired(false),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId) return;

    const target = interaction.options.getUser('usuario', true);
    const warnId = interaction.options.getString('id', true).trim();
    const reason = interaction.options.getString('motivo')?.trim() ?? 'Sin motivo especificado';

    const warn = await prisma.moderationLog.findFirst({
      where: { id: warnId, guildId, targetId: target.id, type: 'WARN', active: true },
    });

    if (!warn) {
      await interaction.editReply({
        embeds: [
          buildModerationErrorEmbed(
            'Advertencia no encontrada',
            'No existe una advertencia activa con ese ID para ese usuario.\nUsa `/warnings` para ver los IDs correctos.',
          ),
        ],
      });
      return;
    }

    await prisma.moderationLog.update({
      where: { id: warnId },
      data: { active: false },
    });

    const remaining = await prisma.moderationLog.count({
      where: { guildId, targetId: target.id, type: 'WARN', active: true },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild!, config, 'mod');

    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          buildModerationLogEmbed({
            title: '🗑️ Advertencia eliminada',
            color: MODERATION_COLORS.success,
            targetId: target.id,
            targetTag: target.tag,
            moderatorId: interaction.user.id,
            reason,
            logId: warn.id,
            createdAt: new Date(),
          }).addFields(
            { name: 'Advertencia original', value: warn.reason ?? 'Sin motivo', inline: true },
            { name: 'Advertencias restantes', value: `${remaining}`, inline: true },
          ),
        ],
      });
    }

    await interaction.editReply({
      embeds: [
        buildModerationStaffEmbed({
          title: '🗑️ Advertencia eliminada',
          color: MODERATION_COLORS.success,
          description: `Se eliminó la advertencia \`${warn.id}\` de <@${target.id}>.\nAdvertencias activas restantes: **${remaining}**`,
          fields: [
            { name: 'Advertencia original', value: warn.reason ?? 'Sin motivo', inline: true },
            { name: 'Motivo de eliminación', value: reason, inline: true },
          ],
        }),
      ],
    });
  },
};
