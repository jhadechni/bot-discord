import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { getLogChannel } from '../utils/log-channel.js';
import { buildJoinLogEmbed, buildWelcomePublicEmbed } from '../utils/community-ui.js';
import { logger } from '../core/logger.js';
const guildMemberAddEvent = {
    name: 'guildMemberAdd',
    async execute(member) {
        const config = await getOrCreateGuildConfig(member.guild.id);
        // Autorol Visitante
        if (config.visitorRoleId) {
            try {
                await member.roles.add(config.visitorRoleId);
            }
            catch (err) {
                logger.warn({ err, memberId: member.id }, 'No se pudo asignar rol Visitante');
            }
        }
        // Mensaje de bienvenida
        if (config.welcomeChannelId) {
            const channel = member.guild.channels.cache.get(config.welcomeChannelId);
            if (channel?.isTextBased()) {
                const embed = buildWelcomePublicEmbed({
                    userId: member.id,
                    userTag: member.user.globalName ?? member.user.username,
                    guildName: member.guild.name,
                    memberCount: member.guild.memberCount,
                    avatarUrl: member.user.displayAvatarURL(),
                });
                await channel.send({ embeds: [embed] });
            }
        }
        // Log de entrada
        const joinsLogCh = getLogChannel(member.guild, config, 'joins');
        if (joinsLogCh) {
            await joinsLogCh.send({
                embeds: [
                    buildJoinLogEmbed({
                        userId: member.id,
                        userTag: member.user.globalName ?? member.user.username,
                        memberCount: member.guild.memberCount,
                        avatarUrl: member.user.displayAvatarURL(),
                    }),
                ],
            });
        }
    },
};
export default guildMemberAddEvent;
//# sourceMappingURL=guildMemberAdd.event.js.map