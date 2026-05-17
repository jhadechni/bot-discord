import {
  GuildMember,
  PermissionFlagsBits,
  SlashCommandBuilder,
} from 'discord.js';
import type { Command } from '../../types/command.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { buildHelpEmbed } from '../../utils/system-ui.js';

function hasStaffAccess(member: GuildMember | null, staffRoleId: string | null): boolean {
  if (!member) return false;
  if (member.permissions.has(PermissionFlagsBits.ManageGuild)) return true;
  if (!staffRoleId) return false;
  return member.roles.cache.has(staffRoleId);
}

export const helpCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Muestra la lista actual de comandos del bot'),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    const member = interaction.member instanceof GuildMember
      ? interaction.member
      : await interaction.guild?.members.fetch(interaction.user.id).catch(() => null);

    const config = guildId ? await getOrCreateGuildConfig(guildId) : null;
    const isStaff = hasStaffAccess(member ?? null, config?.staffRoleId ?? null);

    await interaction.editReply({ embeds: [buildHelpEmbed(isStaff)] });
  },
};
