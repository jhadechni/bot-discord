import { AQUARIS_COLORS, buildAquarisEmbed, buildAquarisUserFacingEmbed } from './message-ui.js';

const CONTENT_PREVIEW_LIMIT = 900;

export const AUTOMOD_COLORS = {
  filter: AQUARIS_COLORS.danger,
  spam: AQUARIS_COLORS.timeout,
  system: AQUARIS_COLORS.system,
} as const;

type AutomodLogOptions = {
  userId: string;
  userTag: string;
  channelId: string;
  content: string;
  logId: string;
};

type FilterLogOptions = AutomodLogOptions & {
  matched: string;
};

type ToxicityLogOptions = AutomodLogOptions & {
  score: number;
};

type SpamLogOptions = {
  userId: string;
  userTag: string;
  channelId: string;
  spamType: string;
  durationLabel: string;
  logId: string;
};

function previewContent(content: string): string {
  const trimmed = content.trim();
  if (trimmed.length === 0) {
    return 'Sin contenido textual.';
  }

  return trimmed.length > CONTENT_PREVIEW_LIMIT
    ? `${trimmed.slice(0, CONTENT_PREVIEW_LIMIT)}...`
    : trimmed;
}

export function buildAutomodFilterDmEmbed(guildName: string) {
  return buildAquarisUserFacingEmbed({
    title: 'Mensaje eliminado',
    description: 'Tu mensaje fue eliminado por contener una palabra no permitida.',
    guildName,
    color: AUTOMOD_COLORS.filter,
    footer: 'moderation',
  });
}

export function buildAutomodToxicityDmEmbed(guildName: string) {
  return buildAquarisUserFacingEmbed({
    title: 'Mensaje eliminado',
    description: 'Tu mensaje fue eliminado por contenido inapropiado.',
    guildName,
    color: AUTOMOD_COLORS.filter,
    footer: 'moderation',
  });
}

export function buildAutomodSpamDmEmbed(guildName: string, spamType: string, durationLabel: string) {
  return buildAquarisUserFacingEmbed({
    title: 'Silencio temporal',
    description: `Se aplicó un silencio automático por ${spamType}.`,
    guildName,
    duration: durationLabel,
    color: AUTOMOD_COLORS.spam,
    footer: 'moderation',
  });
}

export function buildAutomodFilterLogEmbed(options: FilterLogOptions) {
  return buildAquarisEmbed({
    title: 'Mensaje filtrado',
    color: AUTOMOD_COLORS.filter,
    footer: 'logsModeration',
    fields: [
      { name: 'Usuario', value: `<@${options.userId}> (${options.userTag})`, inline: true },
      { name: 'Canal', value: `<#${options.channelId}>`, inline: true },
      { name: 'Palabra detectada', value: `\`${options.matched}\``, inline: true },
      { name: 'Contenido', value: previewContent(options.content) },
      { name: 'ID Log', value: options.logId, inline: true },
    ],
  });
}

export function buildAutomodToxicityLogEmbed(options: ToxicityLogOptions) {
  return buildAquarisEmbed({
    title: 'Mensaje eliminado por IA',
    color: AUTOMOD_COLORS.filter,
    footer: 'logsModeration',
    fields: [
      { name: 'Usuario', value: `<@${options.userId}> (${options.userTag})`, inline: true },
      { name: 'Canal', value: `<#${options.channelId}>`, inline: true },
      { name: 'Toxicidad', value: `${(options.score * 100).toFixed(0)}%`, inline: true },
      { name: 'Contenido', value: previewContent(options.content) },
      { name: 'ID Log', value: options.logId, inline: true },
    ],
  });
}

export function buildAutomodSpamPublicEmbed(userId: string, spamType: string, durationLabel: string) {
  return buildAquarisEmbed({
    title: 'Silencio automático aplicado',
    description: `<@${userId}> fue silenciado temporalmente por ${spamType}.\nDuración: **${durationLabel}**.`,
    color: AUTOMOD_COLORS.spam,
    footer: 'moderation',
  });
}

export function buildAutomodSpamLogEmbed(options: SpamLogOptions) {
  return buildAquarisEmbed({
    title: 'Anti-spam activado',
    color: AUTOMOD_COLORS.spam,
    footer: 'logsModeration',
    fields: [
      { name: 'Usuario', value: `<@${options.userId}> (${options.userTag})`, inline: true },
      { name: 'Canal', value: `<#${options.channelId}>`, inline: true },
      { name: 'Tipo', value: options.spamType, inline: true },
      { name: 'Acción', value: `Timeout ${options.durationLabel} + mensajes eliminados` },
      { name: 'ID Log', value: options.logId, inline: true },
    ],
  });
}
