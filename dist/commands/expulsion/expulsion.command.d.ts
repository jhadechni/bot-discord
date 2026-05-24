import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';
export type ExpulsionReason = {
    id: string;
    text: string;
};
export declare const pendingExpulsions: Map<string, {
    targetId: string;
    targetTag: string;
    reason: string;
}>;
export declare function parseExpulsionReasons(raw: unknown): ExpulsionReason[];
export declare function buildExpulsionSelectorEmbed(target: {
    id: string;
    username: string;
    displayName: string;
}, reasons: ExpulsionReason[]): import("discord.js").EmbedBuilder;
export declare function buildExpulsionConfirmEmbed(target: {
    id: string;
    username: string;
}, reason: string): import("discord.js").EmbedBuilder;
export declare function buildReasonSelectMenu(reasons: ExpulsionReason[], targetId: string): StringSelectMenuBuilder;
export declare function buildConfirmRow(targetId: string, disabled?: boolean): ActionRowBuilder<ButtonBuilder>;
export declare function executeExpulsion(params: {
    guildId: string;
    targetId: string;
    targetTag: string;
    reason: string;
    moderatorId: string;
    guild: import('discord.js').Guild;
}): Promise<{
    rolesReset: boolean;
    visitorAssigned: boolean;
    clanPlayerUpdated: boolean;
    protectionsRemoved: number;
    clanPlayerFound: boolean;
}>;
export declare const expulsionCommand: Command;
//# sourceMappingURL=expulsion.command.d.ts.map