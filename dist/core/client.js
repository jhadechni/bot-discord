import { Client, Collection, GatewayIntentBits, Partials } from 'discord.js';
export class AquarisClient extends Client {
    commands = new Collection();
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
//# sourceMappingURL=client.js.map