import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { getLogChannel } from '../../utils/log-channel.js';

export const tempbanCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('tempban')
    .setDescription('Banea a un usuario temporalmente')
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario a banear').setRequired(true),
    )
    .addIntegerOption(opt =>
      opt.setName('duracion').setDescription('Duración en minutos').setRequired(true).setMinValue(1),
    )
    .addStringOption(opt =>
      opt.setName('motivo').setDescription('Motivo del baneo').setRequired(false),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId || !interaction.guild) return;

    const target = interaction.options.getUser('usuario', true);
    const duration = interaction.options.getInteger('duracion', true);
    const reason = interaction.options.getString('motivo') ?? 'Sin motivo';

    const member = interaction.guild.members.cache.get(target.id);
    if (member && !member.bannable) {
      await interaction.editReply('❌ No tengo permisos para banear a este usuario.');
      return;
    }

    try {
      await target.send(
        `🔨 Has sido baneado temporalmente de **${interaction.guild.name}** por **${duration} minutos**.\nMotivo: ${reason}`,
      );
    } catch { /* DMs desactivados */ }

    await interaction.guild.members.ban(target, { reason });

    const log = await prisma.moderationLog.create({
      data: { guildId, targetId: target.id, moderatorId: interaction.user.id, type: 'TEMPBAN', reason, duration },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild, config, 'mod');
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          new EmbedBuilder()
            .setColor(0xe67e22)
            .setTitle('🔨 Ban temporal')
            .addFields(
              { name: 'Usuario', value: `${target.tag} (${target.id})`, inline: true },
              { name: 'Moderador', value: `<@${interaction.user.id}>`, inline: true },
              { name: 'Duración', value: `${duration} minutos`, inline: true },
              { name: 'Motivo', value: reason },
              { name: 'ID', value: log.id, inline: true },
            )
            .setTimestamp(),
        ],
      });
    }

    // Desbanear automáticamente al expirar
    const guild = interaction.guild;
    setTimeout(async () => {
      try {
        await guild.members.unban(target.id, 'Tempban expirado');
        const expiryLogsChannel = getLogChannel(guild, config, 'mod');
        if (expiryLogsChannel) {
          await expiryLogsChannel.send({
            embeds: [
              new EmbedBuilder()
                .setColor(0x57f287)
                .setTitle('🔓 Ban temporal expirado')
                .addFields(
                  { name: 'Usuario', value: `${target.tag} (${target.id})`, inline: true },
                  { name: 'Duración original', value: `${duration} minutos`, inline: true },
                )
                .setTimestamp(),
            ],
          });
        }
      } catch { /* Usuario ya desbaneado o error */ }
    }, duration * 60 * 1000);

    await interaction.editReply(`✅ **${target.tag}** baneado por ${duration} minutos.`);
  },
};
