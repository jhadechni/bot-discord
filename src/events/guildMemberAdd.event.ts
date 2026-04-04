import { EmbedBuilder } from 'discord.js';
import type { BotEvent } from '../types/event.js';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { getLogChannel } from '../utils/log-channel.js';
import { logger } from '../core/logger.js';

const guildMemberAddEvent: BotEvent<'guildMemberAdd'> = {
  name: 'guildMemberAdd',
  async execute(member) {
    const config = await getOrCreateGuildConfig(member.guild.id);

    // Autorol Visitante
    if (config.visitorRoleId) {
      try {
        await member.roles.add(config.visitorRoleId);
      } catch (err) {
        logger.warn({ err, memberId: member.id }, 'No se pudo asignar rol Visitante');
      }
    }

    // Mensaje de bienvenida
    if (config.welcomeChannelId) {
      const channel = member.guild.channels.cache.get(config.welcomeChannelId);
      if (channel?.isTextBased()) {
        const embed = new EmbedBuilder()
          .setColor(0x57f287)
          .setTitle('👋 ¡Bienvenido al servidor!')
          .setDescription(
            `Hola <@${member.id}>, bienvenido a **${member.guild.name}**.\n\n` +
              `Eres el miembro número **${member.guild.memberCount}**.\n` +
              `Revisa los canales de información para orientarte.`,
          )
          .setThumbnail(member.user.displayAvatarURL())
          .setTimestamp();
        await channel.send({ embeds: [embed] });
      }
    }

    // Log de entrada
    const joinsLogCh = getLogChannel(member.guild, config, 'joins');
    if (joinsLogCh) {
      await joinsLogCh.send({
        embeds: [
          new EmbedBuilder()
            .setColor(0x57f287)
            .setTitle('📥 Nuevo miembro')
            .addFields(
              { name: 'Usuario', value: `<@${member.id}> (${member.user.tag})`, inline: true },
              { name: 'ID', value: member.id, inline: true },
              { name: 'Miembro nº', value: `${member.guild.memberCount}`, inline: true },
            )
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp(),
        ],
      });
    }
  },
};

export default guildMemberAddEvent;
