import { EmbedBuilder } from 'discord.js';
import type { Message } from 'discord.js';
import { prisma } from '../database/prisma.js';

const BAR_LENGTH = 14;

function buildBar(pct: number): string {
  const filled = Math.round((pct / 100) * BAR_LENGTH);
  return '█'.repeat(filled) + '░'.repeat(BAR_LENGTH - filled);
}

export function buildSuggestionEmbed(
  content: string,
  userId: string,
  suggestionId: string,
  upCount = 0,
  downCount = 0,
): EmbedBuilder {
  const total = upCount + downCount;
  const upPct = total > 0 ? Math.round((upCount / total) * 100) : 0;
  const downPct = total > 0 ? 100 - upPct : 0;

  return new EmbedBuilder()
    .setColor(0x5865f2)
    .setTitle('💡 Sugerencia')
    .setDescription(content)
    .addFields(
      { name: 'Enviada por', value: `<@${userId}>`, inline: true },
      {
        name: 'Votación',
        value: total === 0
          ? '*Sin votos todavía*'
          : [
              `👍 **${upPct}%** \`${buildBar(upPct)}\` ${upCount}`,
              `👎 **${downPct}%** \`${buildBar(downPct)}\` ${downCount}`,
            ].join('\n'),
      },
    )
    .setFooter({ text: `ID: ${suggestionId}` })
    .setTimestamp();
}

export async function updateSuggestionVotes(message: Message): Promise<void> {
  const suggestion = await prisma.suggestion.findFirst({
    where: { messageId: message.id },
  });
  if (!suggestion) return;

  // El bot agrega su propia reacción al publicar, se descuenta 1 si existe
  const upRaw = message.reactions.cache.get('👍');
  const downRaw = message.reactions.cache.get('👎');
  const upCount = upRaw ? Math.max(0, upRaw.count - 1) : 0;
  const downCount = downRaw ? Math.max(0, downRaw.count - 1) : 0;

  const embed = buildSuggestionEmbed(
    suggestion.content,
    suggestion.userId,
    suggestion.id,
    upCount,
    downCount,
  );

  await message.edit({ embeds: [embed], components: [] });
}
