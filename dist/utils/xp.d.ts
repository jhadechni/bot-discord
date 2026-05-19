/**
 * XP / Level utilities
 *
 * Fórmula: totalXpForLevel(n) = n² × 100
 * → Nivel 1: 100 XP | Nivel 2: 400 XP | Nivel 5: 2 500 XP | Nivel 10: 10 000 XP
 *
 * Por mensaje: 15-25 XP (cooldown 60 s)
 * Por voz:     5 XP / minuto (sin muteo)
 */
/** XP total mínimo para haber alcanzado el nivel `n`. */
export declare function totalXpForLevel(level: number): number;
/** Calcula el nivel a partir del XP total acumulado. */
export declare function calcLevel(xp: number): number;
/** Progreso dentro del nivel actual. */
export declare function xpProgress(xp: number): {
    level: number;
    current: number;
    required: number;
};
/** XP aleatorio por mensaje (15–25). */
export declare function randomMessageXp(): number;
/** Barra de progreso visual. */
export declare function progressBar(current: number, required: number, length?: number): string;
/** Formatea minutos como "Xh Ym" o "Zm". */
export declare function formatVoiceTime(minutes: number): string;
//# sourceMappingURL=xp.d.ts.map