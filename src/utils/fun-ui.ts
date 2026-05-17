import { AQUARIS_COLORS, buildAquarisEmbed, buildAquarisErrorEmbed, type AquarisColor } from './message-ui.js';

export const FUN_COLORS = {
  info: AQUARIS_COLORS.system,
  success: AQUARIS_COLORS.success,
  warning: AQUARIS_COLORS.timeout,
} as const;

export function buildFunNoticeEmbed(title: string, description: string, color: AquarisColor = FUN_COLORS.info) {
  return buildAquarisEmbed({
    title,
    description,
    color,
    footer: 'system',
  });
}

export function buildFunErrorEmbed(title: string, description: string) {
  return buildAquarisErrorEmbed(title, description);
}
