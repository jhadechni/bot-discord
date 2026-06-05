import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from 'discord.js';
export declare function buildPollEmbed(params: {
    question: string;
    options: string[];
    votes: string[][];
    closesAt: Date;
    closed: boolean;
    authorId: string;
}): EmbedBuilder;
export declare function buildPollComponents(pollId: string, options: string[], closed: boolean): ActionRowBuilder<ButtonBuilder>[];
//# sourceMappingURL=poll-ui.d.ts.map