/** Convierte un string como "1h30m", "2d", "45m" en minutos. Devuelve null si no se pudo parsear. */
export function parseTime(input: string): number | null {
  const regex = /(\d+)\s*([dhm])/gi;
  let minutes = 0;
  let matched = false;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    matched = true;
    const n = parseInt(match[1] ?? '0', 10);
    const unit = (match[2] ?? '').toLowerCase();
    if (unit === 'd') minutes += n * 1440;
    else if (unit === 'h') minutes += n * 60;
    else if (unit === 'm') minutes += n;
  }

  return matched ? minutes : null;
}

/** Formatea minutos como "1d 2h 30m". */
export function formatTime(minutes: number): string {
  const d = Math.floor(minutes / 1440);
  const h = Math.floor((minutes % 1440) / 60);
  const m = minutes % 60;
  const parts: string[] = [];
  if (d > 0) parts.push(`${d}d`);
  if (h > 0) parts.push(`${h}h`);
  if (m > 0) parts.push(`${m}m`);
  return parts.length > 0 ? parts.join(' ') : '0m';
}
