import { EmbedBuilder } from 'discord.js';
import { AQUARIS_COLORS, AQUARIS_FOOTERS, buildAquarisEmbed, buildAquarisErrorEmbed, buildAquarisNoticeEmbed, buildAquarisUserFacingEmbed, normalizeMessageReason, } from './message-ui.js';
export const RECRUITMENT_COLORS = {
    info: AQUARIS_COLORS.recruitment,
    success: AQUARIS_COLORS.success,
    warning: AQUARIS_COLORS.warning,
    danger: AQUARIS_COLORS.danger,
    system: AQUARIS_COLORS.system,
    log: AQUARIS_COLORS.log,
};
export function normalizeRecruitmentReason(reason) {
    return normalizeMessageReason(reason);
}
export function buildRecruitmentNoticeEmbed(options) {
    const embedOptions = {
        title: options.title,
        color: options.color ?? RECRUITMENT_COLORS.info,
        footer: options.footer ?? 'recruitment',
    };
    if (options.description) {
        embedOptions.description = options.description;
    }
    if (options.fields) {
        embedOptions.fields = options.fields;
    }
    return buildAquarisNoticeEmbed(embedOptions);
}
export function buildRecruitmentErrorEmbed(title, description) {
    return buildAquarisErrorEmbed(title, description);
}
export function buildRecruitmentUserMessageEmbed(options) {
    const embedOptions = {
        title: options.title,
        color: options.color ?? RECRUITMENT_COLORS.info,
        footer: 'recruitment',
    };
    if (options.description) {
        embedOptions.description = options.description;
    }
    if (options.guildName) {
        embedOptions.guildName = options.guildName;
    }
    if (options.reason) {
        embedOptions.reason = options.reason;
    }
    return buildAquarisUserFacingEmbed(embedOptions);
}
export function buildRecruitmentApplicationEmbed(options) {
    const embed = buildAquarisEmbed({
        title: '📋 Nueva solicitud de reclutamiento',
        description: `**<@${options.applicantId}>** ha solicitado unirse al clan Aquaris.`,
        color: RECRUITMENT_COLORS.info,
        footer: 'logsRecruitment',
        fields: [
            { name: 'Solicitante', value: `<@${options.applicantId}>\n\`${options.username}\``, inline: true },
            { name: 'Plataforma', value: options.platform, inline: true },
            { name: 'Edad', value: options.age, inline: true },
            { name: 'Rol / Especialidad', value: options.role, inline: true },
            { name: '¿Qué puedes aportar?', value: options.aportar },
            { name: '¿Disponibilidad horaria y país?', value: options.disponibilidad },
            { name: '¿Colaboras en proyectos comunitarios?', value: options.colaborar },
            ...(options.dudas.length > 0 ? [{ name: '¿Dudas sobre el clan?', value: options.dudas }] : []),
            { name: 'ID interno', value: `\`${options.ticketId}\``, inline: true },
        ],
    });
    if (options.avatarUrl) {
        embed.setThumbnail(options.avatarUrl);
    }
    return embed;
}
export function buildRecruitmentAcceptedApplicationEmbed(original, staffId) {
    return EmbedBuilder.from(original)
        .setColor(RECRUITMENT_COLORS.success)
        .setTitle('✅ Solicitud aceptada')
        .setFooter(AQUARIS_FOOTERS.logsRecruitment)
        .addFields({ name: 'Aceptado por', value: `<@${staffId}>`, inline: true });
}
export function buildRecruitmentRejectedApplicationEmbed(original, staffId, reason) {
    return EmbedBuilder.from(original)
        .setColor(RECRUITMENT_COLORS.danger)
        .setTitle('❌ Solicitud rechazada')
        .setFooter(AQUARIS_FOOTERS.logsRecruitment)
        .addFields({ name: 'Rechazado por', value: `<@${staffId}>`, inline: true }, { name: 'Motivo', value: reason });
}
export function buildRecruitmentStaleEmbed(event) {
    if (event.type === 'stale_open') {
        return buildAquarisEmbed({
            title: '⏰ Solicitud sin revisar',
            description: 'Hay una solicitud de ingreso sin revisar desde hace más de 48 horas.',
            color: RECRUITMENT_COLORS.warning,
            footer: 'logsRecruitment',
            fields: [
                { name: 'Solicitante', value: `<@${event.applicantId}>`, inline: true },
                { name: 'Tiempo abierta', value: `${event.hoursOpen}h`, inline: true },
                { name: 'Canal', value: event.channelId ? `<#${event.channelId}>` : 'Sin canal', inline: true },
                { name: 'Ticket', value: `\`${event.ticketId}\``, inline: true },
            ],
        });
    }
    return buildAquarisEmbed({
        title: '⏰ Entrevista sin progreso',
        description: 'Una entrevista lleva varios días abierta sin completar el registro.',
        color: RECRUITMENT_COLORS.warning,
        footer: 'logsRecruitment',
        fields: [
            { name: 'Solicitante', value: `<@${event.applicantId}>`, inline: true },
            { name: 'Tiempo en entrevista', value: `${event.daysOpen}d`, inline: true },
            { name: 'Canal', value: event.channelId ? `<#${event.channelId}>` : 'Sin canal', inline: true },
            { name: 'Ticket', value: `\`${event.ticketId}\``, inline: true },
        ],
    });
}
export function buildRecruitmentLogEmbed(event) {
    switch (event.type) {
        case 'accepted':
            return buildAquarisEmbed({
                title: '✅ Solicitud aceptada',
                color: RECRUITMENT_COLORS.success,
                footer: 'logsRecruitment',
                fields: [
                    { name: 'Solicitante', value: `<@${event.applicantId}>\nID: \`${event.applicantId}\``, inline: true },
                    { name: 'Aceptado por', value: `<@${event.staffId}>`, inline: true },
                    { name: 'Ticket', value: `\`${event.ticketId}\``, inline: true },
                ],
            });
        case 'rejected':
            return buildAquarisEmbed({
                title: '❌ Solicitud rechazada',
                color: RECRUITMENT_COLORS.danger,
                footer: 'logsRecruitment',
                fields: [
                    { name: 'Solicitante', value: `<@${event.applicantId}>\nID: \`${event.applicantId}\``, inline: true },
                    { name: 'Rechazado por', value: `<@${event.staffId}>`, inline: true },
                    { name: 'Ticket', value: `\`${event.ticketId}\``, inline: true },
                    { name: 'Motivo', value: event.reason },
                ],
            });
        case 'registered':
            return buildAquarisEmbed({
                title: '🎮 Jugador registrado en el roster',
                color: RECRUITMENT_COLORS.success,
                footer: 'logsRecruitment',
                fields: [
                    { name: 'Nick Minecraft', value: event.minecraftNick, inline: true },
                    { name: 'Discord', value: `<@${event.applicantId}>\n\`${event.discordUsername}\``, inline: true },
                    { name: 'Registrado por', value: `<@${event.staffId}>`, inline: true },
                ],
            });
    }
}
export function buildRecruitmentTicketWelcomeEmbed(userId) {
    return buildRecruitmentNoticeEmbed({
        title: '👋 Bienvenido a tu solicitud',
        description: `Hola <@${userId}>, tu solicitud fue enviada correctamente.\n\n` +
            'El staff revisará tu perfil y te responderá aquí. Puedes añadir más información o aclarar cualquier punto mientras esperas.',
        color: RECRUITMENT_COLORS.info,
    });
}
//# sourceMappingURL=recruitment-ui.js.map