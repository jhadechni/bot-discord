/**
 * Constantes de UI compartidas — colores, labels de estado, formatters.
 * Todos los embeds del bot deben usar estas constantes para consistencia visual.
 */
export declare const COLORS: {
    readonly success: 5763719;
    readonly danger: 15548997;
    readonly warning: 16705372;
    readonly info: 3447003;
    readonly blurple: 5793266;
    readonly neutral: 10070709;
    readonly orange: 16753920;
    readonly mute: 16096779;
    readonly timeout: 16347926;
    readonly kick: 15105570;
    readonly system: 6583435;
};
export declare const ORDER_COLORS: Record<string, number>;
export declare const ORDER_LABELS: Record<string, string>;
/** Formatea un precio Decimal o number con separadores de miles en español. */
export declare function formatPrice(amount: {
    toString(): string;
} | number, currency?: string): string;
/** Formatea una fecha como DD/MM/YYYY HH:MM. */
export declare function formatDate(date: Date): string;
/** Línea horizontal visual para separar secciones en embeds. */
export declare const DIVIDER = "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500";
/** Footer estándar para embeds de la tienda. */
export declare const SHOP_FOOTER: {
    readonly text: "Aquaris • Tienda  ·  💙 by jhadechni";
};
//# sourceMappingURL=ui.d.ts.map