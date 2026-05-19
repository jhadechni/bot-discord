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
export function totalXpForLevel(level) {
    return level * level * 100;
}
/** Calcula el nivel a partir del XP total acumulado. */
export function calcLevel(xp) {
    return Math.floor(Math.sqrt(xp / 100));
}
/** Progreso dentro del nivel actual. */
export function xpProgress(xp) {
    const level = calcLevel(xp);
    const base = totalXpForLevel(level);
    const next = totalXpForLevel(level + 1);
    return { level, current: xp - base, required: next - base };
}
/** XP aleatorio por mensaje (15–25). */
export function randomMessageXp() {
    return Math.floor(Math.random() * 11) + 15;
}
/** Barra de progreso visual. */
export function progressBar(current, required, length = 14) {
    const ratio = required > 0 ? current / required : 0;
    const filled = Math.max(0, Math.min(length, Math.round(ratio * length)));
    return `${'▰'.repeat(filled)}${'▱'.repeat(length - filled)}`;
}
/** Formatea minutos como "Xh Ym" o "Zm". */
export function formatVoiceTime(minutes) {
    if (minutes < 1)
        return '—';
    if (minutes < 60)
        return `${minutes}m`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
}
//# sourceMappingURL=xp.js.map