import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';

export const helpCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Muestra todos los comandos disponibles'),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const embed = new EmbedBuilder()
      .setColor(0x5865f2)
      .setTitle('📖 Comandos del Bot Aquaris')
      .addFields(
        {
          name: '🔧 General',
          value: [
            '`/ping` — Comprueba que el bot responde y el estado de la base de datos.',
            '`/help` — Muestra este mensaje.',
          ].join('\n'),
        },
        {
          name: '💡 Sugerencias',
          value:
            '`/suggest contenido` — Envía una sugerencia al canal configurado. El staff puede cambiar su estado.',
        },
        {
          name: '📋 Reclutamiento',
          value:
            '`/apply` — Abre el formulario de solicitud de ingreso al clan. Primero seleccionas tu rol, luego rellenas el formulario.',
        },
        {
          name: '🛡️ Moderación (solo staff)',
          value: [
            '`/warn usuario motivo` — Registra una advertencia y notifica al usuario por DM.',
            '`/kick usuario [motivo]` — Expulsa al usuario del servidor.',
            '`/ban usuario [motivo] [borrar_mensajes]` — Banea al usuario (0-7 días de mensajes borrados).',
          ].join('\n'),
        },
        {
          name: '⚙️ Configuración (solo staff)',
          value: [
            '`/config ver` — Muestra la configuración actual del bot.',
            '`/config set-welcome canal` — Canal de bienvenida y despedida.',
            '`/config set-logs canal` — Canal de logs de moderación.',
            '`/config set-suggestions canal` — Canal de sugerencias.',
            '`/config set-recruitment categoria_id` — Categoría para tickets de reclutamiento.',
            '`/config set-rol tipo rol` — Asocia un rol de Discord a una función del bot.',
          ].join('\n'),
        },
      )
      .setFooter({ text: 'Aquaris Bot · Fase 1' })
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  },
};
