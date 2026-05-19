import { ButtonBuilder, ActionRowBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';
export declare const TYPE_LABELS: Record<string, string>;
export declare function renderLogsPage(guildId: string, targetId: string, page: number): Promise<{
    embeds: import("discord.js").EmbedBuilder[];
    components: ActionRowBuilder<ButtonBuilder>[];
}>;
export declare const logsCommand: Command;
//# sourceMappingURL=logs.command.d.ts.map