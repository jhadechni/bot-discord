import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';

// ── Parseo de tiempo ─────────────────────────────────────────────────────────

/** Convierte un string como "1h30m", "2d", "45m" en minutos. Devuelve null si no se pudo parsear. */
function parseTime(input: string): number | null {
  const regex = /(\d+)\s*([dhm])/gi;
  let minutes = 0;
  let matched = false;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    matched = true;
    const n = parseInt(match[1] ?? '0', 10);
    const unit = (match[2] ?? '').toLowerCase();
    if (unit === 'd') minutes += n * 1440;
    else if (unit === 'h') minutes += n * 60;
    else if (unit === 'm') minutes += n;
  }

  return matched ? minutes : null;
}

/** Formatea minutos como "1d 2h 30m". */
function formatTime(minutes: number): string {
  const d = Math.floor(minutes / 1440);
  const h = Math.floor((minutes % 1440) / 60);
  const m = minutes % 60;
  const parts: string[] = [];
  if (d > 0) parts.push(`${d}d`);
  if (h > 0) parts.push(`${h}h`);
  if (m > 0) parts.push(`${m}m`);
  return parts.length > 0 ? parts.join(' ') : '0m';
}

// ── Comando ───────────────────────────────────────────────────────────────────

export const remindCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('remind')
    .setDescription('Gestiona tus recordatorios personales')
    .addSubcommand(sub =>
      sub
        .setName('add')
        .setDescription('Crear un recordatorio')
        .addStringOption(opt =>
          opt
            .setName('tiempo')
            .setDescription('Cuándo recordarte. Ej: 30m, 2h, 1d, 1h30m')
            .setRequired(true),
        )
        .addStringOption(opt =>
          opt
          .setName('mensaje').setDescription('Texto del recordatorio')
          .setRequired(true),

        )
        .addBooleanOption(opt =>
          opt
            .setName('repetir')
            .setDescription('Repetir con el mismo intervalo indefinidamente')
            .setRequired(false),
        ),
    )
    .addSubcommand(sub =>
      sub.setName('lista').setDescription('Ver tus recordatorios activos'),
    )
    .addSubcommand(sub =>
      sub
        .setName('cancelar')
        .setDescription('Cancelar un recordatorio por su ID')
        .addStringOption(opt =>
          opt
            .setName('id')
            .setDescription('ID corto del recordatorio (ver /remind lista)')
            .setRequired(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('editar')
        .setDescription('Editar un recordatorio existente')
        .addStringOption(opt =>
          opt
            .setName('id')
            .setDescription('ID corto del recordatorio (ver /remind lista)')
            .setRequired(true),
        )
        .addStringOption(opt =>
          opt
            .setName('mensaje')
            .setDescription('Nuevo texto del recordatorio')
            .setRequired(false),
        )
        .addStringOption(opt =>
          opt
            .setName('tiempo')
            .setDescription('Nuevo tiempo desde ahora. Ej: 30m, 2h, 1d')
            .setRequired(false),
        )
        .addBooleanOption(opt =>
          opt
            .setName('repetir')
            .setDescription('Activar o desactivar la repetición automática')
            .setRequired(false),
        ),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const userId = interaction.user.id;
    const guildId = interaction.guildId ?? 'global';
    const sub = interaction.options.getSubcommand();

    // ── add ──────────────────────────────────────────────────────────────────
    if (sub === 'add') {
      const tiempoStr = interaction.options.getString('tiempo', true);
      const mensaje = interaction.options.getString('mensaje', true);
      const repetir = interaction.options.getBoolean('repetir') ?? false;

      const minutes = parseTime(tiempoStr);

      if (!minutes || minutes < 5) {
        await interaction.editReply('❌ Tiempo inválido. Mínimo 5 minutos. Ej: `5m`, `2h`, `1d`');
        return;
      }
      if (minutes > 43_200) {
        await interaction.editReply('❌ El tiempo máximo es 30 días.');
        return;
      }

      const activeCount = await prisma.reminder.count({ where: { userId, active: true } });
      if (activeCount >= 10) {
        await interaction.editReply(
          '❌ Ya tienes 10 recordatorios activos. Cancela alguno antes de crear uno nuevo.',
        );
        return;
      }

      const triggerAt = new Date(Date.now() + minutes * 60_000);
      const reminder = await prisma.reminder.create({
        data: {
          userId,
          guildId,
          message: mensaje,
          triggerAt,
          intervalMin: repetir ? minutes : null,
        },
      });

      const formatted = formatTime(minutes);
      const recurrenceNote = repetir ? ` *(se repetirá cada ${formatted})*` : '';
      await interaction.editReply(
        `✅ Recordatorio creado — te avisaré en **${formatted}**: "${mensaje}"${recurrenceNote}\n` +
          `ID: \`${reminder.id.slice(0, 8)}\``,
      );
      return;
    }

    // ── lista ─────────────────────────────────────────────────────────────────
    if (sub === 'lista') {
      const reminders = await prisma.reminder.findMany({
        where: { userId, active: true },
        orderBy: { triggerAt: 'asc' },
      });

      if (reminders.length === 0) {
        await interaction.editReply('📭 No tienes recordatorios activos.');
        return;
      }

      const lines = reminders.map((r, i) => {
        const msLeft = r.triggerAt.getTime() - Date.now();
        const timeLeft = msLeft > 0 ? formatTime(Math.ceil(msLeft / 60_000)) : 'vencido';
        const recurrence = r.intervalMin ? `  *(↻ cada ${formatTime(r.intervalMin)})*` : '';
        return `**${i + 1}.** \`${r.id.slice(0, 8)}\` — En **${timeLeft}** — "${r.message}"${recurrence}`;
      });

      const embed = new EmbedBuilder()
        .setColor(0x5865f2)
        .setTitle('⏰ Tus recordatorios activos')
        .setDescription(lines.join('\n'))
        .setFooter({ text: 'Usa /remind cancelar <id> para eliminar uno' })
        .setTimestamp();

      await interaction.editReply({ embeds: [embed] });
      return;
    }

    // ── cancelar ──────────────────────────────────────────────────────────────
    if (sub === 'cancelar') {
      const shortId = interaction.options.getString('id', true).trim();

      const reminder = await prisma.reminder.findFirst({
        where: { userId, active: true, id: { startsWith: shortId } },
      });

      if (!reminder) {
        await interaction.editReply(
          '❌ No se encontró ese recordatorio. Usa `/remind lista` para ver tus IDs activos.',
        );
        return;
      }

      await prisma.reminder.update({
        where: { id: reminder.id },
        data: { active: false },
      });

      await interaction.editReply(`✅ Recordatorio \`${shortId}\` cancelado.`);
      return;
    }

    // ── editar ────────────────────────────────────────────────────────────────
    if (sub === 'editar') {
      const shortId = interaction.options.getString('id', true).trim();
      const nuevoMensaje = interaction.options.getString('mensaje');
      const nuevoTiempo = interaction.options.getString('tiempo');
      const repetir = interaction.options.getBoolean('repetir');

      if (!nuevoMensaje && !nuevoTiempo && repetir === null) {
        await interaction.editReply('❌ Debes especificar al menos un campo a editar (`mensaje`, `tiempo` o `repetir`).');
        return;
      }

      const reminder = await prisma.reminder.findFirst({
        where: { userId, active: true, id: { startsWith: shortId } },
      });

      if (!reminder) {
        await interaction.editReply(
          '❌ No se encontró ese recordatorio. Usa `/remind lista` para ver tus IDs activos.',
        );
        return;
      }

      const updates: Record<string, unknown> = {};

      if (nuevoMensaje) {
        updates['message'] = nuevoMensaje;
      }

      if (nuevoTiempo) {
        const minutes = parseTime(nuevoTiempo);
        if (!minutes || minutes < 5) {
          await interaction.editReply('❌ Tiempo inválido. Mínimo 5 minutos. Ej: `5m`, `2h`, `1d`');
          return;
        }
        if (minutes > 43_200) {
          await interaction.editReply('❌ El tiempo máximo es 30 días.');
          return;
        }
        updates['triggerAt'] = new Date(Date.now() + minutes * 60_000);
        // Si también se cambia el tiempo y el reminder es recurrente, actualizar el intervalo
        if (reminder.intervalMin !== null || repetir === true) {
          updates['intervalMin'] = minutes;
        }
      }

      if (repetir === true && !nuevoTiempo) {
        // Activar repetición usando el intervalo actual (diferencia entre ahora y triggerAt)
        const msLeft = reminder.triggerAt.getTime() - Date.now();
        const minutesLeft = Math.max(5, Math.ceil(msLeft / 60_000));
        updates['intervalMin'] = minutesLeft;
      } else if (repetir === false) {
        updates['intervalMin'] = null;
      }

      await prisma.reminder.update({
        where: { id: reminder.id },
        data: updates,
      });

      const cambios: string[] = [];
      if (nuevoMensaje) cambios.push(`mensaje → "${nuevoMensaje}"`);
      if (nuevoTiempo) cambios.push(`tiempo → ${formatTime(parseTime(nuevoTiempo)!)}`);
      if (repetir === true) cambios.push('repetición activada');
      if (repetir === false) cambios.push('repetición desactivada');

      await interaction.editReply(
        `✅ Recordatorio \`${shortId}\` actualizado:\n${cambios.map(c => `• ${c}`).join('\n')}`,
      );
    }
  },
};
