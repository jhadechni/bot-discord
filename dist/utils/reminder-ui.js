import { EmbedBuilder } from 'discord.js';
import { AQUARIS_COLORS, buildAquarisEmbed, buildAquarisErrorEmbed, buildAquarisNoticeEmbed, } from './message-ui.js';
export const REMINDER_COLORS = {
    info: AQUARIS_COLORS.reminders,
    success: AQUARIS_COLORS.success,
    warning: AQUARIS_COLORS.warning,
    danger: AQUARIS_COLORS.danger,
    system: AQUARIS_COLORS.system,
};
export function buildReminderNoticeEmbed(options) {
    const embedOptions = {
        title: options.title,
        color: options.color ?? REMINDER_COLORS.info,
        footer: 'reminders',
    };
    if (options.description) {
        embedOptions.description = options.description;
    }
    if (options.fields) {
        embedOptions.fields = options.fields;
    }
    return buildAquarisNoticeEmbed(embedOptions);
}
export function buildReminderErrorEmbed(title, description) {
    return buildAquarisErrorEmbed(title, description);
}
export function buildReminderDmEmbed(title, description, color = REMINDER_COLORS.warning) {
    return buildAquarisEmbed({
        title,
        description,
        color,
        footer: 'reminders',
    });
}
export function buildKitReminderListEmbed(params) {
    const description = params.lines.length > 0 ? params.lines.join('\n') : 'No hay recordatorios para mostrar.';
    const embed = buildReminderNoticeEmbed({
        title: params.title ?? 'Recordatorios de kits',
        description,
        color: params.color ?? REMINDER_COLORS.info,
    });
    if (params.footerHint) {
        embed.setFooter({ text: `Aquaris • Recordatorios · ${params.footerHint}  ·  💙 by jhadechni` });
    }
    return embed;
}
//# sourceMappingURL=reminder-ui.js.map