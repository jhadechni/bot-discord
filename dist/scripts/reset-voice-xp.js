/**
 * One-shot: resta el XP acumulado por voz y resetea voiceMinutes a 0.
 * Fórmula inversa: voiceXp = voiceMinutes * 5
 */
import { prisma } from '../database/prisma.js';
import { calcLevel } from '../utils/xp.js';
import { logger } from '../core/logger.js';
const records = await prisma.userActivity.findMany({
    where: { voiceMinutes: { gt: 0 } },
});
logger.info(`Procesando ${records.length} registros con voz acumulada...`);
let updated = 0;
for (const record of records) {
    const voiceXp = record.voiceMinutes * 5;
    const newXp = Math.max(0, record.xp - voiceXp);
    const newLevel = calcLevel(newXp);
    await prisma.userActivity.update({
        where: { guildId_userId: { guildId: record.guildId, userId: record.userId } },
        data: { xp: newXp, voiceMinutes: 0, level: newLevel },
    });
    updated++;
    logger.info({ userId: record.userId, xpRemoved: voiceXp, newXp, oldLevel: record.level, newLevel }, 'Registro actualizado');
}
logger.info(`Listo. ${updated} usuarios actualizados.`);
await prisma.$disconnect();
//# sourceMappingURL=reset-voice-xp.js.map