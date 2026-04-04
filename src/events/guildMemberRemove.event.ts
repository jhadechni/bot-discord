import { EmbedBuilder } from 'discord.js';
import type { BotEvent } from '../types/event.js';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { getLogChannel } from '../utils/log-channel.js';

const guildMemberRemoveEvent: BotEvent<'guildMemberRemove'> = {
  name: 'guildMemberRemove',
  async execute(member) {
    const config = await getOrCreateGuildConfig(member.guild.id);

    const leavesLogCh = getLogChannel(member.guild, config, 'leaves');
    if (!leavesLogCh) return;

    await leavesLogCh.send({
      embeds: [
        new EmbedBuilder()
          .setColor(0xed4245)
          .setTitle('📤 Miembro ha salido')
          .addFields(
            { name: 'Usuario', value: `${member.user.tag}`, inline: true },
            { name: 'ID', value: member.id, inline: true },
          )
          .setThumbnail(member.user.displayAvatarURL())
          .setFooter({ text: `Ahora hay ${member.guild.memberCount} miembros` })
          .setTimestamp(),
      ],
    });
  },
};

export default guildMemberRemoveEvent;
