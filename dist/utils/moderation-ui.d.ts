import { EmbedBuilder, type APIEmbedField } from 'discord.js';
import { type AquarisColor } from './message-ui.js';
export declare const MODERATION_FOOTERS: {
    readonly logs: {
        readonly text: "Aquaris Logs • Moderación  ·  💙 by jhadechni";
    };
    readonly moderation: {
        readonly text: "Aquaris • Moderación  ·  💙 by jhadechni";
    };
    readonly system: {
        readonly text: "Aquaris • Sistema  ·  💙 by jhadechni";
    };
    readonly shop: {
        readonly text: "Aquaris • Tienda  ·  💙 by jhadechni";
    };
    readonly recruitment: {
        readonly text: "Aquaris • Reclutamiento  ·  💙 by jhadechni";
    };
};
export declare const MODERATION_COLORS: {
    readonly info: 3447003;
    readonly success: 5763719;
    readonly warning: 16705372;
    readonly mute: 16096779;
    readonly timeout: 16347926;
    readonly kick: 15105570;
    readonly danger: 15548997;
    readonly log: 5793266;
    readonly system: 6583435;
};
type EmbedColor = AquarisColor;
type ModerationLogEmbedOptions = {
    title: string;
    color: EmbedColor;
    targetId: string;
    moderatorId: string;
    reason: string;
    logId: string;
    targetTag?: string;
    duration?: string;
    createdAt?: Date;
};
type UserFacingModerationEmbedOptions = {
    title: string;
    color: EmbedColor;
    reason: string;
    actionLabel?: string;
    guildName?: string;
    targetMention?: string;
    duration?: string;
    description?: string;
    warnProgress?: {
        current: number;
        limit: number;
    };
};
type StaffModerationEmbedOptions = {
    title: string;
    color?: EmbedColor;
    targetMention?: string;
    reason?: string;
    duration?: string;
    dmDelivered?: boolean;
    description?: string;
    fields?: APIEmbedField[];
};
type ModerationNoticeEmbedOptions = {
    title: string;
    description?: string;
    color?: EmbedColor;
    fields?: APIEmbedField[];
    footer?: keyof typeof MODERATION_FOOTERS;
};
export declare function normalizeModerationReason(reason: string | null): string;
export declare function buildModerationLogEmbed(options: ModerationLogEmbedOptions): EmbedBuilder;
export declare function buildModerationUserDmEmbed(options: UserFacingModerationEmbedOptions): EmbedBuilder;
export declare function buildModerationPublicEmbed(options: UserFacingModerationEmbedOptions): EmbedBuilder;
export declare function buildModerationStaffEmbed(options: StaffModerationEmbedOptions): EmbedBuilder;
export declare function buildModerationNoticeEmbed(options: ModerationNoticeEmbedOptions): EmbedBuilder;
export declare function buildModerationErrorEmbed(title: string, description: string): EmbedBuilder;
export {};
//# sourceMappingURL=moderation-ui.d.ts.map