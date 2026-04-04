import { Client, Collection, GatewayIntentBits, Partials } from 'discord.js';
import type { Command } from '../types/command.js';

export class AquarisClient extends Client {
  readonly commands = new Collection<string, Command>();
}

export const client = new AquarisClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildVoiceStates,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});
