import type { Role } from 'discord.js';
import type { BotEvent } from '../types/event.js';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { prisma } from '../database/prisma.js';
import { logger } from '../core/logger.js';

function getBaseName(nickname: string | null, username: string): string {
  const current = nickname ?? username;
  const match = /^.+ \| (.+)$/.exec(current);
  return match?.[1] ?? current;
}

async function updateMembersWithRole(role: Role): Promise<void> {
  const [config, dynamicRoles] = await Promise.all([
    getOrCreateGuildConfig(role.guild.id),
    prisma.nicknameRole.findMany({ where: { guildId: role.guild.id }, select: { roleId: true, emoji: true } }),
  ]);

  const nicknameRoleIds = new Set<string>([
    config.liderRoleId,
    config.coLiderRoleId,
    config.aquarisRoleId,
    config.staffRoleId,
    config.aspirantRoleId,
    config.visitorRoleId,
    ...dynamicRoles.map(r => r.roleId),
  ].filter(Boolean) as string[]);

  if (!nicknameRoleIds.has(role.id)) return;

  const members = await role.guild.members.fetch();
  const withRole = members.filter(m => m.roles.cache.has(role.id));

  let updated = 0;
  for (const member of withRole.values()) {
    const topRole = member.roles.cache
      .filter(r => nicknameRoleIds.has(r.id))
      .sort((a, b) => b.position - a.position)
      .first();

    if (!topRole || topRole.id !== role.id) continue;

    const roleRecord = dynamicRoles.find(r => r.roleId === role.id);
    const emoji = roleRecord?.emoji;
    const prefix = emoji ? `${emoji} ${role.name.toUpperCase()}` : role.name.toUpperCase();
    const baseName = getBaseName(member.nickname, member.user.username);
    const newNick = `${prefix} | ${baseName}`.slice(0, 32);

    if (member.displayName === newNick) continue;

    try {
      await member.setNickname(newNick);
      updated++;
    } catch (err: unknown) {
      const isPermError = typeof err === 'object' && err !== null && 'code' in err && err.code === 50013;
      if (!isPermError) {
        logger.warn({ err, memberId: member.id }, 'No se pudo actualizar nickname en roleUpdate');
      }
    }
  }

  logger.info({ roleId: role.id, roleName: role.name, updated }, 'Nicknames actualizados por cambio de nombre de rol');
}

const roleUpdateEvent: BotEvent<'roleUpdate'> = {
  name: 'roleUpdate',
  async execute(oldRole, newRole) {
    if (oldRole.name === newRole.name) return;
    await updateMembersWithRole(newRole);
  },
};

export default roleUpdateEvent;
