import type { User } from 'discord.js';
import { prisma } from './prisma.js';

export async function upsertShopUser(guildId: string, user: User) {
  return prisma.shopUser.upsert({
    where: { guildId_discordUserId: { guildId, discordUserId: user.id } },
    update: { username: user.username, displayName: user.displayName ?? user.username },
    create: {
      guildId,
      discordUserId: user.id,
      username: user.username,
      displayName: user.displayName ?? user.username,
    },
  });
}
