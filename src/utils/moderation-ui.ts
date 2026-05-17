import { EmbedBuilder, type APIEmbedField } from 'discord.js';
import { formatDate } from './ui.js';
import {
  AQUARIS_COLORS,
  AQUARIS_FOOTERS,
  buildAquarisEmbed,
  buildAquarisErrorEmbed,
  buildAquarisNoticeEmbed,
  normalizeMessageReason,
  type AquarisEmbedOptions,
  type AquarisColor,
} from './message-ui.js';

export const MODERATION_FOOTERS = {
  logs: AQUARIS_FOOTERS.logsModeration,
  moderation: AQUARIS_FOOTERS.moderation,
  system: AQUARIS_FOOTERS.system,
  shop: AQUARIS_FOOTERS.shop,
  recruitment: AQUARIS_FOOTERS.recruitment,
} as const;

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
} as const;

type EmbedColor = AquarisColor;

type ModerationLogEmbedOptions = {
  title: string;
  color: EmbedColor;
  targetId: string;
  moderatorId: string;
  reason: string;
  logId: string;
  targetTag?: string;
  duration?: string;
  createdAt?: Date;
};

type UserFacingModerationEmbedOptions = {
  title: string;
  color: EmbedColor;
  reason: string;
  guildName?: string;
  targetMention?: string;
  duration?: string;
  description?: string;
};

type StaffModerationEmbedOptions = {
  title: string;
  color?: EmbedColor;
  targetMention?: string;
  reason?: string;
  duration?: string;
  dmDelivered?: boolean;
  description?: string;
  fields?: APIEmbedField[];
};

type ModerationNoticeEmbedOptions = {
  title: string;
  description?: string;
  color?: EmbedColor;
  fields?: APIEmbedField[];
  footer?: keyof typeof MODERATION_FOOTERS;
};

export function normalizeModerationReason(reason: string | null): string {
  return normalizeMessageReason(reason);
}

export function buildModerationLogEmbed(options: ModerationLogEmbedOptions): EmbedBuilder {
  const userValue = options.targetTag
    ? `${options.targetTag}\n<@${options.targetId}>\nID: \`${options.targetId}\``
    : `<@${options.targetId}>\nID: \`${options.targetId}\``;

  const fields = [
    { name: 'Usuario', value: userValue, inline: true },
    { name: 'Moderador', value: `<@${options.moderatorId}>\nID: \`${options.moderatorId}\``, inline: true },
    { name: 'Fecha', value: formatDate(options.createdAt ?? new Date()), inline: true },
  ];

  if (options.duration) {
    fields.push({ name: 'Duración', value: options.duration, inline: true });
  }

  fields.push(
    { name: 'Motivo', value: options.reason, inline: false },
    { name: 'ID interno', value: `\`${options.logId}\``, inline: true },
  );

  return buildAquarisEmbed({
    title: options.title,
    color: options.color,
    footer: 'logsModeration',
    fields,
    timestamp: options.createdAt ?? new Date(),
  });
}

export function buildModerationUserDmEmbed(options: UserFacingModerationEmbedOptions): EmbedBuilder {
  const details = [
    options.guildName ? `Servidor: **${options.guildName}**` : null,
    options.duration ? `Duración: **${options.duration}**` : null,
    `Motivo: ${options.reason}`,
  ].filter((line): line is string => line !== null);

  return buildAquarisEmbed({
    title: options.title,
    description: details.join('\n'),
    color: options.color,
    footer: 'moderation',
  });
}

export function buildModerationPublicEmbed(options: UserFacingModerationEmbedOptions): EmbedBuilder {
  const description =
    options.description ??
    [
      options.targetMention ? `${options.targetMention} recibió una acción de moderación.` : null,
      options.duration ? `Duración: **${options.duration}**` : null,
    ].filter((line): line is string => line !== null).join('\n');

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

export function buildModerationStaffEmbed(options: StaffModerationEmbedOptions): EmbedBuilder {
  const embed = buildAquarisEmbed({
    title: options.title,
    description: options.description ?? (options.targetMention ? `Usuario: ${options.targetMention}` : null),
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
  if (options.dmDelivered !== undefined) {
    fields.push({
      name: 'MD',
      value: options.dmDelivered ? 'Entregado' : 'No entregado',
      inline: true,
    });
  }

  if (fields.length > 0) {
    embed.addFields(fields);
  }

  return embed;
}

export function buildModerationNoticeEmbed(options: ModerationNoticeEmbedOptions): EmbedBuilder {
  const embedOptions: AquarisEmbedOptions = {
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

export function buildModerationErrorEmbed(title: string, description: string): EmbedBuilder {
  return buildAquarisErrorEmbed(title, description);
}
