import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';

export const pingCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Comprueba que el bot está funcionando correctamente'),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const wsLatency = interaction.client.ws.ping;

    let dbStatus = 'Conectada';
    try {
      await prisma.$queryRaw`SELECT 1`;
    } catch {
      dbStatus = 'Error de conexión';
    }

    const embed = new EmbedBuilder()
      .setColor(0x00bfff)
      .setTitle('🏓 Pong!')
      .addFields(
        { name: 'Latencia WebSocket', value: `${wsLatency}ms`, inline: true },
        { name: 'Base de datos', value: dbStatus, inline: true },
      )
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  },
};
