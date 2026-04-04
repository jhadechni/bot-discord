import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { getLogChannel } from '../../utils/log-channel.js';

const MAX_TIMEOUT_MS = 40_320 * 60 * 1000; // 28 días (máximo de Discord)

export const muteCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('mute')
    .setDescription('Silencia a un usuario (timeout hasta 28 días)')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario a silenciar').setRequired(true),
    )
    .addStringOption(opt =>
      opt.setName('motivo').setDescription('Motivo').setRequired(false),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId || !interaction.guild) return;

    const target = interaction.options.getMember('usuario');
    if (!target || !('moderatable' in target) || !target.moderatable) {
      await interaction.editReply('❌ No puedo silenciar a este usuario.');
      return;
    }

    const reason = interaction.options.getString('motivo') ?? 'Sin motivo';
    await target.timeout(MAX_TIMEOUT_MS, reason);

    const log = await prisma.moderationLog.create({
      data: { guildId, targetId: target.id, moderatorId: interaction.user.id, type: 'MUTE', reason },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild, config, 'mod');
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          new EmbedBuilder()
            .setColor(0xfee75c)
            .setTitle('🔇 Usuario silenciado')
            .addFields(
              { name: 'Usuario', value: `<@${target.id}>`, inline: true },
              { name: 'Moderador', value: `<@${interaction.user.id}>`, inline: true },
              { name: 'Motivo', value: reason },
              { name: 'ID', value: log.id, inline: true },
            )
            .setTimestamp(),
        ],
      });
    }

    const publicCh = interaction.guild.channels.cache.get(interaction.channelId);
    if (publicCh?.isTextBased() && !publicCh.isDMBased()) {
      await publicCh.send({
        embeds: [
          new EmbedBuilder()
            .setColor(0xfee75c)
            .setTitle('🔇 Usuario silenciado')
            .setDescription(`<@${target.id}> ha sido silenciado.`)
            .addFields({ name: 'Motivo', value: reason })
            .setTimestamp(),
        ],
      });
    }

    await interaction.editReply('✅ Hecho.');
  },
};

export const tempmuteCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('tempmute')
    .setDescription('Silencia temporalmente a un usuario')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario a silenciar').setRequired(true),
    )
    .addIntegerOption(opt =>
      opt.setName('duracion').setDescription('Duración en minutos').setRequired(true).setMinValue(1).setMaxValue(40320),
    )
    .addStringOption(opt =>
      opt.setName('motivo').setDescription('Motivo').setRequired(false),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId || !interaction.guild) return;

    const target = interaction.options.getMember('usuario');
    if (!target || !('moderatable' in target) || !target.moderatable) {
      await interaction.editReply('❌ No puedo silenciar a este usuario.');
      return;
    }

    const duration = interaction.options.getInteger('duracion', true);
    const reason = interaction.options.getString('motivo') ?? 'Sin motivo';
    await target.timeout(duration * 60 * 1000, reason);

    const log = await prisma.moderationLog.create({
      data: { guildId, targetId: target.id, moderatorId: interaction.user.id, type: 'TEMPMUTE', reason, duration },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild, config, 'mod');
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          new EmbedBuilder()
            .setColor(0xfee75c)
            .setTitle('🔇 Mute temporal')
            .addFields(
              { name: 'Usuario', value: `<@${target.id}>`, inline: true },
              { name: 'Moderador', value: `<@${interaction.user.id}>`, inline: true },
              { name: 'Duración', value: `${duration} minutos`, inline: true },
              { name: 'Motivo', value: reason },
              { name: 'ID', value: log.id, inline: true },
            )
            .setTimestamp(),
        ],
      });
    }

    const publicCh = interaction.guild.channels.cache.get(interaction.channelId);
    if (publicCh?.isTextBased() && !publicCh.isDMBased()) {
      await publicCh.send({
        embeds: [
          new EmbedBuilder()
            .setColor(0xfee75c)
            .setTitle('🔇 Usuario silenciado temporalmente')
            .setDescription(`<@${target.id}> ha sido silenciado por **${duration} minutos**.`)
            .addFields({ name: 'Motivo', value: reason })
            .setTimestamp(),
        ],
      });
    }

    await interaction.editReply('✅ Hecho.');
  },
};

export const unmuteCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('unmute')
    .setDescription('Quita el silencio a un usuario')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario').setRequired(true),
    )
    .addStringOption(opt =>
      opt.setName('motivo').setDescription('Motivo').setRequired(false),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId || !interaction.guild) return;

    const target = interaction.options.getMember('usuario');
    if (!target || !('moderatable' in target) || !target.moderatable) {
      await interaction.editReply('❌ No puedo moderar a este usuario.');
      return;
    }

    const reason = interaction.options.getString('motivo') ?? 'Sin motivo';
    await target.timeout(null, reason);

    const log = await prisma.moderationLog.create({
      data: { guildId, targetId: target.id, moderatorId: interaction.user.id, type: 'UNMUTE', reason },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild, config, 'mod');
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          new EmbedBuilder()
            .setColor(0x57f287)
            .setTitle('🔊 Silencio eliminado')
            .addFields(
              { name: 'Usuario', value: `<@${target.id}>`, inline: true },
              { name: 'Moderador', value: `<@${interaction.user.id}>`, inline: true },
              { name: 'Motivo', value: reason },
              { name: 'ID', value: log.id, inline: true },
            )
            .setTimestamp(),
        ],
      });
    }

    await interaction.editReply('✅ Hecho.');
  },
};
