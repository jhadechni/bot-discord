import {
  SlashCommandBuilder,
  PermissionFlagsBits,
} from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { getLogChannel } from '../../utils/log-channel.js';
import { formatTime } from '../../utils/time.js';
import { logger } from '../../core/logger.js';
import {
  MODERATION_COLORS,
  buildModerationLogEmbed,
  buildModerationStaffEmbed,
  buildModerationUserDmEmbed,
  buildModerationErrorEmbed,
} from '../../utils/moderation-ui.js';

const WARN_LIMIT = 3;
const AUTO_TIMEOUT_MINUTES = 120;

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

    const member = await interaction.guild?.members.fetch(target.id).catch(() => null);
    const moderator = await interaction.guild?.members.fetch(interaction.user.id).catch(() => null);
    const canWarn =
      member &&
      !target.bot &&
      target.id !== interaction.user.id &&
      (interaction.guild?.ownerId === interaction.user.id ||
        (member.roles.highest.position < (moderator?.roles.highest.position ?? 0)));

    if (!canWarn) {
      await interaction.editReply({
        embeds: [
          buildModerationErrorEmbed(
            '⚠️ No se pudo registrar la advertencia',
            'No puedo advertir a ese usuario por jerarquía, permisos o protección interna.',
          ),
        ],
      });
      return;
    }

    const log = await prisma.moderationLog.create({
      data: {
        guildId,
        targetId: target.id,
        moderatorId: interaction.user.id,
        type: 'WARN',
        reason,
        active: true,
      },
    });

    const warningsCount = await prisma.moderationLog.count({
      where: { guildId, targetId: target.id, type: 'WARN', active: true },
    });

    let dmDelivered = true;
    try {
      await target.send({
        embeds: [
          buildModerationUserDmEmbed({
            title: '⚠️ Has recibido una advertencia',
            actionLabel: 'una advertencia',
            color: MODERATION_COLORS.warning,
            guildName: interaction.guild?.name ?? 'este servidor',
            warnProgress: { current: warningsCount, limit: WARN_LIMIT },
            reason,
          }),
        ],
      });
    } catch {
      dmDelivered = false;
    }

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild!, config, 'mod');

    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          buildModerationLogEmbed({
            title: '⚠️ Advertencia registrada',
            color: MODERATION_COLORS.warning,
            targetId: target.id,
            targetTag: target.tag,
            moderatorId: interaction.user.id,
            reason,
            logId: log.id,
            createdAt: log.createdAt,
          }).addFields({ name: 'Acumulado', value: `${warningsCount} / ${WARN_LIMIT}`, inline: true }),
        ],
      });
    }

    let autoTimeoutApplied = false;
    if (warningsCount > 0 && warningsCount % WARN_LIMIT === 0) {
      try {
        if (member?.moderatable) {
          const timeoutReason = `Timeout automático por acumular ${warningsCount} advertencias.`;
          const durationLabel = formatTime(AUTO_TIMEOUT_MINUTES);
          await member.timeout(AUTO_TIMEOUT_MINUTES * 60 * 1000, timeoutReason);
          await prisma.moderationLog.updateMany({
            where: { guildId, targetId: target.id, type: 'WARN', active: true },
            data: { active: false },
          });
          await prisma.moderationLog.create({
            data: {
              guildId,
              targetId: target.id,
              moderatorId: interaction.client.user!.id,
              type: 'TIMEOUT',
              reason: timeoutReason,
              duration: AUTO_TIMEOUT_MINUTES,
              active: true,
            },
          });
          try {
            await target.send({
              embeds: [
                buildModerationUserDmEmbed({
                  title: '🔇 Has recibido un timeout automático',
                  actionLabel: 'un timeout automático',
                  color: MODERATION_COLORS.timeout,
                  guildName: interaction.guild?.name ?? 'este servidor',
                  duration: durationLabel,
                  reason: timeoutReason,
                }),
              ],
            });
          } catch { /* DM cerrados */ }
          if (logsChannel) {
            await logsChannel.send({
              embeds: [
                buildModerationLogEmbed({
                  title: '🔇 Timeout automático aplicado',
                  color: MODERATION_COLORS.timeout,
                  targetId: target.id,
                  targetTag: target.tag,
                  moderatorId: interaction.client.user!.id,
                  reason: timeoutReason,
                  duration: durationLabel,
                  logId: log.id,
                  createdAt: new Date(),
                }),
              ],
            });
          }
          autoTimeoutApplied = true;
        } else {
          logger.warn({ guildId, targetId: target.id }, 'Auto-timeout: miembro no moderatable o no encontrado');
        }
      } catch (err) {
        logger.error({ err, guildId, targetId: target.id }, 'Error al aplicar timeout automático por advertencias');
      }
    }

    await interaction.editReply({
      embeds: [
        buildModerationStaffEmbed({
          title: '⚠️ Advertencia registrada',
          color: MODERATION_COLORS.warning,
          targetMention: `<@${target.id}>`,
          reason,
          dmDelivered,
          ...(autoTimeoutApplied && {
            description: `Se registró una advertencia para: <@${target.id}>\n⚠️ Ha alcanzado **${warningsCount} advertencias** — se aplicó un timeout automático de **${formatTime(AUTO_TIMEOUT_MINUTES)}**.`,
          }),
        }),
      ],
    });
  },
};
