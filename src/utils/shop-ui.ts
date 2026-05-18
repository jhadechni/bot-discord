import type { APIEmbedField } from 'discord.js';
import { AQUARIS_COLORS, buildAquarisEmbed, type AquarisColor } from './message-ui.js';
import { formatPrice } from './ui.js';

export const SHOP_COLORS = {
  info: AQUARIS_COLORS.shop,
  success: AQUARIS_COLORS.success,
  warning: AQUARIS_COLORS.warning,
  danger: AQUARIS_COLORS.danger,
  neutral: AQUARIS_COLORS.neutral,
  stock: AQUARIS_COLORS.log,
} as const;

type ShopNoticeOptions = {
  title: string;
  description: string;
  color?: AquarisColor;
  fields?: APIEmbedField[];
};

type OrderReceivedOptions = {
  orderCode: string;
  productLabel: string;
  totalAmount: { toString(): string } | number;
  isFullyAvailable: boolean;
  discountAmount?: { toString(): string } | number;
  notes?: string | null;
};

type ActiveOrder = {
  createdAt: Date;
  customer: { discordUserId: string };
  items: Array<{ product: { name: string }; quantity: number }>;
  orderCode: string;
  status: string;
  totalAmount: { toString(): string } | number;
};

type InventoryRecord = {
  currentStock: number;
  minStockAlert: number;
  reservedStock: number;
  material: {
    baseUnit: string;
    name: string;
    stackSize: number;
  };
};

type ShopStatsOptions = {
  acceptedCount: number;
  averageOrder: number;
  pendingCount: number;
  periodLabel: string;
  salesCount: number;
  topBuyers: Array<{ name: string; total: number }>;
  topProducts: Array<{ name: string; quantity: number }>;
  totalRevenue: number;
};

export function buildShopNoticeEmbed(options: ShopNoticeOptions) {
  const embedOptions = {
    title: options.title,
    description: options.description,
    color: options.color ?? SHOP_COLORS.info,
    footer: 'shop',
  } as const;

  return buildAquarisEmbed(options.fields ? { ...embedOptions, fields: options.fields } : embedOptions);
}

export function buildShopErrorEmbed(title: string, description: string) {
  return buildShopNoticeEmbed({
    title,
    description,
    color: SHOP_COLORS.danger,
  });
}

export function buildOrderReceivedEmbed(options: OrderReceivedOptions) {
  const fields: APIEmbedField[] = [
    { name: 'Producto', value: options.productLabel, inline: true },
    { name: 'Total', value: `**${formatPrice(options.totalAmount)}**`, inline: true },
    { name: 'Estado', value: 'En revisión del staff', inline: true },
  ];

  if (options.discountAmount && Number(options.discountAmount.toString()) > 0) {
    fields.push({
      name: 'Descuentos',
      value: `-${formatPrice(options.discountAmount)}`,
      inline: true,
    });
  }

  if (options.notes) {
    fields.push({ name: 'Notas', value: options.notes });
  }

  return buildAquarisEmbed({
    title: 'Pedido recibido',
    description: options.isFullyAvailable
      ? `Tu pedido **${options.orderCode}** fue recibido y quedó pendiente de revisión por el staff.`
      : `Tu pedido **${options.orderCode}** fue recibido. El staff revisará disponibilidad y te avisará cuando haya novedades.`,
    color: SHOP_COLORS.warning,
    footer: 'shop',
    fields,
  });
}

