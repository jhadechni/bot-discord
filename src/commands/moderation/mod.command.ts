import {
  PermissionFlagsBits,
  SlashCommandBuilder,
  type ChatInputCommandInteraction,
} from 'discord.js';
import type { Command } from '../../types/command.js';
import { banCommand } from './ban.command.js';
import { clearCommand } from './clear.command.js';
import { filterCommand } from './filter.command.js';
import { kickCommand } from './kick.command.js';
import { logsCommand } from './logs.command.js';
import { muteCommand, tempmuteCommand, unmuteCommand } from './mute.command.js';
import { reasonCommand } from './reason.command.js';
import { tempbanCommand } from './tempban.command.js';
import { timeoutCommand, untimeoutCommand } from './timeout.command.js';
import { unbanCommand } from './unban.command.js';
import { warnCommand } from './warn.command.js';
import { warningsCommand } from './warnings.command.js';

function resolveRequiredPermission(
  group: string | null,
  subcommand: string,
): bigint {
  if (group === 'filtro' || (group === 'chat' && subcommand === 'clear')) {
    return PermissionFlagsBits.ManageMessages;
  }

  if (subcommand === 'kick') {
    return PermissionFlagsBits.KickMembers;
  }

  if (subcommand === 'ban' || subcommand === 'tempban' || subcommand === 'unban') {
    return PermissionFlagsBits.BanMembers;
  }

  return PermissionFlagsBits.ModerateMembers;
}

function resolvePermissionLabel(permission: bigint): string {
  if (permission === PermissionFlagsBits.ManageMessages) return 'Gestionar mensajes';
  if (permission === PermissionFlagsBits.KickMembers) return 'Expulsar miembros';
  if (permission === PermissionFlagsBits.BanMembers) return 'Banear miembros';
  return 'Moderar miembros';
}

async function ensureSubcommandPermission(
  interaction: ChatInputCommandInteraction,
  group: string | null,
  subcommand: string,
): Promise<boolean> {
  const requiredPermission = resolveRequiredPermission(group, subcommand);
  if (interaction.memberPermissions?.has(requiredPermission)) {
    return true;
  }

  await interaction.reply({
    content: `❌ Necesitas el permiso **${resolvePermissionLabel(requiredPermission)}** para usar este subcomando.`,
    ephemeral: true,
  });
  return false;
}

