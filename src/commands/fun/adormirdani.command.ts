import { SlashCommandBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';

const SEVEN_HOURS_MS = 7 * 60 * 60 * 1000;

export const adormirdaniCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('adormirdani')
    .setDescription('Shh 🤫')
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario').setRequired(true),
    ) as SlashCommandBuilder,

  async execute(interaction) {
    if (!interaction.guild) return;

    const target = interaction.options.getUser('usuario', true);
    const member = await interaction.guild.members.fetch(target.id).catch(() => null);

    if (!member) {
      await interaction.reply({ content: '❌ No encontré a ese usuario en el servidor.', ephemeral: true });
      return;
    }

    if (!member.moderatable) {
      await interaction.reply({ content: '❌ No puedo silenciar a esa persona.', ephemeral: true });
      return;
    }

    await member.timeout(SEVEN_HOURS_MS, 'Hora de dormir 😴');
    await interaction.reply({ content: `😴 Buenas noches, <@${target.id}>. Nos vemos en 7 horas.`, ephemeral: true });
  },
};

export const atrabajardaniCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('atrabajardani')
    .setDescription('🌅')
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario').setRequired(true),
    ) as SlashCommandBuilder,

  async execute(interaction) {
    if (!interaction.guild) return;

    const target = interaction.options.getUser('usuario', true);
    const member = await interaction.guild.members.fetch(target.id).catch(() => null);

    if (!member) {
      await interaction.reply({ content: '❌ No encontré a ese usuario en el servidor.', ephemeral: true });
      return;
    }

    if (!member.moderatable) {
      await interaction.reply({ content: '❌ No puedo quitar el timeout a esa persona.', ephemeral: true });
      return;
    }

    await member.timeout(null, 'Buenos días ☀️');
    await interaction.reply({ content: `☀️ ¡Despierta, <@${target.id}>! A trabajar.`, ephemeral: true });
  },
};
