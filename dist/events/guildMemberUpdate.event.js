import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { prisma } from '../database/prisma.js';
import { buildBoostPublicEmbed } from '../utils/community-ui.js';
import { logger } from '../core/logger.js';
// Extrae el nombre base quitando cualquier prefijo "ALGO | "
function getBaseName(member) {
    const current = member.nickname ?? member.user.username;
    const match = /^.+ \| (.+)$/.exec(current);
    return match?.[1] ?? current;
}
async function updateNickname(member) {
    const fresh = await member.fetch();
    const [config, dynamicRoles] = await Promise.all([
        getOrCreateGuildConfig(fresh.guild.id),
        prisma.nicknameRole.findMany({ where: { guildId: fresh.guild.id }, select: { roleId: true, emoji: true } }),
    ]);
    const emojiByRoleId = new Map(dynamicRoles.map(r => [r.roleId, r.emoji]));
    const nicknameRoleIds = new Set([
        config.liderRoleId,
        config.coLiderRoleId,
        config.aquarisRoleId,
        config.staffRoleId,
        config.aspirantRoleId,
        config.visitorRoleId,
        ...dynamicRoles.map(r => r.roleId),
    ].filter(Boolean));
    const topRole = fresh.roles.cache
        .filter(role => nicknameRoleIds.has(role.id))
        .sort((a, b) => b.position - a.position)
        .first();
    const baseName = getBaseName(fresh);
    try {
        if (topRole) {
            const emoji = emojiByRoleId.get(topRole.id);
            const prefix = emoji ? `${emoji} ${topRole.name.toUpperCase()}` : topRole.name.toUpperCase();
            const newNick = `${prefix} | ${baseName}`;
            if (fresh.displayName !== newNick) {
                await fresh.setNickname(newNick);
            }
        }
        else {
            const hasPrefix = /^.+ \| /.test(fresh.nickname ?? '');
            if (hasPrefix) {
                await fresh.setNickname(baseName === fresh.user.username ? null : baseName);
            }
        }
    }
    catch (err) {
        const isPermError = typeof err === 'object' && err !== null && 'code' in err && err.code === 50013;
        if (isPermError) {
            logger.warn({ memberId: fresh.id }, 'No se pudo actualizar nickname: el rol del bot debe estar por encima del rol del miembro en la jerarquía de roles del servidor');
        }
        else {
            logger.warn({ err, memberId: fresh.id }, 'No se pudo actualizar nickname');
        }
    }
}
const guildMemberUpdateEvent = {
    name: 'guildMemberUpdate',
    async execute(oldMember, newMember) {
        const rolesChanged = !oldMember.roles.cache.equals(newMember.roles.cache);
        const nicknameChanged = oldMember.nickname !== newMember.nickname;
        const newBoost = !oldMember.premiumSince && !!newMember.premiumSince;
        if (rolesChanged || nicknameChanged) {
            await updateNickname(newMember);
        }
        if (newBoost) {
            try {
                const config = await getOrCreateGuildConfig(newMember.guild.id);
                if (config.boostChannelId) {
                    const ch = newMember.guild.channels.cache.get(config.boostChannelId);
                    if (ch?.isTextBased()) {
                        await ch.send({
                            embeds: [
                                buildBoostPublicEmbed({
                                    userId: newMember.id,
                                    userTag: newMember.user.globalName ?? newMember.user.username,
                                    guildName: newMember.guild.name,
                                    avatarUrl: newMember.user.displayAvatarURL(),
                                }),
                            ],
                        });
                    }
                }
            }
            catch (err) {
                logger.warn({ err }, 'Error enviando anuncio de boost');
            }
        }
    },
};
export default guildMemberUpdateEvent;
//# sourceMappingURL=guildMemberUpdate.event.js.map