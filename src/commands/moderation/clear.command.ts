import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';

export const clearCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Elimina mensajes del canal')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .addIntegerOption(opt =>
      opt
        .setName('cantidad')
        .setDescription('Número de mensajes a eliminar (1-100)')
        .setRequired(true)
        .setMinValue(1)
        .setMaxValue(100),
    )
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Filtrar por usuario (opcional)').setRequired(false),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const channel = interaction.channel;
    if (!channel?.isTextBased() || !('bulkDelete' in channel)) {
      await interaction.editReply('❌ No se puede usar este comando en este canal.');
      return;
    }

    const amount = interaction.options.getInteger('cantidad', true);
    const filterUser = interaction.options.getUser('usuario');

    const fetched = await channel.messages.fetch({ limit: 100 });

    let toDelete = [...fetched.values()];

    // Filtrar por usuario si se especificó
    if (filterUser) {
      toDelete = toDelete.filter(m => m.author.id === filterUser.id);
    }

    // Discord solo permite borrar mensajes de menos de 14 días con bulkDelete
    const twoWeeksAgo = Date.now() - 14 * 24 * 60 * 60 * 1000;
    toDelete = toDelete.filter(m => m.createdTimestamp > twoWeeksAgo).slice(0, amount);

    if (toDelete.length === 0) {
      await interaction.editReply('⚠️ No hay mensajes recientes que eliminar.');
      return;
    }

    const deleted = await channel.bulkDelete(toDelete, true);
    await interaction.editReply(`🗑️ Se eliminaron **${deleted.size}** mensajes.`);
  },
};
