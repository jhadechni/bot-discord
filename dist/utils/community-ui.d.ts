export declare const COMMUNITY_COLORS: {
    readonly welcome: 5763719;
    readonly leave: 10070709;
    readonly boost: 3447003;
    readonly log: 5793266;
};
type MemberMessageOptions = {
    userId: string;
    userTag: string;
    guildName: string;
    memberCount: number;
    avatarUrl: string;
};
type MemberLogOptions = {
    userId: string;
    userTag: string;
    memberCount: number;
    avatarUrl: string;
};
export declare function buildWelcomePublicEmbed(options: MemberMessageOptions): import("discord.js").EmbedBuilder;
export declare function buildJoinLogEmbed(options: MemberLogOptions): import("discord.js").EmbedBuilder;
export declare function buildFarewellPublicEmbed(options: MemberMessageOptions): import("discord.js").EmbedBuilder;
export declare function buildLeaveLogEmbed(options: MemberLogOptions): import("discord.js").EmbedBuilder;
export declare function buildBoostPublicEmbed(options: Omit<MemberMessageOptions, 'memberCount'>): import("discord.js").EmbedBuilder;
export {};
//# sourceMappingURL=community-ui.d.ts.map