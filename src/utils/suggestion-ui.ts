import { EmbedBuilder, type Message } from 'discord.js';
import { prisma } from '../database/prisma.js';
import {
  AQUARIS_COLORS,
  buildAquarisEmbed,
  buildAquarisErrorEmbed,
  buildAquarisNoticeEmbed,
  type AquarisColor,
  type AquarisEmbedOptions,
} from './message-ui.js';

const BAR_LENGTH = 14;

export const SUGGESTION_COLORS = {
  info: AQUARIS_COLORS.suggestions,
  success: AQUARIS_COLORS.success,
  warning: AQUARIS_COLORS.warning,
  danger: AQUARIS_COLORS.danger,
  review: AQUARIS_COLORS.warning,
} as const;

type SuggestionColor = AquarisColor;

function buildBar(pct: number): string {
  const filled = Math.round((pct / 100) * BAR_LENGTH);
  return '█'.repeat(filled) + '░'.repeat(BAR_LENGTH - filled);
}

export function buildSuggestionNoticeEmbed(options: {
  title: string;
  description?: string;
  color?: SuggestionColor;
}): EmbedBuilder {
  const embedOptions: AquarisEmbedOptions = {
    title: options.title,
    color: options.color ?? SUGGESTION_COLORS.info,
    footer: 'suggestions',
  };

  if (options.description) {
    embedOptions.description = options.description;
  }

  return buildAquarisNoticeEmbed(embedOptions);
}

export function buildSuggestionErrorEmbed(title: string, description: string): EmbedBuilder {
  return buildAquarisErrorEmbed(title, description);
}

export function buildSuggestionPublicEmbed(
  content: string,
  userId: string,
  upCount = 0,
  downCount = 0,
): EmbedBuilder {
  const total = upCount + downCount;
  const upPct = total > 0 ? Math.round((upCount / total) * 100) : 0;
  const downPct = total > 0 ? 100 - upPct : 0;

  return buildAquarisEmbed({
    title: 'Sugerencia',
    description: content,
    color: SUGGESTION_COLORS.info,
    footer: 'suggestions',
    fields: [
      { name: 'Enviada por', value: `<@${userId}>`, inline: true },
      {
        name: 'Votación',
        value: total === 0
          ? '*Sin votos todavía*'
          : [
              `👍 **${upPct}%** \`${buildBar(upPct)}\` ${upCount}`,
              `👎 **${downPct}%** \`${buildBar(downPct)}\` ${downCount}`,
            ].join('\n'),
      },
    ],
  });
}

export async function updateSuggestionVotes(message: Message): Promise<void> {
  const suggestion = await prisma.suggestion.findFirst({
    where: { messageId: message.id },
  });
  if (!suggestion) return;

  const upRaw = message.reactions.cache.get('👍');
  const downRaw = message.reactions.cache.get('👎');
  const upCount = upRaw ? Math.max(0, upRaw.count - 1) : 0;
  const downCount = downRaw ? Math.max(0, downRaw.count - 1) : 0;

  const embed = buildSuggestionPublicEmbed(
    suggestion.content,
    suggestion.userId,
    upCount,
    downCount,
  );

  await message.edit({ embeds: [embed], components: [] });
}
