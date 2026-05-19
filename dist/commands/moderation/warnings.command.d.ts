import { ButtonBuilder, ActionRowBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';
export declare function renderWarningsPage(guildId: string, targetId: string, page: number): Promise<{
    embeds: import("discord.js").EmbedBuilder[];
    components: ActionRowBuilder<ButtonBuilder>[];
}>;
export declare const warningsCommand: Command;
//# sourceMappingURL=warnings.command.d.ts.map