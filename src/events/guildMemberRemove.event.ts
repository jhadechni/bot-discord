import type { BotEvent } from '../types/event.js';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { getLogChannel } from '../utils/log-channel.js';
import { buildFarewellPublicEmbed, buildLeaveLogEmbed } from '../utils/community-ui.js';
import { logger } from '../core/logger.js';

const guildMemberRemoveEvent: BotEvent<'guildMemberRemove'> = {
  name: 'guildMemberRemove',
  async execute(member) {
    const config = await getOrCreateGuildConfig(member.guild.id);
    const userTag = member.user.globalName ?? member.user.username;
    const avatarUrl = member.user.displayAvatarURL();

    // Mensaje público de despedida
    if (config.farewellChannelId) {
      const ch = member.guild.channels.cache.get(config.farewellChannelId);
      if (ch?.isTextBased()) {
        try {
          await ch.send({
            embeds: [buildFarewellPublicEmbed({
              userId: member.id,
              userTag,
              guildName: member.guild.name,
              memberCount: member.guild.memberCount,
              avatarUrl,
            })],
          });
        } catch (err) {
          logger.warn({ err }, 'No se pudo enviar mensaje de despedida');
        }
      }
    }

    // Log de salida
    const leavesLogCh = getLogChannel(member.guild, config, 'leaves');
    if (leavesLogCh) {
      await leavesLogCh.send({
        embeds: [buildLeaveLogEmbed({ userId: member.id, userTag, memberCount: member.guild.memberCount, avatarUrl })],
      });
    }
  },
};

export default guildMemberRemoveEvent;
