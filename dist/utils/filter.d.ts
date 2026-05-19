export declare function getFilteredWords(guildId: string): Promise<Set<string>>;
export declare function invalidateFilterCache(guildId: string): void;
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
export declare function findBannedWord(text: string, words: Set<string>): string | undefined;
//# sourceMappingURL=filter.d.ts.map