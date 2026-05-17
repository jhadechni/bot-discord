import {
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { parseTime, formatTime } from '../../utils/time.js';
import {
  REMINDER_COLORS,
  buildKitReminderListEmbed,
  buildReminderErrorEmbed,
  buildReminderNoticeEmbed,
} from '../../utils/reminder-ui.js';

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
    )
    .addSubcommand(sub =>
      sub.setName('kit').setDescription('Gestionar recordatorios de kits del servidor'),
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
        await interaction.editReply({
          embeds: [
            buildReminderErrorEmbed(
              'Tiempo inválido',
              'El mínimo es 5 minutos. Usa un formato como `5m`, `2h` o `1d`.',
            ),
          ],
        });
        return;
      }
      if (minutes > 43_200) {
        await interaction.editReply({
          embeds: [buildReminderErrorEmbed('Tiempo inválido', 'El tiempo máximo es 30 días.')],
        });
        return;
      }

      const activeCount = await prisma.reminder.count({ where: { userId, active: true } });
      if (activeCount >= 10) {
        await interaction.editReply({
          embeds: [
            buildReminderErrorEmbed(
              'Límite alcanzado',
              'Ya tienes 10 recordatorios activos. Cancela alguno antes de crear uno nuevo.',
            ),
          ],
        });
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
      await interaction.editReply({
        embeds: [
          buildReminderNoticeEmbed({
            title: 'Recordatorio creado',
            description: `Te avisaré en **${formatted}**.${recurrenceNote}`,
            color: REMINDER_COLORS.success,
            fields: [
              { name: 'Mensaje', value: mensaje },
              { name: 'ID', value: `\`${reminder.id.slice(0, 8)}\``, inline: true },
            ],
          }),
        ],
      });
      return;
    }

    // ── lista ─────────────────────────────────────────────────────────────────
    if (sub === 'lista') {
      const reminders = await prisma.reminder.findMany({
        where: { userId, active: true },
        orderBy: { triggerAt: 'asc' },
      });

      if (reminders.length === 0) {
        await interaction.editReply({
          embeds: [
            buildReminderNoticeEmbed({
              title: 'Sin recordatorios',
              description: 'No tienes recordatorios activos.',
              color: REMINDER_COLORS.info,
            }),
          ],
        });
        return;
      }

      const lines = reminders.map((r, i) => {
        const msLeft = r.triggerAt.getTime() - Date.now();
        const timeLeft = msLeft > 0 ? formatTime(Math.ceil(msLeft / 60_000)) : 'vencido';
        const recurrence = r.intervalMin ? `  *(↻ cada ${formatTime(r.intervalMin)})*` : '';
        return `**${i + 1}.** \`${r.id.slice(0, 8)}\` — En **${timeLeft}** — "${r.message}"${recurrence}`;
      });

      const embed = buildReminderNoticeEmbed({
        title: 'Tus recordatorios activos',
        description: lines.join('\n'),
        color: REMINDER_COLORS.info,
      }).setFooter({ text: 'Aquaris • Recordatorios · Usa /remind cancelar <id> para eliminar uno' });

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
        await interaction.editReply({
          embeds: [
            buildReminderErrorEmbed(
              'Recordatorio no encontrado',
              'Usa `/remind lista` para ver tus IDs activos.',
            ),
          ],
        });
        return;
      }

      await prisma.reminder.update({
        where: { id: reminder.id },
        data: { active: false },
      });

      await interaction.editReply({
        embeds: [
          buildReminderNoticeEmbed({
            title: 'Recordatorio cancelado',
            description: `El recordatorio \`${shortId}\` fue cancelado.`,
            color: REMINDER_COLORS.success,
          }),
        ],
      });
      return;
    }

    // ── editar ────────────────────────────────────────────────────────────────
    if (sub === 'editar') {
      const shortId = interaction.options.getString('id', true).trim();
      const nuevoMensaje = interaction.options.getString('mensaje');
      const nuevoTiempo = interaction.options.getString('tiempo');
      const repetir = interaction.options.getBoolean('repetir');

      if (!nuevoMensaje && !nuevoTiempo && repetir === null) {
        await interaction.editReply({
          embeds: [
            buildReminderErrorEmbed(
              'Sin cambios',
              'Debes especificar al menos un campo a editar: `mensaje`, `tiempo` o `repetir`.',
            ),
          ],
        });
        return;
      }

      const reminder = await prisma.reminder.findFirst({
        where: { userId, active: true, id: { startsWith: shortId } },
      });

      if (!reminder) {
        await interaction.editReply({
          embeds: [
            buildReminderErrorEmbed(
              'Recordatorio no encontrado',
              'Usa `/remind lista` para ver tus IDs activos.',
            ),
          ],
        });
        return;
      }

      const updates: Record<string, unknown> = {};

      if (nuevoMensaje) {
        updates['message'] = nuevoMensaje;
      }

      if (nuevoTiempo) {
        const minutes = parseTime(nuevoTiempo);
        if (!minutes || minutes < 5) {
          await interaction.editReply({
            embeds: [
              buildReminderErrorEmbed(
                'Tiempo inválido',
                'El mínimo es 5 minutos. Usa un formato como `5m`, `2h` o `1d`.',
              ),
            ],
          });
          return;
        }
        if (minutes > 43_200) {
          await interaction.editReply({
            embeds: [buildReminderErrorEmbed('Tiempo inválido', 'El tiempo máximo es 30 días.')],
          });
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

      await interaction.editReply({
        embeds: [
          buildReminderNoticeEmbed({
            title: 'Recordatorio actualizado',
            description: cambios.map(c => `• ${c}`).join('\n'),
            color: REMINDER_COLORS.success,
            fields: [{ name: 'ID', value: `\`${shortId}\``, inline: true }],
          }),
        ],
      });
    }

    // ── kit ───────────────────────────────────────────────────────────────────
    if (sub === 'kit') {
      if (!interaction.guildId) {
        await interaction.editReply({
          embeds: [
            buildReminderErrorEmbed(
              'Servidor requerido',
              'Este subcomando solo funciona en un servidor.',
            ),
          ],
        });
        return;
      }

      const templates = await prisma.reminderTemplate.findMany({
        where: { guildId: interaction.guildId, isActive: true },
        orderBy: { name: 'asc' },
      });

      if (templates.length === 0) {
        await interaction.editReply({
          embeds: [
            buildReminderNoticeEmbed({
              title: 'Sin plantillas de kit',
              description: 'No hay plantillas de kits configuradas en este servidor. Pide al staff que use `/kit crear`.',
              color: REMINDER_COLORS.info,
            }),
          ],
        });
        return;
      }

      const activeKitReminders = await prisma.reminder.findMany({
        where: { userId, guildId: interaction.guildId, active: true, templateId: { not: null } },
        include: { template: true },
        orderBy: { triggerAt: 'asc' },
      });

      const activeTemplateIds = new Set(activeKitReminders.map(r => r.templateId!));

      // Embed
      const lines = activeKitReminders.length > 0
        ? activeKitReminders.map(r => {
            const msLeft = r.triggerAt.getTime() - Date.now();
            const timeLeft = msLeft > 0 ? formatTime(Math.ceil(msLeft / 60_000)) : 'vencido';
            return `🎁 **${r.template!.name}** — en **${timeLeft}**  *(cada ${formatTime(r.template!.cooldownMin)})*`;
          })
        : ['No tienes recordatorios de kit activos. Selecciona abajo y guarda para activarlos.'];

      const embed = buildKitReminderListEmbed({
        lines,
        footerHint: 'Selecciona kits y pulsa Guardar · Pulsa Ya lo reclamé en el DM cuando lo hagas',
      });

      // Select multi con pre-selección
      const select = new StringSelectMenuBuilder()
        .setCustomId('remind:kit:toggle')
        .setPlaceholder('Selecciona los kits que quieres recordar...')
        .setMinValues(0)
        .setMaxValues(templates.length)
        .addOptions(
          templates.map(t =>
            new StringSelectMenuOptionBuilder()
              .setLabel(t.name)
              .setDescription(t.description ?? `Cooldown: ${formatTime(t.cooldownMin)}`)
              .setValue(t.id)
              .setDefault(activeTemplateIds.has(t.id)),
          ),
        );

      const saveBtn = new ButtonBuilder()
        .setCustomId('remind:kit:save')
        .setLabel('Guardar')
        .setStyle(ButtonStyle.Primary);

      const editBtn = new ButtonBuilder()
        .setCustomId('remind:kit:edit_open')
        .setLabel('Editar próximo aviso')
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(activeKitReminders.length === 0);

      await interaction.editReply({
        embeds: [embed],
        components: [
          new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select),
          new ActionRowBuilder<ButtonBuilder>().addComponents(saveBtn, editBtn),
        ],
      });
    }
  },
};
