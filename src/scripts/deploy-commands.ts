import { REST, Routes } from "discord.js";
import { env } from "../config/env.js";
import { logger } from "../core/logger.js";

// Commands
import { pingCommand } from "../commands/ping/ping.command.js";
import { suggestCommand } from "../commands/suggest/suggest.command.js";
import { configCommand } from "../commands/config/config.command.js";
import { warnCommand } from "../commands/moderation/warn.command.js";
import { kickCommand } from "../commands/moderation/kick.command.js";
import { banCommand } from "../commands/moderation/ban.command.js";
import { unbanCommand } from "../commands/moderation/unban.command.js";
import { tempbanCommand } from "../commands/moderation/tempban.command.js";
import {
  timeoutCommand,
  untimeoutCommand,
} from "../commands/moderation/timeout.command.js";
import {
  muteCommand,
  tempmuteCommand,
  unmuteCommand,
} from "../commands/moderation/mute.command.js";
import { warningsCommand } from "../commands/moderation/warnings.command.js";
import { clearCommand } from "../commands/moderation/clear.command.js";
import { logsCommand } from "../commands/moderation/logs.command.js";
import { reasonCommand } from "../commands/moderation/reason.command.js";
import { filterCommand } from "../commands/moderation/filter.command.js";
import { applyCommand } from "../commands/apply/apply.command.js";
import { helpCommand } from "../commands/help/help.command.js";
import { perfilCommand } from "../commands/levels/perfil.command.js";
import { topCommand } from "../commands/levels/top.command.js";
import { remindCommand } from "../commands/remind/remind.command.js";
import { adormirdaniCommand, atrabajardaniCommand } from "../commands/fun/adormirdani.command.js";
import { tiendaCommand } from "../commands/shop/tienda.command.js";
import { stockCommand } from "../commands/shop/stock.command.js";
import { pedidoCommand } from "../commands/shop/pedido.command.js";

const commands = [
  pingCommand,
  suggestCommand,
  configCommand,
  warnCommand,
  kickCommand,
  banCommand,
  unbanCommand,
  tempbanCommand,
  timeoutCommand,
  untimeoutCommand,
  muteCommand,
  tempmuteCommand,
  unmuteCommand,
  warningsCommand,
  clearCommand,
  logsCommand,
  reasonCommand,
  filterCommand,
  applyCommand,
  helpCommand,
  perfilCommand,
  topCommand,
  remindCommand,
  adormirdaniCommand,
  atrabajardaniCommand,
  tiendaCommand,
  stockCommand,
  pedidoCommand,
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
