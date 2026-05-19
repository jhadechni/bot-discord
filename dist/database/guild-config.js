import { prisma } from './prisma.js';
export async function getOrCreateGuildConfig(guildId) {
    return prisma.guildConfig.upsert({
        where: { guildId },
        update: {},
        create: { guildId },
    });
}
//# sourceMappingURL=guild-config.js.map