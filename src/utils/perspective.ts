import { logger } from '../core/logger.js';

const PERSPECTIVE_URL = 'https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze';
const MIN_INTERVAL_MS = 1100; // ~1 QPS para el tier gratuito

let lastRequestTime = 0;

interface PerspectiveResponse {
  attributeScores: {
    TOXICITY?: { summaryScore: { value: number } };
    SEVERE_TOXICITY?: { summaryScore: { value: number } };
  };
}

/**
 * Analiza la toxicidad de un texto usando Perspective API (Google).
 * Devuelve un score 0-1, o null si se pasa el rate-limit o hay error.
 * Respeta el límite de ~1 QPS del tier gratuito descartando llamadas muy seguidas.
 */
export async function analyzeToxicity(text: string, apiKey: string): Promise<number | null> {
  if (text.length < 8) return null; // Ignorar mensajes muy cortos

  const now = Date.now();
  if (now - lastRequestTime < MIN_INTERVAL_MS) return null; // Rate-limit local
  lastRequestTime = now;

  try {
    const response = await fetch(`${PERSPECTIVE_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        comment: { text },
        languages: ['es'],
        requestedAttributes: { TOXICITY: {}, SEVERE_TOXICITY: {} },
        doNotStore: true,
      }),
      signal: AbortSignal.timeout(5_000),
    });

    if (!response.ok) {
      if (response.status === 429) logger.warn('[perspective] Rate limit alcanzado en la API');
      return null;
    }

    const data = await response.json() as PerspectiveResponse;
    const toxicity = data.attributeScores.TOXICITY?.summaryScore.value ?? 0;
    const severe = data.attributeScores.SEVERE_TOXICITY?.summaryScore.value ?? 0;
    return Math.max(toxicity, severe);
  } catch (err) {
    logger.warn({ err }, '[perspective] Error al analizar toxicidad');
    return null;
  }
}
