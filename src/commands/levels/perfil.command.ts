import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { xpProgress, progressBar, formatVoiceTime } from '../../utils/xp.js';

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

    const embed = new EmbedBuilder()
      .setColor(0x5865f2)
      .setAuthor({ name: target.tag, iconURL: target.displayAvatarURL() })
      .setTitle(`🎖️ Perfil de ${displayName}`)
      .addFields(
        { name: '⭐ Nivel', value: `**${level}**`, inline: true },
        { name: '🏆 Ranking', value: `**#${rankAbove + 1}**`, inline: true },
        { name: '✨ XP Total', value: `${xp.toLocaleString()}`, inline: true },
        {
          name: `📊 Progreso al nivel ${level + 1}`,
          value: `${bar}  ${current.toLocaleString()} / ${required.toLocaleString()} XP`,
        },
        { name: '💬 Mensajes', value: `${(activity?.messageCount ?? 0).toLocaleString()}`, inline: true },
        { name: '🎙️ Tiempo en voz', value: formatVoiceTime(activity?.voiceMinutes ?? 0), inline: true },
      )
      .setThumbnail(target.displayAvatarURL())
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  },
};
