import { EmbedBuilder, type APIEmbedField } from 'discord.js';
import {
  AQUARIS_COLORS,
  buildAquarisEmbed,
  buildAquarisErrorEmbed,
  buildAquarisNoticeEmbed,
  type AquarisColor,
  type AquarisEmbedOptions,
} from './message-ui.js';

export const REMINDER_COLORS = {
  info: AQUARIS_COLORS.reminders,
  success: AQUARIS_COLORS.success,
  warning: AQUARIS_COLORS.warning,
  danger: AQUARIS_COLORS.danger,
  system: AQUARIS_COLORS.system,
} as const;

type ReminderColor = AquarisColor;

type ReminderNoticeOptions = {
  title: string;
  description?: string;
  color?: ReminderColor;
  fields?: APIEmbedField[];
};

export function buildReminderNoticeEmbed(options: ReminderNoticeOptions): EmbedBuilder {
  const embedOptions: AquarisEmbedOptions = {
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

export function buildReminderErrorEmbed(title: string, description: string): EmbedBuilder {
  return buildAquarisErrorEmbed(title, description);
}

export function buildReminderDmEmbed(title: string, description: string, color: ReminderColor = REMINDER_COLORS.warning): EmbedBuilder {
  return buildAquarisEmbed({
    title,
    description,
    color,
    footer: 'reminders',
  });
}

export function buildKitReminderListEmbed(params: {
  title?: string;
  lines: string[];
  color?: ReminderColor;
  footerHint?: string;
}): EmbedBuilder {
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
