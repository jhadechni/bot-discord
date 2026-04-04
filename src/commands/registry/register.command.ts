import {
  SlashCommandBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
  PermissionFlagsBits,
} from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';

export const registerCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('add-member')
    .setDescription('Añade un nuevo miembro al registro del clan')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
    .addUserOption(opt =>
      opt
        .setName('usuario')
        .setDescription('Usuario de Discord a registrar (opcional si estás en un canal de ticket)')
        .setRequired(false),
    ) as SlashCommandBuilder,

  async execute(interaction) {
    if (!interaction.guild) return;

    // Determinar qué usuario registrar
    let targetUser = interaction.options.getUser('usuario');

    if (!targetUser) {
      // Buscar ticket ACCEPTED cuyo canal sea el actual
      const ticket = await prisma.recruitmentTicket.findFirst({
        where: { channelId: interaction.channelId, status: 'ACCEPTED' },
      });

      if (ticket) {
        try {
          const member = await interaction.guild.members.fetch(ticket.userId);
          targetUser = member.user;
        } catch { /* miembro ya no está en el servidor */ }
      }
    }

    if (!targetUser) {
      await interaction.reply({
        content:
          '❌ No pude determinar qué usuario registrar.\n' +
          'Usa `/registrar usuario:@persona` o ejecuta el comando desde un canal de ticket aceptado.',
        ephemeral: true,
      });
      return;
    }

    const modal = new ModalBuilder()
      .setCustomId(`register_modal_${targetUser.id}`)
      .setTitle(`Registrar: ${targetUser.username}`);

    modal.addComponents(
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
          .setCustomId('register_mc_username')
          .setLabel('Usuario de Minecraft')
          .setStyle(TextInputStyle.Short)
          .setRequired(true)
          .setMaxLength(50)
          .setPlaceholder('Ej: Steve123'),
      ),
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
          .setCustomId('register_alias')
          .setLabel('Apodo / Alias')
          .setStyle(TextInputStyle.Short)
          .setRequired(false)
          .setMaxLength(50)
          .setPlaceholder('Opcional'),
      ),
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
          .setCustomId('register_country')
          .setLabel('País / Zona horaria')
          .setStyle(TextInputStyle.Short)
          .setRequired(false)
          .setMaxLength(60)
          .setPlaceholder('Ej: España / UTC+1'),
      ),
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
          .setCustomId('register_notes')
          .setLabel('Notas / Observaciones')
          .setStyle(TextInputStyle.Paragraph)
          .setRequired(false)
          .setMaxLength(300)
          .setPlaceholder('Opcional'),
      ),
    );

    await interaction.showModal(modal);
  },
};
