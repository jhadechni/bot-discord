import { EmbedBuilder } from 'discord.js';
import { COLORS, formatDate } from './ui.js';

export const MODERATION_FOOTERS = {
  logs: { text: 'Aquaris Logs • Moderación' },
  moderation: { text: 'Aquaris • Moderación' },
  system: { text: 'Aquaris • Sistema' },
  shop: { text: 'Aquaris • Tienda' },
  recruitment: { text: 'Aquaris • Reclutamiento' },
} as const;

export const MODERATION_COLORS = {
  info: COLORS.info,
  success: COLORS.success,
  warning: COLORS.warning,
  mute: COLORS.mute,
  timeout: COLORS.timeout,
  kick: COLORS.kick,
  danger: COLORS.danger,
  log: COLORS.blurple,
  system: COLORS.system,
} as const;

type EmbedColor = (typeof MODERATION_COLORS)[keyof typeof MODERATION_COLORS];

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
  targetMention: string;
  reason?: string;
  duration?: string;
  dmDelivered?: boolean;
};

export function normalizeModerationReason(reason: string | null): string {
  const trimmed = reason?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : 'Sin motivo especificado';
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

  return new EmbedBuilder()
    .setColor(options.color)
    .setTitle(options.title)
    .addFields(fields)
    .setFooter(MODERATION_FOOTERS.logs)
    .setTimestamp(options.createdAt ?? new Date());
}

export function buildModerationUserDmEmbed(options: UserFacingModerationEmbedOptions): EmbedBuilder {
  const details = [
    options.guildName ? `Servidor: **${options.guildName}**` : null,
    options.duration ? `Duración: **${options.duration}**` : null,
    `Motivo: ${options.reason}`,
  ].filter((line): line is string => line !== null);

  return new EmbedBuilder()
    .setColor(options.color)
    .setTitle(options.title)
    .setDescription(details.join('\n'))
    .setFooter(MODERATION_FOOTERS.moderation)
    .setTimestamp();
}

export function buildModerationPublicEmbed(options: UserFacingModerationEmbedOptions): EmbedBuilder {
  const description =
    options.description ??
    [
      options.targetMention ? `${options.targetMention} recibió una acción de moderación.` : null,
      options.duration ? `Duración: **${options.duration}**` : null,
    ].filter((line): line is string => line !== null).join('\n');

  const embed = new EmbedBuilder()
    .setColor(options.color)
    .setTitle(options.title)
    .setDescription(description)
    .setFooter(MODERATION_FOOTERS.moderation)
    .setTimestamp();

  if (options.reason) {
    embed.addFields({ name: 'Motivo', value: options.reason });
  }

  return embed;
}

export function buildModerationStaffEmbed(options: StaffModerationEmbedOptions): EmbedBuilder {
  const embed = new EmbedBuilder()
    .setColor(options.color ?? MODERATION_COLORS.success)
    .setTitle(options.title)
    .setDescription(`Usuario: ${options.targetMention}`)
    .setFooter(MODERATION_FOOTERS.moderation)
    .setTimestamp();

  const fields = [];
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

export function buildModerationErrorEmbed(title: string, description: string): EmbedBuilder {
  return new EmbedBuilder()
    .setColor(MODERATION_COLORS.danger)
    .setTitle(title)
    .setDescription(description)
    .setFooter(MODERATION_FOOTERS.system)
    .setTimestamp();
}
