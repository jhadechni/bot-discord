import { PermissionFlagsBits, SlashCommandBuilder, type GuildMember, type ChatInputCommandInteraction } from 'discord.js';
import type { Command } from '../../types/command.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { FUN_COLORS, buildFunErrorEmbed, buildFunNoticeEmbed } from '../../utils/fun-ui.js';

const SEVEN_HOURS_MS = 7 * 60 * 60 * 1000;

function hasStaffPermission(
  interaction: ChatInputCommandInteraction,
  staffRoleId: string | null,
): boolean {
  if (interaction.memberPermissions?.has(PermissionFlagsBits.ManageGuild)) return true;
  if (staffRoleId) {
    const member = interaction.member as GuildMember;
    return member.roles.cache.has(staffRoleId);
  }
  return false;
}

export const adormirdaniCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('adormirdani')
    .setDescription('Shh 🤫')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario').setRequired(true),
    ) as SlashCommandBuilder,

  async execute(interaction) {
    if (!interaction.guild) return;
    const config = await getOrCreateGuildConfig(interaction.guildId!);
    if (!hasStaffPermission(interaction, config.staffRoleId ?? null)) {
      await interaction.reply({
        embeds: [buildFunErrorEmbed('Permiso insuficiente', 'Solo el staff puede usar este comando.')],
        ephemeral: true,
      });
      return;
    }

    const target = interaction.options.getUser('usuario', true);
    const member = await interaction.guild.members.fetch(target.id).catch(() => null);

    if (!member) {
      await interaction.reply({
        embeds: [buildFunErrorEmbed('Usuario no encontrado', 'No encontré a ese usuario en el servidor.')],
        ephemeral: true,
      });
      return;
    }

    if (!member.moderatable) {
      await interaction.reply({
        embeds: [buildFunErrorEmbed('Acción no disponible', 'No puedo silenciar a esa persona.')],
        ephemeral: true,
      });
      return;
    }

    await member.timeout(SEVEN_HOURS_MS, 'Hora de dormir 😴');
    await interaction.reply({
      embeds: [
        buildFunNoticeEmbed(
          'Buenas noches',
          `<@${target.id}> quedó en descanso por **7 horas**.`,
          FUN_COLORS.warning,
        ),
      ],
      ephemeral: true,
    });
  },
};

export const atrabajardaniCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('atrabajardani')
    .setDescription('🌅')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario').setRequired(true),
    ) as SlashCommandBuilder,

  async execute(interaction) {
    if (!interaction.guild) return;
    const config = await getOrCreateGuildConfig(interaction.guildId!);
    if (!hasStaffPermission(interaction, config.staffRoleId ?? null)) {
      await interaction.reply({
        embeds: [buildFunErrorEmbed('Permiso insuficiente', 'Solo el staff puede usar este comando.')],
        ephemeral: true,
      });
      return;
    }

    const target = interaction.options.getUser('usuario', true);
    const member = await interaction.guild.members.fetch(target.id).catch(() => null);

    if (!member) {
      await interaction.reply({
        embeds: [buildFunErrorEmbed('Usuario no encontrado', 'No encontré a ese usuario en el servidor.')],
        ephemeral: true,
      });
      return;
    }

    if (!member.moderatable) {
      await interaction.reply({
        embeds: [buildFunErrorEmbed('Acción no disponible', 'No puedo quitar el timeout a esa persona.')],
        ephemeral: true,
      });
      return;
    }

    await member.timeout(null, 'Buenos días ☀️');
    await interaction.reply({
      embeds: [
        buildFunNoticeEmbed(
          'Timeout retirado',
          `<@${target.id}> ya puede volver a participar.`,
          FUN_COLORS.success,
        ),
      ],
      ephemeral: true,
    });
  },
};
