import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';
export type NotifRole = {
    roleId: string;
    label: string;
    emoji: string;
    description: string;
};
export declare function parseNotifRoles(raw: unknown): NotifRole[];
export declare function buildNotifPanel(roles: NotifRole[]): {
    embeds: EmbedBuilder[];
    components: ActionRowBuilder<ButtonBuilder>[];
};
export declare function buildNotifEphemeral(roles: NotifRole[], currentRoleIds: Set<string>): {
    embeds: EmbedBuilder[];
    components: ActionRowBuilder<StringSelectMenuBuilder>[];
};
export declare const notifCommand: Command;
//# sourceMappingURL=notif.command.d.ts.map