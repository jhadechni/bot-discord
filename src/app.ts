import type { BotEvent } from "./types/event.js";
import { client } from "./core/client.js";
import { env } from "./config/env.js";
import { logger } from "./core/logger.js";

// Commands
import { pingCommand } from "./commands/ping/ping.command.js";
import { suggestCommand } from "./commands/suggest/suggest.command.js";
import { configCommand } from "./commands/config/config.command.js";
import { modCommand } from "./commands/moderation/mod.command.js";
import { applyCommand } from "./commands/apply/apply.command.js";
import { helpCommand } from "./commands/help/help.command.js";
import { perfilCommand } from "./commands/levels/perfil.command.js";
import { topCommand } from "./commands/levels/top.command.js";
import { remindCommand } from "./commands/remind/remind.command.js";
import { adormirdaniCommand, atrabajardaniCommand } from "./commands/fun/adormirdani.command.js";
import { catalogoCommand, tiendaCommand } from "./commands/shop/tienda.command.js";
import { stockCommand } from "./commands/shop/stock.command.js";
import { pedidoCommand, pedidosCommand } from "./commands/shop/pedido.command.js";

// Events
import readyEvent from "./events/ready.event.js";
import interactionCreateEvent from "./events/interactionCreate.event.js";
import guildMemberAddEvent from "./events/guildMemberAdd.event.js";
import guildMemberRemoveEvent from "./events/guildMemberRemove.event.js";
import guildMemberUpdateEvent from "./events/guildMemberUpdate.event.js";
import messageReactionAddEvent from "./events/messageReactionAdd.event.js";
import messageReactionRemoveEvent from "./events/messageReactionRemove.event.js";
import messageCreateEvent from "./events/messageCreate.event.js";
import voiceStateUpdateEvent from "./events/voiceStateUpdate.event.js";

// Register commands
for (const cmd of [
  pingCommand,
  suggestCommand,
  configCommand,
  modCommand,
  applyCommand,
  helpCommand,
  perfilCommand,
  topCommand,
  remindCommand,
  adormirdaniCommand,
  atrabajardaniCommand,
  tiendaCommand,
  catalogoCommand,
  stockCommand,
  pedidoCommand,
  pedidosCommand,
]) {
  client.commands.set(cmd.data.name, cmd);
}

// Register events — cast necesario porque TypeScript no puede estrechar uniones de eventos en un loop
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function registerEvent(event: BotEvent<any>): void {
  const fn = (...args: unknown[]) =>
    void (event.execute as (...a: unknown[]) => unknown)(...args);
  if (event.once) {
    client.once(event.name, fn as never);
  } else {
    client.on(event.name, fn as never);
  }
}

for (const event of [
  readyEvent,
  interactionCreateEvent,
  guildMemberAddEvent,
  guildMemberRemoveEvent,
  guildMemberUpdateEvent,
  messageReactionAddEvent,
  messageReactionRemoveEvent,
  messageCreateEvent,
  voiceStateUpdateEvent,
]) {
  registerEvent(event);
}

client.login(env.discordToken).catch((err) => {
  logger.error({ err }, "Error al iniciar sesión");
  process.exit(1);
});