export function buildActiveOrdersEmbed(orders: ActiveOrder[]) {
  const pending = orders.filter(order => order.status === 'pending');
  const accepted = orders.filter(order => order.status === 'accepted');
  const embed = buildAquarisEmbed({
    title: 'Pedidos activos',
    description:
      `Pendientes: **${pending.length}**` +
      `  ·  Aceptados: **${accepted.length}**`,
    color: SHOP_COLORS.stock,
    footer: 'shop',
  });

  const addOrderField = (order: ActiveOrder) => {
    const items = order.items.map(item => `${item.product.name} x${item.quantity}`).join(', ');
    const ts = `<t:${Math.floor(order.createdAt.getTime() / 1000)}:R>`;
    embed.addFields({
      name: `${order.status === 'pending' ? 'Pendiente' : 'Aceptado'} · ${order.orderCode}`,
      value: `<@${order.customer.discordUserId}>  ·  ${items}  ·  **${formatPrice(order.totalAmount)}**\n${ts}`,
    });
  };

  if (pending.length > 0) {
    embed.addFields({ name: 'Pendientes', value: '\u200B' });
    pending.forEach(addOrderField);
  }

  if (accepted.length > 0) {
    embed.addFields({ name: 'Aceptados', value: '\u200B' });
    accepted.forEach(addOrderField);
  }

  return embed;
}

export function buildInventoryEmbed(inventories: InventoryRecord[]) {
  const embed = buildAquarisEmbed({
    title: 'Inventario de materiales',
    description: `Mostrando **${Math.min(inventories.length, 25)}** de **${inventories.length}** materiales.`,
    color: SHOP_COLORS.stock,
    footer: 'shop',
  });

  for (const inv of inventories.slice(0, 25)) {
    const available = inv.currentStock - inv.reservedStock;
    const lowStock = inv.minStockAlert > 0 && available <= inv.minStockAlert;
    embed.addFields({
      name: `${inv.material.name}${lowStock ? ' · Stock bajo' : ''}`,
      value: [
        `Total: **${inv.currentStock}** ${inv.material.baseUnit}`,
        `Stack max: ${inv.material.stackSize}`,
        `Reservado: ${inv.reservedStock}`,
        `Disponible: **${available}**`,
        inv.minStockAlert > 0 ? `Alerta: < ${inv.minStockAlert}` : '',
      ].filter(Boolean).join('  ·  '),
    });
  }

  return embed;
}

export function buildLowStockEmbed(inventories: InventoryRecord[]) {
  return buildAquarisEmbed({
    title: 'Stock bajo',
    description: `Hay **${inventories.length}** material${inventories.length === 1 ? '' : 'es'} por debajo del umbral.`,
    color: SHOP_COLORS.warning,
    footer: 'shop',
    fields: inventories.slice(0, 25).map(inv => {
      const available = inv.currentStock - inv.reservedStock;
      return {
        name: inv.material.name,
        value: `Disponible: **${available}** / Mínimo: ${inv.minStockAlert}`,
        inline: true,
      };
    }),
  });
}

export function buildShopStatsEmbed(options: ShopStatsOptions) {
  const fmt = (value: number) =>
    value.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

  const fields: APIEmbedField[] = [
    { name: 'Ingresos', value: `**${fmt(options.totalRevenue)} $**`, inline: true },
    { name: 'Pedidos entregados', value: `**${options.salesCount}**`, inline: true },
    {
      name: 'Promedio por pedido',
      value: options.salesCount > 0 ? `**${fmt(options.averageOrder)} $**` : 'Sin ventas',
      inline: true,
    },
  ];

  if (options.topProducts.length > 0) {
    fields.push({
      name: 'Top productos',
      value: options.topProducts.map((item, index) => `${index + 1}. **${item.name}** - ${item.quantity}`).join('\n'),
    });
  }

  if (options.topBuyers.length > 0) {
    fields.push({
      name: 'Top compradores',
      value: options.topBuyers.map((item, index) => `${index + 1}. **${item.name}** - ${fmt(item.total)} $`).join('\n'),
    });
  }

  fields.push({
    name: 'Pedidos activos ahora',
    value: `Pendientes: **${options.pendingCount}**  ·  Aceptados: **${options.acceptedCount}**`,
  });

  return buildAquarisEmbed({
    title: 'Estadísticas de tienda',
    description: `Periodo: **${options.periodLabel}**`,
    color: SHOP_COLORS.stock,
    footer: 'shop',
    fields,
  });
}
