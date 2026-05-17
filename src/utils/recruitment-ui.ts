import { EmbedBuilder, type APIEmbedField } from 'discord.js';
import {
  AQUARIS_COLORS,
  buildAquarisEmbed,
  buildAquarisErrorEmbed,
  buildAquarisNoticeEmbed,
  buildAquarisUserFacingEmbed,
  normalizeMessageReason,
  type AquarisColor,
  type AquarisEmbedOptions,
  type AquarisUserFacingOptions,
} from './message-ui.js';

export const RECRUITMENT_COLORS = {
  info: AQUARIS_COLORS.recruitment,
  success: AQUARIS_COLORS.success,
  warning: AQUARIS_COLORS.warning,
  danger: AQUARIS_COLORS.danger,
  system: AQUARIS_COLORS.system,
  log: AQUARIS_COLORS.log,
} as const;

type RecruitmentColor = AquarisColor;

type RecruitmentApplicationEmbedOptions = {
  applicantId: string;
  username: string;
  role: string;
  age: string;
  experience: string;
  availability: string;
  contribution: string;
  ticketId: string;
  avatarUrl?: string;
};

type RecruitmentNoticeOptions = {
  title: string;
  description?: string;
  color?: RecruitmentColor;
  fields?: APIEmbedField[];
};

type RecruitmentUserMessageOptions = {
  title: string;
  description?: string;
  guildName?: string;
  reason?: string;
  color?: RecruitmentColor;
};

export function normalizeRecruitmentReason(reason: string | null): string {
  return normalizeMessageReason(reason);
}

export function buildRecruitmentNoticeEmbed(options: RecruitmentNoticeOptions): EmbedBuilder {
  const embedOptions: AquarisEmbedOptions = {
    title: options.title,
    color: options.color ?? RECRUITMENT_COLORS.info,
    footer: 'recruitment',
  };

  if (options.description) {
    embedOptions.description = options.description;
  }

  if (options.fields) {
    embedOptions.fields = options.fields;
  }

  return buildAquarisNoticeEmbed(embedOptions);
}

export function buildRecruitmentErrorEmbed(title: string, description: string): EmbedBuilder {
  return buildAquarisErrorEmbed(title, description);
}

export function buildRecruitmentUserMessageEmbed(options: RecruitmentUserMessageOptions): EmbedBuilder {
  const embedOptions: AquarisUserFacingOptions = {
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

export function buildRecruitmentApplicationEmbed(options: RecruitmentApplicationEmbedOptions): EmbedBuilder {
  const embed = buildAquarisEmbed({
    title: 'Nueva solicitud de reclutamiento',
    description: `**<@${options.applicantId}>** ha solicitado unirse al clan Aquaris.`,
    color: RECRUITMENT_COLORS.info,
    footer: 'recruitment',
    fields: [
      { name: 'Solicitante', value: `<@${options.applicantId}>\n\`${options.username}\``, inline: true },
      { name: 'Rol solicitado', value: options.role, inline: true },
      { name: 'Edad', value: options.age, inline: true },
      { name: 'Experiencia en Minecraft', value: options.experience },
      { name: 'Disponibilidad semanal', value: options.availability },
      { name: 'Aportación al clan', value: options.contribution },
      { name: 'ID interno', value: `\`${options.ticketId}\``, inline: true },
    ],
  });

  if (options.avatarUrl) {
    embed.setThumbnail(options.avatarUrl);
  }

  return embed;
}

export function buildRecruitmentTicketWelcomeEmbed(userId: string): EmbedBuilder {
  return buildRecruitmentNoticeEmbed({
    title: 'Bienvenido a tu solicitud',
    description:
      `Hola <@${userId}>, tu solicitud fue enviada correctamente.\n\n` +
      'El staff revisará tu perfil y te responderá aquí. Puedes añadir más información o aclarar cualquier punto mientras esperas.',
    color: RECRUITMENT_COLORS.info,
  });
}
