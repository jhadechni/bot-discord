import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { prisma } from '../database/prisma.js';
import { client } from '../core/client.js';
import { logger } from '../core/logger.js';
import { formatTime } from './time.js';

const REMINDER_POLL_MS = 60_000;
const DB_RETRY_DELAY_MS = 1_000;

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return `${err.name}: ${err.message}`;
  }

  if (typeof err === 'object' && err !== null && 'message' in err) {
    const message = (err as { message?: unknown }).message;
    return typeof message === 'string' ? message : '';
  }

  return '';
}

function isTransientDatabaseError(err: unknown): boolean {
  const message = getErrorMessage(err).toLowerCase();

  return (
    message.includes('terminating connection') ||
    message.includes('connection terminated') ||
    message.includes('connection closed') ||
    message.includes('connection reset') ||
    message.includes('econnreset') ||
    message.includes('timeout')
  );
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function withDatabaseRetry<T>(operation: () => Promise<T>): Promise<T> {
  try {
    return await operation();
  } catch (err) {
    if (!isTransientDatabaseError(err)) {
      throw err;
    }

    logger.warn({ err }, 'Error transitorio de BD en reminder scheduler; reintentando');
    await wait(DB_RETRY_DELAY_MS);
    return operation();
  }
}

/**
 * Inicia el scheduler de recordatorios.
 * Se comprueba cada minuto si hay recordatorios vencidos.
 * Llamar desde el evento `ready` para garantizar que el bot está conectado.
 */
export function startReminderScheduler(): void {
  let running = false;

  setInterval(async () => {
    if (running) {
      logger.warn('Reminder scheduler omitió un ciclo porque el anterior sigue en ejecución');
      return;
    }

    running = true;

    try {
      const now = new Date();
      const due = await withDatabaseRetry(() => prisma.reminder.findMany({
        where: { active: true, triggerAt: { lte: now } },
        include: { template: true },
      }));

      for (const reminder of due) {
        try {
          const user = await client.users.fetch(reminder.userId);

          if (reminder.template) {
            // Recordatorio de kit — embed + botón "Ya lo reclamé"
            const embed = new EmbedBuilder()
              .setColor(0xfee75c)
              .setTitle('⏰ ¡Es momento de reclamar tu kit!')
              .setDescription(`**${reminder.template.name}** está disponible para reclamar.`)
              .setFooter({ text: `Cooldown: ${formatTime(reminder.template.cooldownMin)} · Pulsa el botón después de reclamarlo` })
              .setTimestamp();

            const claimBtn = new ButtonBuilder()
              .setCustomId(`remind:kit:claimed:${reminder.template.id}:${reminder.guildId}`)
              .setLabel('Ya lo reclamé')
              .setStyle(ButtonStyle.Success)
              .setEmoji('✅');

            await user.send({
              embeds: [embed],
              components: [new ActionRowBuilder<ButtonBuilder>().addComponents(claimBtn)],
            });
          } else {
            // Recordatorio personalizado — texto plano
            await user.send(`⏰ **Recordatorio:** ${reminder.message}`);
          }
        } catch {
          // DMs desactivados o usuario no encontrado — continúa
        }

        if (reminder.intervalMin) {
          // Recurrente (solo aplica a recordatorios personalizados con repetir=true)
          const nextTrigger = new Date(reminder.triggerAt.getTime() + reminder.intervalMin * 60_000);
          await withDatabaseRetry(() => prisma.reminder.update({
            where: { id: reminder.id },
            data: { triggerAt: nextTrigger },
          }));
        } else {
          // Único (todos los de kit son one-shot): desactivar tras disparar
          await withDatabaseRetry(() => prisma.reminder.update({
            where: { id: reminder.id },
            data: { active: false },
          }));
        }
      }
    } catch (err) {
      logger.warn({ err }, 'Error en reminder scheduler');
    } finally {
      running = false;
    }
  }, REMINDER_POLL_MS);
}
