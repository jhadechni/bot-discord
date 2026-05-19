import { EmbedBuilder } from 'discord.js';
import { AQUARIS_COLORS, AQUARIS_FOOTERS, buildAquarisEmbed } from './message-ui.js';
export const LEVEL_COLORS = {
    profile: AQUARIS_COLORS.levels,
    ranking: AQUARIS_COLORS.warning,
    success: AQUARIS_COLORS.success,
    empty: AQUARIS_COLORS.system,
};
const MEDALS = ['🥇', '🥈', '🥉'];
export function buildLevelProfileEmbed(options) {
    const xpRestantes = options.requiredXp - options.currentXp;
    return new EmbedBuilder()
        .setTitle(options.displayName)
        .setDescription('Resumen de actividad dentro de **Aquaris**.')
        .setColor(0x3498db)
        .setAuthor({ name: 'Perfil de actividad', iconURL: options.avatarUrl })
        .setThumbnail(options.avatarUrl)
        .setFooter(AQUARIS_FOOTERS.community)
        .setTimestamp()
        .addFields({
        name: '🏅 Rango',
        value: `**Nivel ${options.level}**\n#${options.rank} en XP global`,
        inline: true,
    }, {
        name: '✨ Siguiente nivel',
        value: `**Nivel ${options.nextLevel}**\n${xpRestantes.toLocaleString()} XP restantes`,
        inline: true,
    }, {
        name: '📈 Progreso',
        value: `${options.progress}\n**${options.currentXp.toLocaleString()} / ${options.requiredXp.toLocaleString()} XP**`,
        inline: false,
    }, {
        name: '💬 Mensajes',
        value: `**${options.messageCount.toLocaleString()}** enviados`,
        inline: true,
    }, {
        name: '🎙️ Voz',
        value: `**${options.voiceTime}** acumuladas`,
        inline: true,
    }, {
        name: '🌊 Estado',
        value: 'Miembro activo de la comunidad',
        inline: true,
    });
}
export function buildTopEmbed(options) {
    const top3 = options.entries.slice(0, 3);
    const rest = options.entries.slice(3);
    const top1 = options.entries[0];
    const podiumLines = top3.map(e => `${MEDALS[e.rank - 1]}  **${e.name}**\n     ${e.statLine}  ·  Nv. ${e.level}`);
    const sep = '─'.repeat(32);
    const restLines = rest.map(e => {
        const rankStr = String(e.rank).padStart(2, ' ');
        return `\`${rankStr}.\`  ${e.name}  —  ${e.statLine}  ·  Nv. ${e.level}`;
    });
    const description = [
        ...podiumLines,
        ...(restLines.length > 0 ? [sep, ...restLines] : []),
    ].join('\n');
    const embed = new EmbedBuilder()
        .setTitle(options.title)
        .setDescription(description)
        .setColor(0xffd700)
        .setFooter(AQUARIS_FOOTERS.levels)
        .setTimestamp();
    if (top1?.avatarUrl)
        embed.setThumbnail(top1.avatarUrl);
    return embed;
}
export function buildLevelEmptyEmbed() {
    return buildAquarisEmbed({
        title: 'Sin actividad registrada',
        description: 'Todavía no hay actividad suficiente para mostrar un ranking.',
        color: LEVEL_COLORS.empty,
        footer: 'levels',
    });
}
export function buildLevelUpEmbed(userId, level) {
    return buildAquarisEmbed({
        title: '🎉 Subida de nivel',
        description: `<@${userId}> alcanzó el **nivel ${level}**.`,
        color: LEVEL_COLORS.success,
        footer: 'levels',
    });
}
//# sourceMappingURL=levels-ui.js.map