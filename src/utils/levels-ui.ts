import type { APIEmbedField } from 'discord.js';
import { AQUARIS_COLORS, buildAquarisEmbed } from './message-ui.js';

export const LEVEL_COLORS = {
  profile: AQUARIS_COLORS.levels,
  ranking: AQUARIS_COLORS.warning,
  success: AQUARIS_COLORS.success,
  empty: AQUARIS_COLORS.system,
} as const;

type LevelProfileOptions = {
  userTag: string;
  displayName: string;
  avatarUrl: string;
  level: number;
  rank: number;
  xp: number;
  nextLevel: number;
  currentXp: number;
  requiredXp: number;
  progress: string;
  messageCount: number;
  voiceTime: string;
};

type LevelTopOptions = {
  title: string;
  lines: string[];
  guildName: string;
};

export function buildLevelProfileEmbed(options: LevelProfileOptions) {
  return buildAquarisEmbed({
    title: `Perfil de ${options.displayName}`,
    color: LEVEL_COLORS.profile,
    footer: 'levels',
    fields: [
      { name: 'Nivel', value: `**${options.level}**`, inline: true },
      { name: 'Ranking', value: `**#${options.rank}**`, inline: true },
      { name: 'XP total', value: options.xp.toLocaleString(), inline: true },
      {
        name: `Progreso al nivel ${options.nextLevel}`,
        value: `${options.progress}  ${options.currentXp.toLocaleString()} / ${options.requiredXp.toLocaleString()} XP`,
      },
      { name: 'Mensajes', value: options.messageCount.toLocaleString(), inline: true },
      { name: 'Tiempo en voz', value: options.voiceTime, inline: true },
    ],
  })
    .setAuthor({ name: options.userTag, iconURL: options.avatarUrl })
    .setThumbnail(options.avatarUrl);
}

export function buildLevelTopEmbed(options: LevelTopOptions) {
  return buildAquarisEmbed({
    title: options.title,
    description: options.lines.join('\n'),
    color: LEVEL_COLORS.ranking,
    footer: 'levels',
    fields: [{ name: 'Servidor', value: options.guildName, inline: true }],
  });
}

export function buildLevelEmptyEmbed() {
  return buildAquarisEmbed({
    title: 'Sin actividad registrada',
    description: 'Todavía no hay actividad suficiente para mostrar un ranking.',
    color: LEVEL_COLORS.empty,
    footer: 'levels',
  });
}

export function buildLevelUpEmbed(userId: string, level: number) {
  return buildAquarisEmbed({
    title: 'Subida de nivel',
    description: `<@${userId}> alcanzó el **nivel ${level}**.`,
    color: LEVEL_COLORS.success,
    footer: 'levels',
  });
}

export type LevelFields = APIEmbedField[];
