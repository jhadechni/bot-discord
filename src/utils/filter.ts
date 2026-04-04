import { prisma } from '../database/prisma.js';

const filterCache = new Map<string, { words: Set<string>; expiresAt: number }>();

export async function getFilteredWords(guildId: string): Promise<Set<string>> {
  const cached = filterCache.get(guildId);
  if (cached && cached.expiresAt > Date.now()) return cached.words;

  const records = await prisma.filterWord.findMany({ where: { guildId }, select: { word: true } });
  const words = new Set(records.map(r => r.word));
  filterCache.set(guildId, { words, expiresAt: Date.now() + 60_000 });
  return words;
}

export function invalidateFilterCache(guildId: string): void {
  filterCache.delete(guildId);
}

export function findBannedWord(text: string, words: Set<string>): string | undefined {
  const lower = text.toLowerCase();
  return [...words].find(w => lower.includes(w));
}
