import { REST, Routes } from "discord.js";
import { env } from "../config/env.js";
import { logger } from "../core/logger.js";

// Commands
import { pingCommand } from "../commands/ping/ping.command.js";
import { suggestCommand } from "../commands/suggest/suggest.command.js";
import { configCommand } from "../commands/config/config.command.js";
import { modCommand } from "../commands/moderation/mod.command.js";
import { applyCommand } from "../commands/apply/apply.command.js";
import { solicitudesCommand } from "../commands/apply/solicitudes.command.js";
import { helpCommand } from "../commands/help/help.command.js";
import { perfilCommand } from "../commands/levels/perfil.command.js";
import { topCommand } from "../commands/levels/top.command.js";
import { remindCommand } from "../commands/remind/remind.command.js";
import { adormirdaniCommand, atrabajardaniCommand } from "../commands/fun/adormirdani.command.js";
import { tiendaCommand } from "../commands/shop/tienda.command.js";
import { pedidoCommand, pedidosCommand } from "../commands/shop/pedido.command.js";
import { jugadoresCommand } from "../commands/players/jugadores.command.js";
import { kitCommand } from "../commands/kit/kit.command.js";

const commands = [
  pingCommand,
  suggestCommand,
  configCommand,
  modCommand,
  applyCommand,
  solicitudesCommand,
  helpCommand,
  perfilCommand,
  topCommand,
  remindCommand,
  adormirdaniCommand,
  atrabajardaniCommand,
  tiendaCommand,
  pedidoCommand,
  pedidosCommand,
  jugadoresCommand,
  kitCommand,
].map((cmd) => cmd.data.toJSON());

const rest = new REST().setToken(env.discordToken);

try {
  logger.info(`Registrando ${commands.length} comandos...`);

  await rest.put(Routes.applicationGuildCommands(env.clientId, env.guildId), {
    body: commands,
  });

  logger.info("Comandos registrados correctamente.");
} catch (err) {
  logger.error({ err }, "Error registrando comandos");
  process.exit(1);
}
