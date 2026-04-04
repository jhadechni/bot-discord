import type { BotEvent } from '../types/event.js';
import { logger } from '../core/logger.js';
import { startReminderScheduler } from '../utils/reminder-scheduler.js';
import { importCategoriasFromSheet, sheetsEnabled } from '../shop/sync.js';

const readyEvent: BotEvent<'ready'> = {
  name: 'ready',
  once: true,
  execute(client) {
    logger.info(`Bot conectado como ${client.user.tag} en ${client.guilds.cache.size} servidor(es)`);
    startReminderScheduler();
    logger.info('Reminder scheduler iniciado');

    if (sheetsEnabled()) {
      importCategoriasFromSheet()
        .then(summary => {
          if (summary.errors.length > 0) {
            logger.warn({ errors: summary.errors }, '[taxonomy] Errores al cargar categorías desde Sheets al arrancar');
          } else {
            logger.info(`[taxonomy] ${summary.created} categoría(s) cargadas desde Sheets`);
          }
        })
        .catch(err => logger.warn({ err }, '[taxonomy] No se pudo cargar la taxonomía desde Sheets al arrancar'));
    }
  },
};

export default readyEvent;
