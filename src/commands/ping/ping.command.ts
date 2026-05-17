import { SlashCommandBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { buildPingEmbed } from '../../utils/system-ui.js';

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

    await interaction.editReply({ embeds: [buildPingEmbed(wsLatency, dbStatus)] });
  },
};
