import { EmbedBuilder, ButtonBuilder, ActionRowBuilder } from 'discord.js';
import { type AquarisColor } from './message-ui.js';
export declare const SUGGESTION_COLORS: {
    readonly info: 3447003;
    readonly success: 5763719;
    readonly warning: 16705372;
    readonly danger: 15548997;
};
type SuggestionColor = AquarisColor;
export declare function buildSuggestionNoticeEmbed(options: {
    title: string;
    description?: string;
    color?: SuggestionColor;
}): EmbedBuilder;
export declare function buildSuggestionErrorEmbed(title: string, description: string): EmbedBuilder;
type SuggestionPublicEmbedOptions = {
    content: string;
    userId: string;
    displayName: string;
    avatarUrl?: string | null;
    suggestionId: string;
    upCount?: number;
    downCount?: number;
};
export declare function buildSuggestionPublicEmbed(options: SuggestionPublicEmbedOptions): EmbedBuilder;
export declare function buildSuggestionVoteButtons(suggestionId: string, upCount: number, downCount: number): ActionRowBuilder<ButtonBuilder>;
export {};
//# sourceMappingURL=suggestion-ui.d.ts.map