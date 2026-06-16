import {
  ChannelType,
  PermissionFlagsBits,
  SlashCommandBuilder,
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
  type ChatInputCommandInteraction,
} from 'discord.js';
import type { Command } from '../../types/command.js';

export const anunciarCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('anunciar')
    .setDescription('Envía un mensaje personalizado por el bot a un canal')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addChannelOption(opt =>
      opt
        .setName('canal')
        .setDescription('Canal donde se enviará el mensaje')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true),
    )
    .addRoleOption(opt =>
      opt
        .setName('rol')
        .setDescription('Rol a mencionar (usa {rol} en el mensaje para posicionarlo)')
        .setRequired(false),
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    const channel = interaction.options.getChannel('canal', true);
    const role    = interaction.options.getRole('rol');

    const modal = new ModalBuilder()
      .setCustomId(`anunciar:modal:${channel.id}:${role?.id ?? 'none'}`)
      .setTitle('Redactar anuncio');

    const hint = role
      ? `{rol} → @${role.name} | {here} → @here | {everyone} → @everyone`
      : 'Usa {here} o {everyone} donde quieras la mención.';

    modal.addComponents(
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
          .setCustomId('mensaje')
          .setLabel('Mensaje')
          .setStyle(TextInputStyle.Paragraph)
          .setPlaceholder(hint)
          .setRequired(true)
          .setMaxLength(4000),
      ),
    );

    await interaction.showModal(modal);
  },
};
