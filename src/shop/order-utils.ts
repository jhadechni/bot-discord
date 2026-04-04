import {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} from 'discord.js';
import { prisma } from '../database/prisma.js';
import { ORDER_COLORS, ORDER_LABELS, formatPrice, SHOP_FOOTER } from '../utils/ui.js';

// ── Tipos ─────────────────────────────────────────────────────────────────────

export type OrderFull = NonNullable<Awaited<ReturnType<typeof getOrderFull>>>;

// ── Helpers de BD ─────────────────────────────────────────────────────────────

/** Carga un pedido completo con cliente e ítems para mostrar en embed. */
export async function getOrderFull(orderCode: string) {
  return prisma.shopOrder.findUnique({
    where:   { orderCode },
    include: {
      customer: true,
      items:    { include: { product: true } },
    },
  });
}

/** Genera un código único con formato AQ-XXXXXX. */
export async function generateOrderCode(): Promise<string> {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (let attempt = 0; attempt < 10; attempt++) {
    const suffix = Array.from({ length: 6 }, () =>
      chars[Math.floor(Math.random() * chars.length)],
    ).join('');
    const code = `AQ-${suffix}`;
    const existing = await prisma.shopOrder.findUnique({ where: { orderCode: code } });
    if (!existing) return code;
  }
  throw new Error('No se pudo generar un código de pedido único');
}

// ── Lógica de stock ───────────────────────────────────────────────────────────

/** Reserva los materiales necesarios para un pedido pendiente. */
export async function reserveOrderStock(
  orderId:       string,
  guildId:       string,
  performedById: string,
): Promise<void> {
  await prisma.$transaction(async tx => {
    const order = await tx.shopOrder.findUniqueOrThrow({
      where:   { id: orderId },
      include: {
        items: {
          include: {
            product: {
              include: {
                components: {
                  include: { material: { include: { inventory: true } } },
                },
              },
            },
          },
        },
      },
    });

    // Validación previa: suficiente stock disponible para todos los ítems
    for (const item of order.items) {
      for (const comp of item.product.components) {
        const needed    = comp.quantityRequired * item.quantity;
        const inv       = comp.material.inventory;
        if (!inv) throw new Error(`Sin inventario para ${comp.material.name}`);
        const available = inv.currentStock - inv.reservedStock;
        if (available < needed) {
          throw new Error(
            `Stock insuficiente de **${comp.material.name}**: ` +
            `necesario ${needed}, disponible ${available}`,
          );
        }
      }
    }

    // Reserva real
    for (const item of order.items) {
      for (const comp of item.product.components) {
        const needed = comp.quantityRequired * item.quantity;
        const inv    = comp.material.inventory!;
        await tx.shopInventory.update({
          where: { id: inv.id },
          data:  { reservedStock: { increment: needed } },
        });
        await tx.shopInventoryMovement.create({
          data: {
            guildId,
            materialId:     comp.materialId,
            movementType:   'reserve',
            quantity:       needed,
            reason:         `Pedido ${order.orderCode}`,
            relatedOrderId: order.id,
            performedById,
          },
        });
      }
      await tx.shopOrderItem.update({
        where: { id: item.id },
        data:  { reservedQuantity: item.quantity },
      });
    }
  });
}

/** Libera el stock reservado cuando un pedido se rechaza o cancela. */
export async function releaseOrderStock(
  orderId:       string,
  guildId:       string,
  performedById: string,
): Promise<void> {
  await prisma.$transaction(async tx => {
    const order = await tx.shopOrder.findUniqueOrThrow({
      where:   { id: orderId },
      include: {
        items: {
          include: {
            product: {
              include: {
                components: {
                  include: { material: { include: { inventory: true } } },
                },
              },
            },
          },
        },
      },
    });

    for (const item of order.items) {
      if (item.reservedQuantity === 0) continue;
      for (const comp of item.product.components) {
        const qty = comp.quantityRequired * item.reservedQuantity;
        const inv = comp.material.inventory!;
        await tx.shopInventory.update({
          where: { id: inv.id },
          data:  { reservedStock: { decrement: qty } },
        });
        await tx.shopInventoryMovement.create({
          data: {
            guildId,
            materialId:     comp.materialId,
            movementType:   'release',
            quantity:       qty,
            reason:         `Liberación pedido ${order.orderCode}`,
            relatedOrderId: order.id,
            performedById,
          },
        });
      }
      await tx.shopOrderItem.update({
        where: { id: item.id },
        data:  { reservedQuantity: 0 },
      });
    }
  });
}

