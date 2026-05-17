import { SlashCommandBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { xpProgress, progressBar, formatVoiceTime } from '../../utils/xp.js';
import { buildLevelProfileEmbed } from '../../utils/levels-ui.js';

export const perfilCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('perfil')
    .setDescription('Ver el perfil de XP y niveles de un usuario')
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario a consultar (por defecto: tú)').setRequired(false),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId) return;

    const target = interaction.options.getUser('usuario') ?? interaction.user;

    const activity = await prisma.userActivity.findUnique({
      where: { guildId_userId: { guildId, userId: target.id } },
    });

    const xp = activity?.xp ?? 0;
    const { level, current, required } = xpProgress(xp);
    const bar = progressBar(current, required);

    // Posición en el ranking (usuarios con más XP que éste)
    const rankAbove = await prisma.userActivity.count({
      where: { guildId, xp: { gt: xp } },
    });

    const member = await interaction.guild?.members.fetch(target.id).catch(() => null);
    const displayName = member?.displayName ?? target.username;

    const avatarUrl = target.displayAvatarURL();
    const embed = buildLevelProfileEmbed({
      userTag: target.tag,
      displayName,
      avatarUrl,
      level,
      rank: rankAbove + 1,
      xp,
      nextLevel: level + 1,
      currentXp: current,
      requiredXp: required,
      progress: bar,
      messageCount: activity?.messageCount ?? 0,
      voiceTime: formatVoiceTime(activity?.voiceMinutes ?? 0),
    });

    await interaction.editReply({ embeds: [embed] });
  },
};
