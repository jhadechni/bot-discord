import { EmbedBuilder } from 'discord.js';
import type { APIEmbedField } from 'discord.js';
export declare const LEVEL_COLORS: {
    readonly profile: 5793266;
    readonly ranking: 16705372;
    readonly success: 5763719;
    readonly empty: 6583435;
};
type LevelProfileOptions = {
    userTag: string;
    displayName: string;
    avatarUrl: string;
    level: number;
    rank: number;
    xp: number;
    nextLevel: number;
    currentXp: number;
    requiredXp: number;
    progress: string;
    messageCount: number;
    voiceTime: string;
};
export type TopEntry = {
    rank: number;
    name: string;
    avatarUrl: string | null;
    statLine: string;
    level: number;
};
type TopEmbedOptions = {
    title: string;
    entries: TopEntry[];
    guildName: string;
    selfEntry?: TopEntry | null;
    isClosed?: boolean;
};
export declare function buildLevelProfileEmbed(options: LevelProfileOptions): EmbedBuilder;
export declare function buildTopEmbed(options: TopEmbedOptions): EmbedBuilder;
export declare function buildLevelEmptyEmbed(description?: string): EmbedBuilder;
export declare function buildLevelUpEmbed(userId: string, level: number): EmbedBuilder;
export type LevelFields = APIEmbedField[];
export {};
//# sourceMappingURL=levels-ui.d.ts.map