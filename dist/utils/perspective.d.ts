/**
 * Analiza la toxicidad de un texto usando Perspective API (Google).
 * Devuelve un score 0-1, o null si se pasa el rate-limit o hay error.
 * Respeta el límite de ~1 QPS del tier gratuito descartando llamadas muy seguidas.
 */
export declare function analyzeToxicity(text: string, apiKey: string): Promise<number | null>;
//# sourceMappingURL=perspective.d.ts.map