import { prisma } from '../database/prisma.js';
import { client } from '../core/client.js';
import { logger } from '../core/logger.js';
import { getLogChannel } from './log-channel.js';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { buildRecruitmentStaleEmbed } from './recruitment-ui.js';
const POLL_MS = 60 * 60 * 1000; // cada hora
const STALE_OPEN_HOURS = 48;
const STALE_INTERVIEW_DAYS = 7;
export function startRecruitmentScheduler() {
    let running = false;
    setInterval(async () => {
        if (running)
            return;
        running = true;
        try {
            const now = new Date();
            const staleOpenCutoff = new Date(now.getTime() - STALE_OPEN_HOURS * 60 * 60 * 1000);
            const staleInterviewCutoff = new Date(now.getTime() - STALE_INTERVIEW_DAYS * 24 * 60 * 60 * 1000);
            const stale = await prisma.recruitmentTicket.findMany({
                where: {
                    staleAlertedAt: null,
                    OR: [
                        { status: 'OPEN', createdAt: { lte: staleOpenCutoff } },
                        { status: 'ACCEPTED', createdAt: { lte: staleInterviewCutoff } },
                    ],
                },
            });
            for (const ticket of stale) {
                try {
                    const guild = client.guilds.cache.get(ticket.guildId);
                    if (!guild)
                        continue;
                    const cfg = await getOrCreateGuildConfig(ticket.guildId);
                    const logCh = getLogChannel(guild, cfg, 'recruit');
                    if (logCh) {
                        const hoursOpen = Math.floor((now.getTime() - ticket.createdAt.getTime()) / (60 * 60 * 1000));
                        const daysOpen = Math.floor(hoursOpen / 24);
                        const embed = ticket.status === 'OPEN'
                            ? buildRecruitmentStaleEmbed({
                                type: 'stale_open',
                                applicantId: ticket.userId,
                                ticketId: ticket.id,
                                channelId: ticket.channelId,
                                hoursOpen,
                            })
                            : buildRecruitmentStaleEmbed({
                                type: 'stale_interview',
                                applicantId: ticket.userId,
                                ticketId: ticket.id,
                                channelId: ticket.channelId,
                                daysOpen,
                            });
                        await logCh.send({ embeds: [embed] });
                    }
                    await prisma.recruitmentTicket.update({
                        where: { id: ticket.id },
                        data: { staleAlertedAt: now },
                    });
                }
                catch (err) {
                    logger.warn({ err, ticketId: ticket.id }, 'Error procesando ticket stale en recruitment scheduler');
                }
            }
        }
        catch (err) {
            logger.warn({ err }, 'Error en recruitment scheduler');
        }
        finally {
            running = false;
        }
    }, POLL_MS);
}
//# sourceMappingURL=recruitment-scheduler.js.map