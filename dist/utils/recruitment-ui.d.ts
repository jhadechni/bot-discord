import { EmbedBuilder, type APIEmbedField, type Embed, type JSONEncodable, type APIEmbed } from 'discord.js';
import { type AquarisColor } from './message-ui.js';
export declare const RECRUITMENT_COLORS: {
    readonly info: 3447003;
    readonly success: 5763719;
    readonly warning: 16705372;
    readonly danger: 15548997;
    readonly system: 6583435;
    readonly log: 5793266;
};
type RecruitmentColor = AquarisColor;
type RecruitmentApplicationEmbedOptions = {
    applicantId: string;
    username: string;
    platform: string;
    role: string;
    age: string;
    aportar: string;
    disponibilidad: string;
    colaborar: string;
    dudas: string;
    ticketId: string;
    avatarUrl?: string;
};
type RecruitmentNoticeOptions = {
    title: string;
    description?: string;
    color?: RecruitmentColor;
    fields?: APIEmbedField[];
    footer?: 'recruitment' | 'logsRecruitment';
};
type RecruitmentUserMessageOptions = {
    title: string;
    description?: string;
    guildName?: string;
    reason?: string;
    color?: RecruitmentColor;
};
export declare function normalizeRecruitmentReason(reason: string | null): string;
export declare function buildRecruitmentNoticeEmbed(options: RecruitmentNoticeOptions): EmbedBuilder;
export declare function buildRecruitmentErrorEmbed(title: string, description: string): EmbedBuilder;
export declare function buildRecruitmentUserMessageEmbed(options: RecruitmentUserMessageOptions): EmbedBuilder;
export declare function buildRecruitmentApplicationEmbed(options: RecruitmentApplicationEmbedOptions): EmbedBuilder;
type EmbedSource = Embed | EmbedBuilder | JSONEncodable<APIEmbed>;
export declare function buildRecruitmentAcceptedApplicationEmbed(original: EmbedSource, staffId: string): EmbedBuilder;
export declare function buildRecruitmentRejectedApplicationEmbed(original: EmbedSource, staffId: string, reason: string): EmbedBuilder;
type RecruitmentStaleEvent = {
    type: 'stale_open';
    applicantId: string;
    ticketId: string;
    channelId?: string | null;
    hoursOpen: number;
} | {
    type: 'stale_interview';
    applicantId: string;
    ticketId: string;
    channelId?: string | null;
    daysOpen: number;
};
export declare function buildRecruitmentStaleEmbed(event: RecruitmentStaleEvent): EmbedBuilder;
type RecruitmentLogEvent = {
    type: 'accepted';
    applicantId: string;
    staffId: string;
    ticketId: string;
} | {
    type: 'rejected';
    applicantId: string;
    staffId: string;
    ticketId: string;
    reason: string;
} | {
    type: 'registered';
    applicantId: string;
    minecraftNick: string;
    discordUsername: string;
    staffId: string;
};
export declare function buildRecruitmentLogEmbed(event: RecruitmentLogEvent): EmbedBuilder;
export declare function buildRecruitmentTicketWelcomeEmbed(userId: string): EmbedBuilder;
export {};
//# sourceMappingURL=recruitment-ui.d.ts.map