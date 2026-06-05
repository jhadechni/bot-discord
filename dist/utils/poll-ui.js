import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { AQUARIS_COLORS } from './message-ui.js';
const BAR_LEN = 20;
function makeBar(pct) {
    const filled = Math.round((pct / 100) * BAR_LEN);
    return '█'.repeat(filled) + '░'.repeat(BAR_LEN - filled);
}
function formatTimeLeft(closesAt) {
    const ms = closesAt.getTime() - Date.now();
    if (ms <= 0)
        return 'pronto';
    const minutes = Math.floor(ms / 60_000);
    if (minutes < 60)
        return `en ${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        const rem = minutes % 60;
        return rem > 0 ? `en ${hours}h ${rem}m` : `en ${hours}h`;
    }
    const days = Math.floor(hours / 24);
    const remH = hours % 24;
    return remH > 0 ? `en ${days}d ${remH}` : `en ${days}d`;
}
export function buildPollEmbed(params) {
    const { question, options, votes, closesAt, closed } = params;
    const totalVotes = votes.reduce((sum, v) => sum + v.length, 0);
    const maxCount = Math.max(...votes.map(v => v.length), 0);
    const winnerIndices = closed && maxCount > 0
        ? votes.map((v, i) => v.length === maxCount ? i : -1).filter(i => i >= 0)
        : [];
    const fields = options.map((opt, i) => {
        const count = votes[i]?.length ?? 0;
        const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
        const isWinner = winnerIndices.includes(i);
        const prefix = isWinner ? '🏆  ' : '';
        const name = `${prefix}${opt}`;
        const value = `\`${makeBar(pct)}\`  ${count} voto${count !== 1 ? 's' : ''}  ·  **${pct}%**`;
        return { name, value, inline: false };
    });
    const votesLabel = `${totalVotes} voto${totalVotes !== 1 ? 's' : ''}`;
    const statusText = closed
        ? `${votesLabel}  ·  Encuesta cerrada`
        : `${votesLabel}  ·  Cierra ${formatTimeLeft(closesAt)}`;
    const color = closed
        ? (totalVotes > 0 ? 0x57f287 : AQUARIS_COLORS.neutral)
        : 0x5865f2;
    return new EmbedBuilder()
        .setTitle(`🗳️  ${question}`)
        .setColor(color)
        .addFields(fields)
        .setFooter({ text: `${statusText}  ·  💙 by jhadechni` })
        .setTimestamp();
}
export function buildPollComponents(pollId, options, closed) {
    return options.map((opt, i) => new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId(`poll:vote:${pollId}:${i}`)
        .setLabel(opt.length > 80 ? opt.slice(0, 77) + '...' : opt)
        .setStyle(closed ? ButtonStyle.Secondary : ButtonStyle.Primary)
        .setDisabled(closed)));
}
//# sourceMappingURL=poll-ui.js.map