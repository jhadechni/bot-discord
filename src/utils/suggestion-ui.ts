import { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } from 'discord.js';
import {
  AQUARIS_COLORS,
  buildAquarisErrorEmbed,
  buildAquarisNoticeEmbed,
  type AquarisColor,
  type AquarisEmbedOptions,
} from './message-ui.js';

export const SUGGESTION_COLORS = {
  info: AQUARIS_COLORS.suggestions,
  success: AQUARIS_COLORS.success,
  warning: AQUARIS_COLORS.warning,
  danger: AQUARIS_COLORS.danger,
} as const;

type SuggestionColor = AquarisColor;

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

type SuggestionPublicEmbedOptions = {
  content: string;
  userId: string;
  displayName: string;
  avatarUrl?: string | null;
  suggestionId: string;
  upCount?: number;
  downCount?: number;
};

export function buildSuggestionPublicEmbed(options: SuggestionPublicEmbedOptions): EmbedBuilder {
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
    .addFields(
      { name: '👍 Votos a favor', value: `${upCount}` },
      { name: '👎 Votos en contra', value: `${downCount}` },
    )
    .setFooter({
      text: `Recuerda que aunque una sugerencia alcance muchos votos, no siempre se podrán implementar. · ID: ${shortId}`,
    })
    .setTimestamp();

  if (avatarUrl) {
    embed.setThumbnail(avatarUrl);
  }

  return embed;
}

export function buildSuggestionVoteButtons(
  suggestionId: string,
  upCount: number,
  downCount: number,
): ActionRowBuilder<ButtonBuilder> {
  const total = upCount + downCount;
  const upPct = total > 0 ? Math.round((upCount / total) * 100) : null;
  const downPct = upPct !== null ? 100 - upPct : null;

  const upLabel = upPct !== null ? `👍  ${upPct}%` : '👍';
  const downLabel = downPct !== null ? `👎  ${downPct}%` : '👎';

  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`suggest:up:${suggestionId}`)
      .setLabel(upLabel)
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId(`suggest:down:${suggestionId}`)
      .setLabel(downLabel)
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId(`suggest:debate:${suggestionId}`)
      .setLabel('💬 Debatir')
      .setStyle(ButtonStyle.Secondary),
  );
}
