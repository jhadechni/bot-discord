import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { formatVoiceTime } from '../../utils/xp.js';

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
          { name: '⭐ XP', value: 'xp' },
          { name: '💬 Mensajes', value: 'mensajes' },
          { name: '🎙️ Tiempo en voz', value: 'voz' },
        ),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

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
      await interaction.editReply('📭 Todavía no hay actividad registrada en este servidor.');
      return;
    }

    const medals: Record<number, string> = { 0: '🥇', 1: '🥈', 2: '🥉' };

    const lines = await Promise.all(
      top.map(async (entry, i) => {
        const user = await interaction.client.users.fetch(entry.userId).catch(() => null);
        const name = user ? user.tag : `<@${entry.userId}>`;
        const prefix = medals[i] ?? `**${i + 1}.**`;

        const value =
          tipo === 'xp'
            ? `${entry.xp.toLocaleString()} XP  ·  Nv. ${entry.level}`
            : tipo === 'mensajes'
              ? `${entry.messageCount.toLocaleString()} mensajes`
              : formatVoiceTime(entry.voiceMinutes);

        return `${prefix} ${name}  —  ${value}`;
      }),
    );

    const titles: Record<string, string> = {
      xp: '⭐ Top XP',
      mensajes: '💬 Top Mensajes',
      voz: '🎙️ Top Tiempo en Voz',
    };

    const embed = new EmbedBuilder()
      .setColor(0xf1c40f)
      .setTitle(titles[tipo] ?? '⭐ Top XP')
      .setDescription(lines.join('\n'))
      .setFooter({ text: `${interaction.guild?.name ?? 'Servidor'}` })
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  },
};
