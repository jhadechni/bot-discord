import { AQUARIS_COLORS, buildAquarisEmbed, buildAquarisErrorEmbed } from './message-ui.js';
export const FUN_COLORS = {
    info: AQUARIS_COLORS.system,
    success: AQUARIS_COLORS.success,
    warning: AQUARIS_COLORS.timeout,
};
export function buildFunNoticeEmbed(title, description, color = FUN_COLORS.info) {
    return buildAquarisEmbed({
        title,
        description,
        color,
        footer: 'system',
    });
}
export function buildFunErrorEmbed(title, description) {
    return buildAquarisErrorEmbed(title, description);
}
//# sourceMappingURL=fun-ui.js.map