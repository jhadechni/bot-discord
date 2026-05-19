import type { User } from 'discord.js';
export declare function upsertShopUser(guildId: string, user: User, isStaff?: boolean): Promise<{
    createdAt: Date;
    id: string;
    guildId: string;
    updatedAt: Date;
    username: string;
    discordUserId: string;
    displayName: string;
    isStaff: boolean;
}>;
//# sourceMappingURL=shop-user.d.ts.map