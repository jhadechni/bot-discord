import { prisma } from '../database/prisma.js';
import { logger } from '../core/logger.js';

export function currentYearMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

export function prevYearMonth(monthsBack = 1): string {
  const now = new Date();
  now.setMonth(now.getMonth() - monthsBack);
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

async function cleanOldMonths(): Promise<void> {
  const cutoff = prevYearMonth(2); // más antiguo que 2 meses atrás
  const deleted = await prisma.monthlyActivity.deleteMany({
    where: { yearMonth: { lt: cutoff } },
  });
  if (deleted.count > 0) {
    logger.info({ deleted: deleted.count, cutoff }, 'monthly-scheduler: limpieza de meses antiguos');
  }
}

export function startMonthlyScheduler(): void {
  // Limpieza inmediata al arrancar y luego cada 6 horas
  void cleanOldMonths();
  setInterval(() => { void cleanOldMonths(); }, 6 * 60 * 60 * 1000);
}
