import { EmbedBuilder } from 'discord.js';
import { formatDate } from './ui.js';
import { AQUARIS_COLORS, AQUARIS_FOOTERS, buildAquarisEmbed, buildAquarisNoticeEmbed, normalizeMessageReason, } from './message-ui.js';
export const MODERATION_FOOTERS = {
    logs: AQUARIS_FOOTERS.logsModeration,
    moderation: AQUARIS_FOOTERS.moderation,
    system: AQUARIS_FOOTERS.system,
    shop: AQUARIS_FOOTERS.shop,
    recruitment: AQUARIS_FOOTERS.recruitment,
};
export const MODERATION_COLORS = {
    info: AQUARIS_COLORS.info,
    success: AQUARIS_COLORS.success,
    warning: AQUARIS_COLORS.warning,
    mute: AQUARIS_COLORS.mute,
    timeout: AQUARIS_COLORS.timeout,
    kick: AQUARIS_COLORS.kick,
    danger: AQUARIS_COLORS.danger,
    log: AQUARIS_COLORS.log,
    system: AQUARIS_COLORS.system,
};
export function normalizeModerationReason(reason) {
    return normalizeMessageReason(reason);
}
export function buildModerationLogEmbed(options) {
    const userValue = `<@${options.targetId}>`;
    const fields = [
        { name: 'Usuario', value: userValue, inline: true },
        { name: 'Moderador', value: `<@${options.moderatorId}>`, inline: true },
    ];
    fields.push({ name: 'Motivo', value: options.reason, inline: false });
    if (options.duration) {
        fields.push({ name: 'Duración', value: options.duration, inline: false });
    }
    return buildAquarisEmbed({
        title: options.title,
        color: options.color,
        footer: 'logsModeration',
        fields,
        timestamp: options.createdAt ?? new Date(),
    });
}
export function buildModerationUserDmEmbed(options) {
    const label = options.actionLabel ?? 'una acción de moderación';
    const firstLine = options.description ?? `Se ha registrado **${label}** en tu historial.`;
    const details = [
        firstLine,
        options.guildName ? `Servidor: **${options.guildName}**` : null,
        options.warnProgress ? `Advertencias: **${options.warnProgress.current} / ${options.warnProgress.limit}**` : null,
        options.duration ? `Duración: **${options.duration}**` : null,
        `**Motivo**: ${options.reason}`,
    ].filter((line) => line !== null);
    return buildAquarisEmbed({
        title: options.title,
        description: details.join('\n'),
        color: options.color,
        footer: 'moderation',
    });
}
export function buildModerationPublicEmbed(options) {
    const description = options.description ??
        [
            options.targetMention ? `${options.targetMention} recibió una acción de moderación.` : null,
            options.duration ? `Duración: **${options.duration}**` : null,
        ].filter((line) => line !== null).join('\n');
    const embed = buildAquarisEmbed({
        title: options.title,
        description,
        color: options.color,
        footer: 'moderation',
    });
    if (options.reason) {
        embed.addFields({ name: 'Motivo', value: options.reason });
    }
    return embed;
}
export function buildModerationStaffEmbed(options) {
    const embed = buildAquarisEmbed({
        title: options.title,
        description: options.description ?? (options.targetMention ? `Se registró una advertencia para: ${options.targetMention}` : null),
        color: options.color ?? MODERATION_COLORS.success,
        footer: 'moderation',
    });
    const fields = [...(options.fields ?? [])];
    if (options.duration) {
        fields.push({ name: 'Duración', value: options.duration, inline: true });
    }
    if (options.reason) {
        fields.push({ name: 'Motivo', value: options.reason, inline: false });
    }
    if (fields.length > 0) {
        embed.addFields(fields);
    }
    return embed;
}
export function buildModerationNoticeEmbed(options) {
    const embedOptions = {
        title: options.title,
        color: options.color ?? MODERATION_COLORS.info,
        footer: options.footer === 'logs' ? 'logsModeration' : options.footer ?? 'moderation',
    };
    if (options.description) {
        embedOptions.description = options.description;
    }
    if (options.fields) {
        embedOptions.fields = options.fields;
    }
    return buildAquarisNoticeEmbed(embedOptions);
}
export function buildModerationErrorEmbed(title, description) {
    return buildAquarisEmbed({
        title,
        description,
        color: MODERATION_COLORS.danger,
        footer: 'moderation',
    });
}
//# sourceMappingURL=moderation-ui.js.map