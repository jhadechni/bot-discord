import type { GuildConfig } from '../generated/prisma/client.js';
export declare const SYSTEM_COLORS: {
    readonly info: 6583435;
    readonly success: 5763719;
    readonly warning: 16705372;
    readonly error: 15548997;
};
export declare function buildConfigOverviewEmbeds(config: GuildConfig): import("discord.js").EmbedBuilder[];
export declare function buildSystemNoticeEmbed(title: string, description: string, color?: 5763719): import("discord.js").EmbedBuilder;
export declare function buildSystemErrorEmbed(title: string, description: string): import("discord.js").EmbedBuilder;
export declare function buildHelpEmbed(isStaff: boolean): import("discord.js").EmbedBuilder;
export declare function buildPingEmbed(wsLatency: number, dbStatus: string): import("discord.js").EmbedBuilder;
//# sourceMappingURL=system-ui.d.ts.map