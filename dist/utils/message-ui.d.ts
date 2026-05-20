import { EmbedBuilder, type APIEmbedField } from 'discord.js';
export declare const AQUARIS_FOOTERS: {
    readonly logsModeration: {
        readonly text: "Aquaris Logs • Moderación  ·  💙 by jhadechni";
    };
    readonly logsCommunity: {
        readonly text: "Aquaris Logs • Comunidad  ·  💙 by jhadechni";
    };
    readonly logsRecruitment: {
        readonly text: "Aquaris Logs • Reclutamiento  ·  💙 by jhadechni";
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
    readonly reminders: {
        readonly text: "Aquaris • Recordatorios  ·  💙 by jhadechni";
    };
    readonly suggestions: {
        readonly text: "Aquaris • Sugerencias  ·  💙 by jhadechni";
    };
    readonly levels: {
        readonly text: "Aquaris • Niveles  ·  💙 by jhadechni";
    };
    readonly community: {
        readonly text: "Aquaris • Comunidad  ·  💙 by jhadechni";
    };
    readonly general: {
        readonly text: "Aquaris  ·  💙 by jhadechni";
    };
};
export declare const AQUARIS_COLORS: {
    readonly info: 3447003;
    readonly success: 5763719;
    readonly warning: 16705372;
    readonly danger: 15548997;
    readonly neutral: 10070709;
    readonly log: 5793266;
    readonly system: 6583435;
    readonly mute: 16096779;
    readonly timeout: 16347926;
    readonly kick: 15105570;
    readonly shop: 3447003;
    readonly recruitment: 3447003;
    readonly reminders: 5793266;
    readonly suggestions: 3447003;
    readonly levels: 5793266;
    readonly community: 3447003;
};
export type AquarisFooterKey = keyof typeof AQUARIS_FOOTERS;
export type AquarisColor = (typeof AQUARIS_COLORS)[keyof typeof AQUARIS_COLORS];
export type AquarisModule = 'moderation' | 'automod' | 'recruitment' | 'reminders' | 'suggestions' | 'levels' | 'community' | 'shop' | 'system' | 'fun';
export type AquarisMessageContext = 'public' | 'dm' | 'ephemeral' | 'log';
export type AquarisMessageIntent = 'info' | 'success' | 'warning' | 'error' | 'audit';
export type AquarisEmbedOptions = {
    title?: string | null;
    description?: string | null;
    color?: AquarisColor;
    footer?: AquarisFooterKey;
    fields?: APIEmbedField[];
    timestamp?: Date;
};
export type AquarisUserFacingOptions = {
    title: string;
    color: AquarisColor;
    footer: AquarisFooterKey;
    reason?: string;
    guildName?: string;
    duration?: string;
    description?: string;
    fields?: APIEmbedField[];
};
export declare function normalizeMessageReason(reason: string | null): string;
export declare function buildAquarisEmbed(options: AquarisEmbedOptions): EmbedBuilder;
export declare function buildAquarisNoticeEmbed(options: AquarisEmbedOptions): EmbedBuilder;
export declare function buildAquarisErrorEmbed(title: string, description: string): EmbedBuilder;
export declare function buildAquarisUserFacingEmbed(options: AquarisUserFacingOptions): EmbedBuilder;
//# sourceMappingURL=message-ui.d.ts.map