import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder, EmbedBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';
export type RecruitRejectionReason = {
    id: string;
    label: string;
    body: string;
};
export declare const pendingRecruitRejections: Map<string, {
    ticketId: string;
    channelId: string;
    messageId: string;
    label: string;
    body: string;
}>;
export declare function parseRejectionReasons(raw: unknown): RecruitRejectionReason[];
export declare function buildRejectionReasonSelect(reasons: RecruitRejectionReason[], ticketId: string, channelId: string, messageId: string, selectedId?: string): StringSelectMenuBuilder;
export declare function buildRejectionConfirmRow(ticketId: string, channelId: string, messageId: string, disabled?: boolean): ActionRowBuilder<ButtonBuilder>;
export declare function buildRejectionSelectorEmbed(reasons: RecruitRejectionReason[], selectedLabel?: string): EmbedBuilder;
export declare const reclutamientoCommand: Command;
export declare function handleAddRejectionReasonModal(interaction: import('discord.js').ModalSubmitInteraction): Promise<void>;
//# sourceMappingURL=reclutamiento.command.d.ts.map