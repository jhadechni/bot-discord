import { Client, Collection } from 'discord.js';
import type { Command } from '../types/command.js';
export declare class AquarisClient extends Client {
    readonly commands: Collection<string, Command>;
}
export declare const client: AquarisClient;
//# sourceMappingURL=client.d.ts.map