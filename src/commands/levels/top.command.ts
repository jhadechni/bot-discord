import { SlashCommandBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { formatVoiceTime } from '../../utils/xp.js';
import { buildLevelEmptyEmbed, buildTopEmbed } from '../../utils/levels-ui.js';

export const topCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('top')
    .setDescription('Ranking de actividad del servidor')
    .addStringOption(opt =>
      opt
        .setName('tipo')
        .setDescription('Tipo de ranking (por defecto: XP)')
        .setRequired(false)
        .addChoices(
          { name: 'XP', value: 'xp' },
          { name: 'Mensajes', value: 'mensajes' },
          { name: 'Tiempo en voz', value: 'voz' },
        ),
    ),

  async execute(interaction) {
    await interaction.deferReply();

    const guildId = interaction.guildId;
    if (!guildId) return;

    const tipo = interaction.options.getString('tipo') ?? 'xp';
    const orderField =
      tipo === 'mensajes' ? 'messageCount' : tipo === 'voz' ? 'voiceMinutes' : 'xp';

    const top = await prisma.userActivity.findMany({
      where: { guildId },
      orderBy: { [orderField]: 'desc' },
      take: 10,
    });

    if (top.length === 0) {
      await interaction.editReply({ embeds: [buildLevelEmptyEmbed()] });
      return;
    }

    const entries = await Promise.all(
      top.map(async (entry, i) => {
        const user = await interaction.client.users.fetch(entry.userId).catch(() => null);
        const name = user ? (user.globalName ?? user.username) : `Usuario ${entry.userId.slice(-4)}`;
        const avatarUrl = user?.displayAvatarURL({ size: 256 }) ?? null;

        const statLine =
          tipo === 'xp'
            ? `**${entry.xp.toLocaleString()}** XP`
            : tipo === 'mensajes'
              ? `**${entry.messageCount.toLocaleString()}** mensajes`
              : `**${formatVoiceTime(entry.voiceMinutes)}**`;

        return { rank: i + 1, name, avatarUrl, statLine, level: entry.level };
      }),
    );

    const titles: Record<string, string> = {
      xp: 'Top XP',
      mensajes: 'Top Mensajes',
      voz: 'Top Tiempo en Voz',
    };

    const embed = buildTopEmbed({
      title: titles[tipo] ?? 'Top XP',
      entries,
      guildName: interaction.guild?.name ?? 'Servidor',
    });

    await interaction.editReply({ embeds: [embed] });
  },
};
