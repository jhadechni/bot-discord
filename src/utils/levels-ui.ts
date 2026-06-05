import { EmbedBuilder } from 'discord.js';
import type { APIEmbedField } from 'discord.js';
import { AQUARIS_COLORS, AQUARIS_FOOTERS, buildAquarisEmbed } from './message-ui.js';

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

export type TopEntry = {
  rank: number;
  name: string;
  avatarUrl: string | null;
  statLine: string;
  level: number;
};

type TopEmbedOptions = {
  title: string;
  entries: TopEntry[];
  guildName: string;
  selfEntry?: TopEntry | null;
  isClosed?: boolean;
};

const MEDALS = ['🥇', '🥈', '🥉'];

export function buildLevelProfileEmbed(options: LevelProfileOptions) {
  const xpRestantes = options.requiredXp - options.currentXp;

  return new EmbedBuilder()
    .setTitle(options.displayName)
    .setDescription('Resumen de actividad dentro de **Aquaris**.')
    .setColor(0x3498db)
    .setAuthor({ name: 'Perfil de actividad', iconURL: options.avatarUrl })
    .setThumbnail(options.avatarUrl)
    .setFooter(AQUARIS_FOOTERS.community)
    .setTimestamp()
    .addFields(
      {
        name: '🏅 Rango',
        value: `**Nivel ${options.level}**\n#${options.rank} en XP global`,
        inline: true,
      },
      {
        name: '✨ Siguiente nivel',
        value: `**Nivel ${options.nextLevel}**\n${xpRestantes.toLocaleString()} XP restantes`,
        inline: true,
      },
      {
        name: '📈 Progreso',
        value: `${options.progress}\n**${options.currentXp.toLocaleString()} / ${options.requiredXp.toLocaleString()} XP**`,
        inline: false,
      },
      {
        name: '💬 Mensajes',
        value: `**${options.messageCount.toLocaleString()}** enviados`,
        inline: true,
      },
      {
        name: '🎙️ Voz',
        value: `**${options.voiceTime}** acumuladas`,
        inline: true,
      },
      {
        name: '🌊 Estado',
        value: 'Miembro activo de la comunidad',
        inline: true,
      },
    );
}

export function buildTopEmbed(options: TopEmbedOptions): EmbedBuilder {
  const top3 = options.entries.slice(0, 3);
  const rest = options.entries.slice(3);
  const top1 = options.entries[0];

  const podiumLines = top3.map((e, i) => {
    const winner = i === 0 && options.isClosed ? '👑  ' : '';
    const levelStr = e.level > 0 ? `  ·  Nivel **${e.level}**` : '';
    return `${MEDALS[e.rank - 1]}  ${winner}**${e.name}**\n> ${e.statLine}${levelStr}`;
  });

  const sep = `\n${'─'.repeat(30)}\n`;

  const restLines = rest.map(e => {
    const rankStr = String(e.rank).padStart(2, ' ');
    return `\`${rankStr}.\`  ${e.name}  —  ${e.statLine}  ·  Nv. ${e.level}`;
  });

  const selfLines = options.selfEntry
    ? [
        sep,
        `📍  **Tu posición**`,
        `\`${String(options.selfEntry.rank).padStart(2, ' ')}.\`  ${options.selfEntry.name}  —  ${options.selfEntry.statLine}  ·  Nv. ${options.selfEntry.level}`,
      ]
    : [];

  const description = [
    ...podiumLines,
    ...(restLines.length > 0 ? [sep, ...restLines] : []),
    ...selfLines,
  ].join('\n');

  const embed = new EmbedBuilder()
    .setTitle(`🏆  ${options.title}`)
    .setDescription(description)
    .setColor(0xFFD700)
    .setFooter(AQUARIS_FOOTERS.levels)
    .setTimestamp();

  if (top1?.avatarUrl) embed.setThumbnail(top1.avatarUrl);

  return embed;
}

export function buildLevelEmptyEmbed(description?: string) {
  return buildAquarisEmbed({
    title: 'Sin actividad registrada',
    description: description ?? 'Todavía no hay actividad suficiente para mostrar un ranking.',
    color: LEVEL_COLORS.empty,
    footer: 'levels',
  });
}

export function buildLevelUpEmbed(userId: string, level: number) {
  return buildAquarisEmbed({
    title: '<:levelup:1506694906503233556>  **Subida de nivel**',
    description:
      `<@${userId}> acaba de subir al **nivel ${level}**.\n\n` +
      `-# ✨ La actividad en Aquaris también deja huella. <:LogoDiscord:1506669476035432638>`,
    color: LEVEL_COLORS.success,
    footer: 'levels',
  });
}

export type LevelFields = APIEmbedField[];
