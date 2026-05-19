import { prisma } from '../database/prisma.js';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { buildLevelUpEmbed } from '../utils/levels-ui.js';
import { calcLevel } from '../utils/xp.js';
import { logger } from '../core/logger.js';
// Map<"guildId-userId", joinTimestamp> — sesiones de voz activas
const voiceJoinTimes = new Map();
const voiceStateUpdateEvent = {
    name: 'voiceStateUpdate',
    async execute(oldState, newState) {
        const member = newState.member;
        if (!member || member.user.bot)
            return;
        const guildId = newState.guild.id;
        const userId = newState.id;
        const key = `${guildId}-${userId}`;
        const wasInVoice = !!oldState.channelId;
        const isInVoice = !!newState.channelId;
        const wasMuted = oldState.selfMute || oldState.selfDeaf || oldState.serverMute || oldState.serverDeaf;
        const isMuted = newState.selfMute || newState.selfDeaf || newState.serverMute || newState.serverDeaf;
        // Empezar a contar: entra a un canal de voz activo (no muteado)
        if (isInVoice && !isMuted && (!wasInVoice || wasMuted)) {
            voiceJoinTimes.set(key, Date.now());
            return;
        }
        // Detener contador: sale de voz O se mutea/ensordece
        if (voiceJoinTimes.has(key) && (!isInVoice || isMuted)) {
            const startTime = voiceJoinTimes.get(key);
            voiceJoinTimes.delete(key);
            const minutes = Math.floor((Date.now() - startTime) / 60_000);
            if (minutes < 1)
                return; // sesión demasiado corta
            const voiceXp = minutes * 5; // 5 XP/minuto
            try {
                const activity = await prisma.userActivity.upsert({
                    where: { guildId_userId: { guildId, userId } },
                    update: {
                        xp: { increment: voiceXp },
                        voiceMinutes: { increment: minutes },
                    },
                    create: { guildId, userId, xp: voiceXp, voiceMinutes: minutes, level: 0 },
                });
                const newLevel = calcLevel(activity.xp);
                if (newLevel > activity.level) {
                    await prisma.userActivity.update({
                        where: { guildId_userId: { guildId, userId } },
                        data: { level: newLevel },
                    });
                    // Notificación de subida de nivel
                    const config = await getOrCreateGuildConfig(guildId);
                    if (config.levelUpChannelId) {
                        const ch = newState.guild.channels.cache.get(config.levelUpChannelId);
                        if (ch?.isTextBased()) {
                            await ch.send({
                                embeds: [buildLevelUpEmbed(userId, newLevel)],
                            });
                        }
                    }
                }
            }
            catch (err) {
                logger.warn({ err }, 'Error actualizando XP de voz');
            }
        }
    },
};
export default voiceStateUpdateEvent;
//# sourceMappingURL=voiceStateUpdate.event.js.map