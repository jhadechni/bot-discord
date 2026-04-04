import { prisma } from '../database/prisma.js';
import { client } from '../core/client.js';
import { logger } from '../core/logger.js';

/**
 * Inicia el scheduler de recordatorios.
 * Se comprueba cada minuto si hay recordatorios vencidos.
 * Llamar desde el evento `ready` para garantizar que el bot está conectado.
 */
export function startReminderScheduler(): void {
  setInterval(async () => {
    try {
      const now = new Date();
      const due = await prisma.reminder.findMany({
        where: { active: true, triggerAt: { lte: now } },
      });

      for (const reminder of due) {
        // Enviar DM al usuario
        try {
          const user = await client.users.fetch(reminder.userId);
          await user.send(`⏰ **Recordatorio:** ${reminder.message}`);
        } catch {
          // DMs desactivados o usuario no encontrado — continúa
        }

        if (reminder.intervalMin) {
          // Recurrente: programar el siguiente disparo
          const nextTrigger = new Date(reminder.triggerAt.getTime() + reminder.intervalMin * 60_000);
          await prisma.reminder.update({
            where: { id: reminder.id },
            data: { triggerAt: nextTrigger },
          });
        } else {
          // Único: desactivar
          await prisma.reminder.update({
            where: { id: reminder.id },
            data: { active: false },
          });
        }
      }
    } catch (err) {
      logger.warn({ err }, 'Error en reminder scheduler');
    }
  }, 60_000);
}
