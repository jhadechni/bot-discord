import { EmbedBuilder, type APIEmbedField } from 'discord.js';
import { COLORS } from './ui.js';

export const AQUARIS_FOOTERS = {
  logsModeration: { text: 'Aquaris Logs • Moderación' },
  logsCommunity: { text: 'Aquaris Logs • Comunidad' },
  moderation: { text: 'Aquaris • Moderación' },
  system: { text: 'Aquaris • Sistema' },
  shop: { text: 'Aquaris • Tienda' },
  recruitment: { text: 'Aquaris • Reclutamiento' },
  reminders: { text: 'Aquaris • Recordatorios' },
  suggestions: { text: 'Aquaris • Sugerencias' },
  levels: { text: 'Aquaris • Niveles' },
  community: { text: 'Aquaris • Comunidad' },
  general: { text: 'Aquaris' },
} as const;

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
} as const;

export type AquarisFooterKey = keyof typeof AQUARIS_FOOTERS;
export type AquarisColor = (typeof AQUARIS_COLORS)[keyof typeof AQUARIS_COLORS];
export type AquarisModule =
  | 'moderation'
  | 'automod'
  | 'recruitment'
  | 'reminders'
  | 'suggestions'
  | 'levels'
  | 'community'
  | 'shop'
  | 'system'
  | 'fun';
export type AquarisMessageContext = 'public' | 'dm' | 'ephemeral' | 'log';
export type AquarisMessageIntent = 'info' | 'success' | 'warning' | 'error' | 'audit';

export type AquarisEmbedOptions = {
  title: string;
  description?: string | null;
  color?: AquarisColor;
  footer?: AquarisFooterKey;
  fields?: APIEmbedField[];
  timestamp?: Date;
};

export type AquarisUserFacingOptions = {
  title: string;
  color: AquarisColor;
  footer: AquarisFooterKey;
  reason?: string;
  guildName?: string;
  duration?: string;
  description?: string;
  fields?: APIEmbedField[];
};

export function normalizeMessageReason(reason: string | null): string {
  const trimmed = reason?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : 'Sin motivo especificado';
}

export function buildAquarisEmbed(options: AquarisEmbedOptions): EmbedBuilder {
  const embed = new EmbedBuilder()
    .setColor(options.color ?? AQUARIS_COLORS.info)
    .setTitle(options.title)
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

export function buildAquarisNoticeEmbed(options: AquarisEmbedOptions): EmbedBuilder {
  return buildAquarisEmbed(options);
}

export function buildAquarisErrorEmbed(title: string, description: string): EmbedBuilder {
  return buildAquarisEmbed({
    title,
    description,
    color: AQUARIS_COLORS.danger,
    footer: 'system',
  });
}

export function buildAquarisUserFacingEmbed(options: AquarisUserFacingOptions): EmbedBuilder {
  const details = [
    options.description ?? null,
    options.guildName ? `Servidor: **${options.guildName}**` : null,
    options.duration ? `Duración: **${options.duration}**` : null,
    options.reason ? `Motivo: ${options.reason}` : null,
  ].filter((line): line is string => line !== null);

  const embedOptions: AquarisEmbedOptions = {
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
