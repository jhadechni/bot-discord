import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { getLogChannel } from '../../utils/log-channel.js';

export const timeoutCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('timeout')
    .setDescription('Aplica un timeout a un usuario')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(opt =>
      opt.setName('usuario').setDescription('Usuario').setRequired(true),
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
      await interaction.editReply('❌ No puedo aplicar timeout a este usuario.');
      return;
    }

    const duration = interaction.options.getInteger('duracion', true);
    const reason = interaction.options.getString('motivo') ?? 'Sin motivo';

    await target.timeout(duration * 60 * 1000, reason);

    const log = await prisma.moderationLog.create({
      data: { guildId, targetId: target.id, moderatorId: interaction.user.id, type: 'TIMEOUT', reason, duration },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild, config, 'mod');
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          new EmbedBuilder()
            .setColor(0xfee75c)
            .setTitle('⏱️ Timeout aplicado')
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
            .setTitle('⏱️ Timeout aplicado')
            .setDescription(`<@${target.id}> ha recibido un timeout de **${duration} minutos**.`)
            .addFields({ name: 'Motivo', value: reason })
            .setTimestamp(),
        ],
      });
    }

    await interaction.editReply('✅ Hecho.');
  },
};

export const untimeoutCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('untimeout')
    .setDescription('Elimina el timeout de un usuario')
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
      data: { guildId, targetId: target.id, moderatorId: interaction.user.id, type: 'UNTIMEOUT', reason },
    });

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild, config, 'mod');
    if (logsChannel) {
      await logsChannel.send({
        embeds: [
          new EmbedBuilder()
            .setColor(0x57f287)
            .setTitle('✅ Timeout eliminado')
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