export const modCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('mod')
    .setDescription('Centro de moderación del servidor')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addSubcommandGroup(group =>
      group
        .setName('disciplina')
        .setDescription('Acciones disciplinarias sobre usuarios')
        .addSubcommand(sub =>
          sub
            .setName('warn')
            .setDescription('Advierte a un usuario')
            .addUserOption(opt =>
              opt.setName('usuario').setDescription('Usuario a advertir').setRequired(true),
            )
            .addStringOption(opt =>
              opt.setName('motivo').setDescription('Motivo de la advertencia').setRequired(true),
            ),
        )
        .addSubcommand(sub =>
          sub
            .setName('kick')
            .setDescription('Expulsa a un usuario del servidor')
            .addUserOption(opt =>
              opt.setName('usuario').setDescription('Usuario a expulsar').setRequired(true),
            )
            .addStringOption(opt =>
              opt.setName('motivo').setDescription('Motivo de la expulsión').setRequired(false),
            ),
        )
        .addSubcommand(sub =>
          sub
            .setName('ban')
            .setDescription('Banea a un usuario del servidor')
            .addUserOption(opt =>
              opt.setName('usuario').setDescription('Usuario a banear').setRequired(true),
            )
            .addStringOption(opt =>
              opt.setName('motivo').setDescription('Motivo del baneo').setRequired(false),
            )
            .addIntegerOption(opt =>
              opt
                .setName('borrar_mensajes')
                .setDescription('Días de mensajes a borrar (0-7)')
                .setMinValue(0)
                .setMaxValue(7)
                .setRequired(false),
            ),
        )
        .addSubcommand(sub =>
          sub
            .setName('unban')
            .setDescription('Desbanea a un usuario del servidor')
            .addStringOption(opt =>
              opt.setName('user_id').setDescription('ID del usuario a desbanear').setRequired(true),
            )
            .addStringOption(opt =>
              opt.setName('motivo').setDescription('Motivo del desbaneo').setRequired(false),
            ),
        )
        .addSubcommand(sub =>
          sub
            .setName('tempban')
            .setDescription('Banea a un usuario temporalmente')
            .addUserOption(opt =>
              opt.setName('usuario').setDescription('Usuario a banear').setRequired(true),
            )
            .addIntegerOption(opt =>
              opt.setName('duracion').setDescription('Duración en minutos').setRequired(true).setMinValue(1),
            )
            .addStringOption(opt =>
              opt.setName('motivo').setDescription('Motivo del baneo').setRequired(false),
            ),
        )
        .addSubcommand(sub =>
          sub
            .setName('timeout')
            .setDescription('Aplica un timeout a un usuario')
            .addUserOption(opt =>
              opt.setName('usuario').setDescription('Usuario').setRequired(true),
            )
            .addIntegerOption(opt =>
              opt
                .setName('duracion')
                .setDescription('Duración en minutos')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(40320),
            )
            .addStringOption(opt =>
              opt.setName('motivo').setDescription('Motivo').setRequired(false),
            ),
        )
        .addSubcommand(sub =>
          sub
            .setName('untimeout')
            .setDescription('Elimina el timeout de un usuario')
            .addUserOption(opt =>
              opt.setName('usuario').setDescription('Usuario').setRequired(true),
            )
            .addStringOption(opt =>
              opt.setName('motivo').setDescription('Motivo').setRequired(false),
            ),
        )
        .addSubcommand(sub =>
          sub
            .setName('mute')
            .setDescription('Silencia a un usuario (timeout hasta 28 días)')
            .addUserOption(opt =>
              opt.setName('usuario').setDescription('Usuario a silenciar').setRequired(true),
            )
            .addStringOption(opt =>
              opt.setName('motivo').setDescription('Motivo').setRequired(false),
            ),
        )
        .addSubcommand(sub =>
          sub
            .setName('tempmute')
            .setDescription('Silencia temporalmente a un usuario')
            .addUserOption(opt =>
              opt.setName('usuario').setDescription('Usuario a silenciar').setRequired(true),
            )
            .addIntegerOption(opt =>
              opt
                .setName('duracion')
                .setDescription('Duración en minutos')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(40320),
            )
            .addStringOption(opt =>
              opt.setName('motivo').setDescription('Motivo').setRequired(false),
            ),
        )
        .addSubcommand(sub =>
          sub
            .setName('unmute')
            .setDescription('Quita el silencio a un usuario')
            .addUserOption(opt =>
              opt.setName('usuario').setDescription('Usuario').setRequired(true),
            )
            .addStringOption(opt =>
              opt.setName('motivo').setDescription('Motivo').setRequired(false),
            ),
        ),
    )
    .addSubcommandGroup(group =>
      group
        .setName('historial')
        .setDescription('Consulta y edición del historial de moderación')
        .addSubcommand(sub =>
          sub
            .setName('warnings')
            .setDescription('Muestra los avisos de un usuario')
            .addUserOption(opt =>
              opt.setName('usuario').setDescription('Usuario').setRequired(true),
            ),
        )
        .addSubcommand(sub =>
          sub
            .setName('logs')
            .setDescription('Muestra el historial de moderación de un usuario')
            .addUserOption(opt =>
              opt.setName('usuario').setDescription('Usuario').setRequired(true),
            )
            .addIntegerOption(opt =>
              opt.setName('pagina').setDescription('Página (default: 1)').setMinValue(1).setRequired(false),
            ),
        )
        .addSubcommand(sub =>
          sub
            .setName('reason')
            .setDescription('Edita el motivo de una acción de moderación')
            .addStringOption(opt =>
              opt.setName('id').setDescription('ID de la acción (obtenido con /mod historial logs)').setRequired(true),
            )
            .addStringOption(opt =>
              opt.setName('motivo').setDescription('Nuevo motivo').setRequired(true).setMaxLength(500),
            ),
        ),
    )
    .addSubcommandGroup(group =>
      group
        .setName('chat')
        .setDescription('Herramientas de limpieza del chat')
        .addSubcommand(sub =>
          sub
            .setName('clear')
            .setDescription('Elimina mensajes del canal')
            .addIntegerOption(opt =>
              opt
                .setName('cantidad')
                .setDescription('Número de mensajes a eliminar (1-100)')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(100),
            )
            .addUserOption(opt =>
              opt.setName('usuario').setDescription('Filtrar por usuario (opcional)').setRequired(false),
            ),
        ),
    )
    .addSubcommandGroup(group =>
      group
        .setName('filtro')
        .setDescription('Gestiona las palabras filtradas del servidor')
        .addSubcommand(sub =>
          sub
            .setName('añadir')
            .setDescription('Añade una palabra al filtro')
            .addStringOption(opt =>
              opt.setName('palabra').setDescription('Palabra a filtrar').setRequired(true).setMaxLength(100),
            ),
        )
        .addSubcommand(sub =>
          sub
            .setName('eliminar')
            .setDescription('Elimina una palabra del filtro')
            .addStringOption(opt =>
              opt.setName('palabra').setDescription('Palabra a eliminar').setRequired(true),
            ),
        )
        .addSubcommand(sub =>
          sub.setName('lista').setDescription('Muestra todas las palabras filtradas'),
        ),
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    const group = interaction.options.getSubcommandGroup(false);
    const subcommand = interaction.options.getSubcommand();

    if (!(await ensureSubcommandPermission(interaction, group, subcommand))) {
      return;
    }

    if (group === 'disciplina') {
      switch (subcommand) {
        case 'warn':
          await warnCommand.execute(interaction);
          return;
        case 'kick':
          await kickCommand.execute(interaction);
          return;
        case 'ban':
          await banCommand.execute(interaction);
          return;
        case 'unban':
          await unbanCommand.execute(interaction);
          return;
        case 'tempban':
          await tempbanCommand.execute(interaction);
          return;
        case 'timeout':
          await timeoutCommand.execute(interaction);
          return;
        case 'untimeout':
          await untimeoutCommand.execute(interaction);
          return;
        case 'mute':
          await muteCommand.execute(interaction);
          return;
        case 'tempmute':
          await tempmuteCommand.execute(interaction);
          return;
        case 'unmute':
          await unmuteCommand.execute(interaction);
          return;
      }
    }

    if (group === 'historial') {
      switch (subcommand) {
        case 'warnings':
          await warningsCommand.execute(interaction);
          return;
        case 'logs':
          await logsCommand.execute(interaction);
          return;
        case 'reason':
          await reasonCommand.execute(interaction);
          return;
      }
    }

    if (group === 'chat' && subcommand === 'clear') {
      await clearCommand.execute(interaction);
      return;
    }

    if (group === 'filtro') {
      await filterCommand.execute(interaction);
      return;
    }

    await interaction.reply({
      content: '❌ Subcomando de moderación no soportado.',
      ephemeral: true,
    });
  },
};