/** Consume el stock cuando un pedido se cierra (entregado al cliente). */
export async function consumeOrderStock(
  orderId:       string,
  guildId:       string,
  performedById: string,
): Promise<void> {
  await prisma.$transaction(async tx => {
    const order = await tx.shopOrder.findUniqueOrThrow({
      where:   { id: orderId },
      include: {
        items: {
          include: {
            product: {
              include: {
                components: {
                  include: { material: { include: { inventory: true } } },
                },
              },
            },
          },
        },
      },
    });

    for (const item of order.items) {
      for (const comp of item.product.components) {
        const qty = comp.quantityRequired * item.quantity;
        const inv = comp.material.inventory!;
        await tx.shopInventory.update({
          where: { id: inv.id },
          data:  {
            currentStock:  { decrement: qty },
            reservedStock: { decrement: qty },
          },
        });
        await tx.shopInventoryMovement.create({
          data: {
            guildId,
            materialId:     comp.materialId,
            movementType:   'sale',
            quantity:       qty,
            reason:         `Venta pedido ${order.orderCode}`,
            relatedOrderId: order.id,
            performedById,
          },
        });
      }
      await tx.shopOrderItem.update({
        where: { id: item.id },
        data:  { deliveredQuantity: item.quantity, reservedQuantity: 0 },
      });
    }
  });
}

// ── Embeds y botones ──────────────────────────────────────────────────────────

export function buildOrderEmbed(order: OrderFull): EmbedBuilder {
  const color = ORDER_COLORS[order.status] ?? 0x99aab5;
  const label = ORDER_LABELS[order.status] ?? order.status;

  const itemLines = order.items.map(item => {
    const lineTotal = formatPrice(item.grossLineTotal);
    const unitStr   = formatPrice(item.unitPrice);
    const line = `**${item.product.name}** × ${item.quantity}  —  ${unitStr} c/u  →  **${lineTotal}**`;
    return item.notes ? `${line}\n  > 📝 ${item.notes}` : line;
  });

  const embed = new EmbedBuilder()
    .setTitle(`🛒 Pedido ${order.orderCode}`)
    .setColor(color)
    .addFields(
      { name: '👤 Cliente',   value: `<@${order.customer.discordUserId}>`, inline: true },
      { name: '📋 Estado',    value: label,                                 inline: true },
      { name: '\u200B',       value: '\u200B',                              inline: true },
      { name: '🛍️ Productos', value: itemLines.join('\n') || '—' },
      { name: '💰 Total',     value: `**${formatPrice(order.totalAmount)}**`, inline: true },
    )
    .setFooter(SHOP_FOOTER)
    .setTimestamp(order.createdAt);

  if (order.rejectionReason) {
    embed.addFields({ name: '❌ Motivo de rechazo', value: order.rejectionReason });
  }
  if (order.cancelReason) {
    embed.addFields({ name: '🚫 Motivo de cancelación', value: order.cancelReason });
  }

  return embed;
}

/** Botones para pedido pendiente (en canal de staff). */
export function buildPendingButtons(orderCode: string) {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`shop:accept:${orderCode}`)
      .setLabel('✅ Aceptar')
      .setStyle(ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId(`shop:reject:${orderCode}`)
      .setLabel('❌ Rechazar')
      .setStyle(ButtonStyle.Danger),
  );
}

/** Botones para pedido aceptado (en canal de staff). */
export function buildAcceptedButtons(orderCode: string) {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`shop:close:${orderCode}`)
      .setLabel('📦 Marcar entregado')
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId(`shop:cancel:${orderCode}`)
      .setLabel('🚫 Cancelar')
      .setStyle(ButtonStyle.Secondary),
  );
}
