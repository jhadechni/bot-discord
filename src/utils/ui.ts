/**
 * Constantes de UI compartidas — colores, labels de estado, formatters.
 * Todos los embeds del bot deben usar estas constantes para consistencia visual.
 */

// ── Paleta de colores ─────────────────────────────────────────────────────────

export const COLORS = {
  success:   0x57f287,  // Verde — operación exitosa, pedido aceptado
  danger:    0xed4245,  // Rojo  — error, rechazo
  warning:   0xfee75c,  // Amarillo — atención, pedido pendiente
  info:      0x3498db,  // Azul Aquaris — información general
  blurple:   0x5865f2,  // Azul Discord — neutro, info, pedido entregado
  neutral:   0x99aab5,  // Gris — cancelado, inactivo
  orange:    0xffa500,  // Naranja — advertencia stock bajo, importación con errores
  mute:      0xf59e0b,  // Ámbar — mute
  timeout:   0xf97316,  // Naranja intenso — timeout
  kick:      0xe67e22,  // Naranja oscuro — kick
  system:    0x64748b,  // Slate — sistema
} as const;

// ── Estados de pedido ──────────────────────────────────────────────────────────

export const ORDER_COLORS: Record<string, number> = {
  pending:   COLORS.warning,
  accepted:  COLORS.success,
  rejected:  COLORS.danger,
  completed: COLORS.blurple,
  cancelled: COLORS.neutral,
};

export const ORDER_LABELS: Record<string, string> = {
  pending:   '🟡 Pendiente',
  accepted:  '🟢 Aceptado',
  rejected:  '🔴 Rechazado',
  completed: '🔵 Completado',
  cancelled: '⚫ Cancelado',
};

// ── Formatters ────────────────────────────────────────────────────────────────

/** Formatea un precio Decimal o number con separadores de miles en español. */
export function formatPrice(amount: { toString(): string } | number, currency = '$'): string {
  const num = typeof amount === 'number' ? amount : Number(amount.toString());
  return `${num.toLocaleString('es-ES')} ${currency}`;
}

/** Formatea una fecha como DD/MM/YYYY HH:MM. */
export function formatDate(date: Date): string {
  return date.toLocaleString('es-ES', {
    day:    '2-digit',
    month:  '2-digit',
    year:   'numeric',
    hour:   '2-digit',
    minute: '2-digit',
  });
}

/** Línea horizontal visual para separar secciones en embeds. */
export const DIVIDER = '─────────────────────────────────────';

/** Footer estándar para embeds de la tienda. */
export const SHOP_FOOTER = { text: 'Aquaris • Tienda  ·  💙 by jhadechni' } as const;
