import type { GuildMember } from 'discord.js';
import type { BotEvent } from '../types/event.js';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { prisma } from '../database/prisma.js';
import { buildBoostPublicEmbed } from '../utils/community-ui.js';
import { logger } from '../core/logger.js';

// Extrae el nombre base quitando cualquier prefijo "ALGO | "
function getBaseName(member: GuildMember): string {
  const current = member.nickname ?? member.user.username;
  const match = /^.+ \| (.+)$/.exec(current);
  return match?.[1] ?? current;
}

async function updateNickname(member: GuildMember): Promise<void> {
  const [config, dynamicRoles] = await Promise.all([
    getOrCreateGuildConfig(member.guild.id),
    prisma.nicknameRole.findMany({ where: { guildId: member.guild.id }, select: { roleId: true } }),
  ]);

  // Unión de roles fijos del config + roles dinámicos registrados
  const nicknameRoleIds = new Set<string>([
    config.liderRoleId,
    config.coLiderRoleId,
    config.aquarisRoleId,
    config.staffRoleId,
    config.aspirantRoleId,
    config.visitorRoleId,
    ...dynamicRoles.map(r => r.roleId),
  ].filter(Boolean) as string[]);

  // Rol más alto en la jerarquía de Discord que tenga el miembro y esté registrado
  const topRole = member.roles.cache
    .filter(role => nicknameRoleIds.has(role.id))
    .sort((a, b) => b.position - a.position)
    .first();

  const baseName = getBaseName(member);

  try {
    if (topRole) {
      const newNick = `${topRole.name.toUpperCase()} | ${baseName}`;
      if (member.displayName !== newNick) {
        await member.setNickname(newNick);
      }
    } else {
      // Sin rol configurado: quitar prefijo si lo tiene
      const hasPrefix = /^.+ \| /.test(member.nickname ?? '');
      if (hasPrefix) {
        await member.setNickname(baseName === member.user.username ? null : baseName);
      }
    }
  } catch (err: unknown) {
    const isPermError = typeof err === 'object' && err !== null && 'code' in err && err.code === 50013;
    if (isPermError) {
      logger.warn(
        { memberId: member.id },
        'No se pudo actualizar nickname: el rol del bot debe estar por encima del rol del miembro en la jerarquía de roles del servidor',
      );
    } else {
      logger.warn({ err, memberId: member.id }, 'No se pudo actualizar nickname');
    }
  }
}

const guildMemberUpdateEvent: BotEvent<'guildMemberUpdate'> = {
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
                  userTag: newMember.user.tag,
                  guildName: newMember.guild.name,
                  avatarUrl: newMember.user.displayAvatarURL(),
                }),
              ],
            });
          }
        }
      } catch (err) {
        logger.warn({ err }, 'Error enviando anuncio de boost');
      }
    }
  },
};

export default guildMemberUpdateEvent;
