import type { BotEvent } from '../types/event.js';
import { logger } from '../core/logger.js';
import { startReminderScheduler } from '../utils/reminder-scheduler.js';
import { startRecruitmentScheduler } from '../utils/recruitment-scheduler.js';
import { startTempbanScheduler } from '../utils/tempban-scheduler.js';
import { reloadTaxonomyFromDatabase } from '../shop/taxonomy.js';
import { syncAutoModRule } from '../utils/automod-sync.js';

const readyEvent: BotEvent<'ready'> = {
  name: 'ready',
  once: true,
  async execute(client) {
    logger.info(`Bot conectado como ${client.user.tag} en ${client.guilds.cache.size} servidor(es)`);
    startReminderScheduler();
    logger.info('Reminder scheduler iniciado');
    startRecruitmentScheduler();
    logger.info('Recruitment scheduler iniciado');
    startTempbanScheduler();
    logger.info('Tempban scheduler iniciado');

    try {
      const categories = await reloadTaxonomyFromDatabase();
      logger.info(`[taxonomy] ${categories.length} categoría(s) cargadas desde la base de datos`);
    } catch (err) {
      logger.warn({ err }, '[taxonomy] No se pudo cargar la taxonomía desde la base de datos al arrancar');
    }

    // Sincronizar reglas de AutoMod nativo con el filtro de palabras de cada servidor
    for (const [guildId] of client.guilds.cache) {
      void syncAutoModRule(client, guildId);
    }
  },
};

export default readyEvent;
