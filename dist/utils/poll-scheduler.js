import { prisma } from '../database/prisma.js';
import { logger } from '../core/logger.js';
import { buildPollEmbed, buildPollComponents } from './poll-ui.js';
const activeTimeouts = new Map();
export async function closePoll(pollId, client) {
    activeTimeouts.delete(pollId);
    const poll = await prisma.poll.findUnique({ where: { id: pollId } }).catch(() => null);
    if (!poll || poll.closed)
        return;
    await prisma.poll.update({ where: { id: pollId }, data: { closed: true } });
    try {
        const channel = await client.channels.fetch(poll.channelId);
        if (!channel?.isTextBased() || !poll.messageId)
            return;
        const message = await channel.messages.fetch(poll.messageId).catch(() => null);
        if (!message)
            return;
        const options = poll.options;
        const votes = poll.votes;
        await message.edit({
            embeds: [buildPollEmbed({ question: poll.question, options, votes, closesAt: poll.closesAt, closed: true, authorId: poll.authorId })],
            components: buildPollComponents(poll.id, options, true),
        });
    }
    catch (err) {
        logger.warn({ err, pollId }, 'poll-scheduler: no se pudo editar el mensaje al cerrar');
    }
}
export function schedulePollClose(pollId, closesAt, client) {
    const ms = closesAt.getTime() - Date.now();
    if (ms <= 0) {
        void closePoll(pollId, client);
        return;
    }
    const timeout = setTimeout(() => { void closePoll(pollId, client); }, ms);
    activeTimeouts.set(pollId, timeout);
}
export async function startPollScheduler(client) {
    const openPolls = await prisma.poll.findMany({
        where: { closed: false },
    });
    for (const poll of openPolls) {
        schedulePollClose(poll.id, poll.closesAt, client);
    }
    logger.info(`poll-scheduler: ${openPolls.length} encuesta(s) activa(s) programadas`);
}
//# sourceMappingURL=poll-scheduler.js.map