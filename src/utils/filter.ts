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

/**
 * Normaliza texto para evadir técnicas comunes de evasión del filtro:
 *  - Minúsculas
 *  - Elimina diacríticos/tildes (á→a, ñ→n, ü→u …)
 *  - Leet speak: 0→o, 3→e, 4→a, 1→i, @→a, $→s, 5→s, 7→t, |→i
 *  - Colapsa 3+ caracteres repetidos consecutivos: peeendejo → pendejo
 *  - Elimina separadores y no-letras (puntos, guiones, espacios …)
 */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')                   // separa base + diacrítico
    .replace(/[\u0300-\u036f]/g, '')    // elimina marcas diacríticas
    .replace(/[0]/g, 'o')
    .replace(/[3]/g, 'e')
    .replace(/[4]/g, 'a')
    .replace(/[1!|]/g, 'i')
    .replace(/[@]/g, 'a')
    .replace(/[\$5]/g, 's')
    .replace(/[7]/g, 't')
    .replace(/[+]/g, 't')
    .replace(/(.)\1{2,}/g, '$1')        // peeendejo → pendejo
    .replace(/[^a-z]/g, '');           // elimina cualquier no-letra
}

/**
 * Busca si el texto contiene alguna palabra baneada.
 *
 * Estrategia en dos capas para evitar falsos positivos (p. ej. "computadora"
 * conteniendo "puta") y al mismo tiempo capturar evasiones por separadores:
 *
 *  1. Coincidencia exacta por token: el texto se divide por espacios, cada token
 *     se normaliza (elimina separadores internos como puntos o guiones) y se
 *     compara exactamente con la palabra baneada.
 *     Captura: "puta", "p.u.t.a", "!puta!"
 *     No captura: "computadora" (token distinto a "puta")
 *
 *  2. Evasión con espacios: solo se unen tokens cortos (≤4 letras normalizadas)
 *     para detectar "p u t a" o "ca bron" sin que palabras largas legítimas
 *     generen falsos positivos.
 *
 * Devuelve la palabra original (sin normalizar) si hay coincidencia.
 */
export function findBannedWord(text: string, words: Set<string>): string | undefined {
  const tokens = text.split(/\s+/).filter(Boolean);
  const normalizedTokens = tokens.map(normalize);

  return [...words].find(w => {
    const nw = normalize(w);
    if (!nw) return false;

    // Capa 1: token completo = palabra baneada (evita falsos positivos)
    if (normalizedTokens.some(nt => nt === nw)) return true;

    // Capa 2: une solo tokens cortos para detectar evasión tipo "p u t a"
    const shortJoined = normalizedTokens.filter(nt => nt.length <= 4).join('');
    return shortJoined.includes(nw);
  });
}
