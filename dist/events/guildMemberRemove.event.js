import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { getLogChannel } from '../utils/log-channel.js';
import { buildLeaveLogEmbed } from '../utils/community-ui.js';
const guildMemberRemoveEvent = {
    name: 'guildMemberRemove',
    async execute(member) {
        const config = await getOrCreateGuildConfig(member.guild.id);
        const leavesLogCh = getLogChannel(member.guild, config, 'leaves');
        if (!leavesLogCh)
            return;
        await leavesLogCh.send({
            embeds: [
                buildLeaveLogEmbed({
                    userId: member.id,
                    userTag: member.user.globalName ?? member.user.username,
                    memberCount: member.guild.memberCount,
                    avatarUrl: member.user.displayAvatarURL(),
                }),
            ],
        });
    },
};
export default guildMemberRemoveEvent;
//# sourceMappingURL=guildMemberRemove.event.js.map