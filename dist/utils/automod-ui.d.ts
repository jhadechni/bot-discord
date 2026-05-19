export declare const AUTOMOD_COLORS: {
    readonly filter: 16705372;
    readonly spam: 16347926;
    readonly system: 6583435;
};
type AutomodLogOptions = {
    userId: string;
    userTag: string;
    channelId: string;
    content: string;
    logId: string;
};
type FilterLogOptions = AutomodLogOptions & {
    matched: string;
};
type ToxicityLogOptions = AutomodLogOptions & {
    score: number;
};
type SpamLogOptions = {
    userId: string;
    userTag: string;
    channelId: string;
    spamType: string;
    durationLabel: string;
    logId: string;
};
export declare function buildAutomodFilterDmEmbed(guildName: string): import("discord.js").EmbedBuilder;
export declare function buildAutomodToxicityDmEmbed(guildName: string): import("discord.js").EmbedBuilder;
export declare function buildAutomodSpamDmEmbed(guildName: string, spamType: string, durationLabel: string): import("discord.js").EmbedBuilder;
export declare function buildAutomodFilterLogEmbed(options: FilterLogOptions): import("discord.js").EmbedBuilder;
export declare function buildAutomodToxicityLogEmbed(options: ToxicityLogOptions): import("discord.js").EmbedBuilder;
export declare function buildAutomodSpamPublicEmbed(userId: string, spamType: string, durationLabel: string): import("discord.js").EmbedBuilder;
export declare function buildAutomodSpamLogEmbed(options: SpamLogOptions): import("discord.js").EmbedBuilder;
export {};
//# sourceMappingURL=automod-ui.d.ts.map