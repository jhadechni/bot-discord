import { prisma } from './prisma.js';
export async function upsertShopUser(guildId, user, isStaff = false) {
    return prisma.shopUser.upsert({
        where: { guildId_discordUserId: { guildId, discordUserId: user.id } },
        update: {
            username: user.username,
            displayName: user.displayName ?? user.username,
            isStaff,
        },
        create: {
            guildId,
            discordUserId: user.id,
            username: user.username,
            displayName: user.displayName ?? user.username,
            isStaff,
        },
    });
}
//# sourceMappingURL=shop-user.js.map