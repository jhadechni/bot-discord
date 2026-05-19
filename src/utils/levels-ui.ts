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
  const sep = '─'.repeat(30);
  const description = [
    `⭐ Nivel **${options.level}**  ·  🏆 Rank **#${options.rank}**  ·  **${options.xp.toLocaleString()}** XP`,
    '',
    sep,
    `**→ Nivel ${options.nextLevel}**`,
    options.progress,
    `${options.currentXp.toLocaleString()} / ${options.requiredXp.toLocaleString()} XP`,
    sep,
    '',
    `💬 **${options.messageCount.toLocaleString()}** mensajes  ·  🎙️ **${options.voiceTime}** en voz`,
  ].join('\n');

  return buildAquarisEmbed({
    title: `🏅 Perfil de ${options.displayName}`,
    description,
    color: LEVEL_COLORS.profile,
    footer: 'levels',
  })
    .setAuthor({ name: options.userTag, iconURL: options.avatarUrl })
    .setThumbnail(options.avatarUrl);
}

export function buildLevelTopEmbed(options: LevelTopOptions) {
  const sep     = '─'.repeat(30);
  const podium  = options.lines.slice(0, 3);
  const rest    = options.lines.slice(3);
  const parts   = [
    `**${options.guildName}**`,
    '',
    ...podium,
    ...(rest.length > 0 ? [sep, ...rest] : []),
  ];

  return buildAquarisEmbed({
    title: options.title,
    description: parts.join('\n'),
    color: LEVEL_COLORS.profile,
    footer: 'levels',
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
    title: '🎉 Subida de nivel',
    description: `<@${userId}> alcanzó el **nivel ${level}**.`,
    color: LEVEL_COLORS.success,
    footer: 'levels',
  });
}

export type LevelFields = APIEmbedField[];
