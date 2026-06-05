import { EmbedBuilder } from 'discord.js';
import { COLORS } from './ui.js';
export const AQUARIS_FOOTERS = {
    logsModeration: { text: 'Aquaris Logs • Moderación  ·  💙 by jhadechni' },
    logsCommunity: { text: 'Aquaris Logs • Comunidad  ·  💙 by jhadechni' },
    logsRecruitment: { text: 'Aquaris Logs • Reclutamiento  ·  💙 by jhadechni' },
    moderation: { text: 'Aquaris • Moderación  ·  💙 by jhadechni' },
    system: { text: 'Aquaris • Sistema  ·  💙 by jhadechni' },
    shop: { text: 'Aquaris • Tienda  ·  💙 by jhadechni' },
    recruitment: { text: 'Aquaris • Reclutamiento  ·  💙 by jhadechni' },
    reminders: { text: 'Aquaris • Recordatorios  ·  💙 by jhadechni' },
    suggestions: { text: 'Aquaris • Sugerencias  ·  💙 by jhadechni' },
    levels: { text: 'Aquaris • Niveles  ·  💙 by jhadechni' },
    community: { text: 'Aquaris • Comunidad  ·  💙 by jhadechni' },
    general: { text: 'Aquaris  ·  💙 by jhadechni' },
    polls: { text: 'Aquaris • Encuestas  ·  💙 by jhadechni' },
};
export const AQUARIS_COLORS = {
    info: COLORS.info,
    success: COLORS.success,
    warning: COLORS.warning,
    danger: COLORS.danger,
    neutral: COLORS.neutral,
    log: COLORS.blurple,
    system: COLORS.system,
    mute: COLORS.mute,
    timeout: COLORS.timeout,
    kick: COLORS.kick,
    shop: COLORS.info,
    recruitment: COLORS.info,
    reminders: COLORS.blurple,
    suggestions: COLORS.info,
    levels: COLORS.blurple,
    community: COLORS.info,
    polls: COLORS.blurple,
};
export function normalizeMessageReason(reason) {
    const trimmed = reason?.trim();
    return trimmed && trimmed.length > 0 ? trimmed : 'Sin motivo especificado';
}
export function buildAquarisEmbed(options) {
    const embed = new EmbedBuilder()
        .setColor(options.color ?? AQUARIS_COLORS.info)
        .setTitle(options.title ?? null)
        .setFooter(AQUARIS_FOOTERS[options.footer ?? 'general'])
        .setTimestamp(options.timestamp ?? new Date());
    if (options.description) {
        embed.setDescription(options.description);
    }
    if (options.fields && options.fields.length > 0) {
        embed.addFields(options.fields);
    }
    return embed;
}
export function buildAquarisNoticeEmbed(options) {
    return buildAquarisEmbed(options);
}
export function buildAquarisErrorEmbed(title, description) {
    return buildAquarisEmbed({
        title,
        description,
        color: AQUARIS_COLORS.danger,
        footer: 'system',
    });
}
export function buildAquarisUserFacingEmbed(options) {
    const details = [
        options.description ?? null,
        options.guildName ? `Servidor: **${options.guildName}**` : null,
        options.duration ? `Duración: **${options.duration}**` : null,
        options.reason ? `Motivo: ${options.reason}` : null,
    ].filter((line) => line !== null);
    const embedOptions = {
        title: options.title,
        description: details.join('\n'),
        color: options.color,
        footer: options.footer,
    };
    if (options.fields) {
        embedOptions.fields = options.fields;
    }
    return buildAquarisEmbed(embedOptions);
}
//# sourceMappingURL=message-ui.js.map