import { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } from 'discord.js';
import { AQUARIS_COLORS, buildAquarisErrorEmbed, buildAquarisNoticeEmbed, } from './message-ui.js';
export const SUGGESTION_COLORS = {
    info: AQUARIS_COLORS.suggestions,
    success: AQUARIS_COLORS.success,
    warning: AQUARIS_COLORS.warning,
    danger: AQUARIS_COLORS.danger,
};
export function buildSuggestionNoticeEmbed(options) {
    const embedOptions = {
        title: options.title,
        color: options.color ?? SUGGESTION_COLORS.info,
        footer: 'suggestions',
    };
    if (options.description) {
        embedOptions.description = options.description;
    }
    return buildAquarisNoticeEmbed(embedOptions);
}
export function buildSuggestionErrorEmbed(title, description) {
    return buildAquarisErrorEmbed(title, description);
}
export function buildSuggestionPublicEmbed(options) {
    const { userId, content, displayName, avatarUrl, suggestionId, upCount = 0, downCount = 0 } = options;
    const shortId = suggestionId.slice(-6).toUpperCase();
    const letter = [
        `<@${userId}> ha compartido una sugerencia para la comunidad.`,
        '',
        ...content.trim().split('\n').map(line => `> ${line}`),
    ].join('\n');
    const embed = new EmbedBuilder()
        .setColor(SUGGESTION_COLORS.info)
        .setTitle(`NUEVA SUGERENCIA RECIBIDA | ${displayName}`)
        .setDescription(letter)
        .addFields({ name: '👍 Votos a favor', value: `${upCount}` }, { name: '👎 Votos en contra', value: `${downCount}` })
        .setFooter({
        text: `Recuerda que aunque una sugerencia alcance muchos votos, no siempre se podrán implementar. · ID: ${shortId}  ·  💙 by jhadechni`,
    })
        .setTimestamp();
    if (avatarUrl) {
        embed.setThumbnail(avatarUrl);
    }
    return embed;
}
export function buildSuggestionVoteButtons(suggestionId, upCount, downCount) {
    const total = upCount + downCount;
    const upPct = total > 0 ? Math.round((upCount / total) * 100) : null;
    const downPct = upPct !== null ? 100 - upPct : null;
    const upLabel = upPct !== null ? `👍  ${upPct}%` : '👍';
    const downLabel = downPct !== null ? `👎  ${downPct}%` : '👎';
    return new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId(`suggest:up:${suggestionId}`)
        .setLabel(upLabel)
        .setStyle(ButtonStyle.Primary), new ButtonBuilder()
        .setCustomId(`suggest:down:${suggestionId}`)
        .setLabel(downLabel)
        .setStyle(ButtonStyle.Secondary), new ButtonBuilder()
        .setCustomId(`suggest:debate:${suggestionId}`)
        .setLabel('💬 Debatir')
        .setStyle(ButtonStyle.Secondary));
}
//# sourceMappingURL=suggestion-ui.js.map