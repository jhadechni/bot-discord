import {
  SlashCommandBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
} from 'discord.js';
import type { Command } from '../../types/command.js';

export const suggestCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('suggest')
    .setDescription('Envía una sugerencia al servidor'),

  async execute(interaction) {
    const modal = new ModalBuilder()
      .setCustomId('suggest_modal')
      .setTitle('Nueva sugerencia');

    modal.addComponents(
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
          .setCustomId('suggest_content')
          .setLabel('¿Cuál es tu sugerencia?')
          .setStyle(TextInputStyle.Paragraph)
          .setRequired(true)
          .setMinLength(10)
          .setMaxLength(500)
          .setPlaceholder('Describe tu sugerencia con el mayor detalle posible...'),
      ),
    );

    await interaction.showModal(modal);
  },
};
