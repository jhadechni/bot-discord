import type { BotEvent } from '../types/event.js';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { getLogChannel } from '../utils/log-channel.js';
import { buildLeaveLogEmbed } from '../utils/community-ui.js';

const guildMemberRemoveEvent: BotEvent<'guildMemberRemove'> = {
  name: 'guildMemberRemove',
  async execute(member) {
    const config = await getOrCreateGuildConfig(member.guild.id);

    const leavesLogCh = getLogChannel(member.guild, config, 'leaves');
    if (!leavesLogCh) return;

    await leavesLogCh.send({
      embeds: [
        buildLeaveLogEmbed({
          userId: member.id,
          userTag: member.user.tag,
          memberCount: member.guild.memberCount,
          avatarUrl: member.user.displayAvatarURL(),
        }),
      ],
    });
  },
};

export default guildMemberRemoveEvent;
