import type { BotEvent } from '../types/event.js';
import { logger } from '../core/logger.js';
import { startReminderScheduler } from '../utils/reminder-scheduler.js';

const readyEvent: BotEvent<'ready'> = {
  name: 'ready',
  once: true,
  execute(client) {
    logger.info(`Bot conectado como ${client.user.tag} en ${client.guilds.cache.size} servidor(es)`);
    startReminderScheduler();
    logger.info('Reminder scheduler iniciado');
  },
};

export default readyEvent;
