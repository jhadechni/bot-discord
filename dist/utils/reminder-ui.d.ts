import { EmbedBuilder, type APIEmbedField } from 'discord.js';
import { type AquarisColor } from './message-ui.js';
export declare const REMINDER_COLORS: {
    readonly info: 5793266;
    readonly success: 5763719;
    readonly warning: 16705372;
    readonly danger: 15548997;
    readonly system: 6583435;
};
type ReminderColor = AquarisColor;
type ReminderNoticeOptions = {
    title: string;
    description?: string;
    color?: ReminderColor;
    fields?: APIEmbedField[];
};
export declare function buildReminderNoticeEmbed(options: ReminderNoticeOptions): EmbedBuilder;
export declare function buildReminderErrorEmbed(title: string, description: string): EmbedBuilder;
export declare function buildReminderDmEmbed(title: string, description: string, color?: ReminderColor): EmbedBuilder;
export declare function buildKitReminderListEmbed(params: {
    title?: string;
    lines: string[];
    color?: ReminderColor;
    footerHint?: string;
}): EmbedBuilder;
export {};
//# sourceMappingURL=reminder-ui.d.ts.map