import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, } from 'discord.js';
import { Prisma } from '../generated/prisma/client.js';
import { prisma } from '../database/prisma.js';
import { calculateOrderPricing } from './discounts.js';
import { buildProductContentsLines, buildProductContentsSummary } from './product-contents.js';
import { hasProductInventoryDefinition, normalizeStackSize } from './quantities.js';
import { buildShopGuildWhere } from './scope.js';
import { COLORS, ORDER_COLORS, ORDER_LABELS, formatPrice, SHOP_FOOTER } from '../utils/ui.js';
function shouldBypassInventoryForZeroStock(inventory) {
    return (inventory?.currentStock ?? 0) === 0;
}
function formatQuantityBreakdown(quantity, stackSize) {
    const normalizedStackSize = normalizeStackSize(stackSize);
    const doubleChestSize = normalizedStackSize * 54;
    const chestSize = normalizedStackSize * 27;
    let remaining = Math.max(0, quantity);
    const doubleChests = Math.floor(remaining / doubleChestSize);
    remaining -= doubleChests * doubleChestSize;
    const chests = Math.floor(remaining / chestSize);
    remaining -= chests * chestSize;
    const stacks = Math.floor(remaining / normalizedStackSize);
    remaining -= stacks * normalizedStackSize;
    const units = remaining;
    const parts = [];
    if (doubleChests > 0) {
        parts.push(`${doubleChests.toLocaleString('es-ES')} ${doubleChests === 1 ? 'cofre doble' : 'cofres dobles'}`);
    }
    if (chests > 0) {
        parts.push(`${chests.toLocaleString('es-ES')} ${chests === 1 ? 'cofre' : 'cofres'}`);
    }
    if (stacks > 0) {
        parts.push(`${stacks.toLocaleString('es-ES')} ${stacks === 1 ? 'stack' : 'stacks'}`);
    }
    if (units > 0 || parts.length === 0) {
        parts.push(`${units.toLocaleString('es-ES')} ${units === 1 ? 'unidad' : 'unidades'}`);
    }
    if (parts.length === 1)
        return parts[0] ?? '0 unidades';
    if (parts.length === 2)
        return `${parts[0]} y ${parts[1]}`;
    const last = parts.pop();
    return `${parts.join(', ')} y ${last}`;
}
function formatStockQuantity(quantity, stackSize) {
    return formatQuantityBreakdown(quantity, stackSize);
}
export function formatOrderStockStatusLine(status) {
    return [
        `• **${status.materialName}**`,
        `  Falta: ${formatStockQuantity(status.shortfallQuantity, status.stackSize)}`,
        `  Necesario: ${formatStockQuantity(status.requiredQuantity, status.stackSize)}`,
        `  Disponible: ${formatStockQuantity(status.availableStock, status.stackSize)}`,
    ].join('\n');
}
function resolveProductComponents(product) {
    if (!product.baseMaterialId || !product.baseMaterial || !product.presentationQuantity) {
        return product.components;
    }
    if (product.components.some(component => component.materialId === product.baseMaterialId)) {
        return product.components;
    }
    return [
        {
            materialId: product.baseMaterialId,
            quantityRequired: product.presentationQuantity,
            material: product.baseMaterial,
        },
        ...product.components,
    ];
}
// ── Helpers de BD ─────────────────────────────────────────────────────────────
/** Carga un pedido completo con cliente e ítems para mostrar en embed. */
export async function getOrderFull(orderCode) {
    return prisma.shopOrder.findUnique({
        where: { orderCode },
        include: {
            appliedDiscounts: {
                orderBy: { appliedAt: 'asc' },
            },
            customer: true,
            surcharges: {
                orderBy: { createdAt: 'asc' },
            },
            items: {
                include: {
                    appliedDiscounts: {
                        orderBy: { appliedAt: 'asc' },
                    },
                    product: {
                        include: {
                            components: {
                                include: {
                                    material: {
                                        select: {
                                            name: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    });
}
/** Agrega un recargo al pedido y recalcula el total. */
export async function addSurchargeToOrder(orderCode, label, isPercent, rate) {
    const order = await prisma.shopOrder.findUnique({ where: { orderCode } });
    if (!order)
        throw new Error('Pedido no encontrado');
    const base = new Prisma.Decimal(order.subtotalAmount);
    const amount = isPercent
        ? base.mul(rate).div(100).toDecimalPlaces(2)
        : new Prisma.Decimal(rate).toDecimalPlaces(2);
    const newSurcharges = new Prisma.Decimal(order.surchargesAmount).add(amount);
    const newTotal = base
        .sub(order.totalDiscountAmount)
        .add(newSurcharges)
        .toDecimalPlaces(2);
    await prisma.$transaction([
        prisma.shopOrderSurcharge.create({
            data: {
                orderId: order.id,
                label,
                isPercent,
                rate: isPercent ? new Prisma.Decimal(rate) : null,
                amount,
            },
        }),
        prisma.shopOrder.update({
            where: { orderCode },
            data: { surchargesAmount: newSurcharges, totalAmount: newTotal },
        }),
    ]);
}
/** Genera un código único con formato AQ-XXXXXX. */
export async function generateOrderCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let attempt = 0; attempt < 10; attempt++) {
        const suffix = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
        const code = `AQ-${suffix}`;
        const existing = await prisma.shopOrder.findUnique({ where: { orderCode: code } });
        if (!existing)
            return code;
    }
    throw new Error('No se pudo generar un código de pedido único');
}
/** Crea un pedido pendiente congelando precio y descuentos al momento de crear la orden. */
export async function createPendingOrder(params) {
    const { customerUserId, guildId, items, staffChannelId = null, source = 'direct' } = params;
    if (items.length === 0) {
        throw new Error('No se puede crear un pedido sin productos.');
    }
    const orderCode = await generateOrderCode();
    const products = await prisma.shopProduct.findMany({
        where: {
            ...buildShopGuildWhere(guildId),
            id: { in: items.map(item => item.productId) },
        },
        include: {
            baseMaterial: true,
            components: true,
            prices: { where: { validTo: null }, take: 1 },
        },
    });
    const productById = new Map(products.map(product => [product.id, product]));
    const pricingInput = items.map(item => {
        const product = productById.get(item.productId);
        if (!product || !product.isActive) {
            throw new Error('Uno de los productos del pedido ya no está disponible.');
        }
        if (!hasProductInventoryDefinition(product)) {
            throw new Error(`**${product.name}** no tiene una definición de inventario configurada.`);
        }
        const activePrice = product.prices[0];
        if (!activePrice) {
            throw new Error(`**${product.name}** no tiene precio configurado.`);
        }
        return {
            notes: item.notes,
            productId: item.productId,
            quantity: item.quantity,
            unitPrice: new Prisma.Decimal(activePrice.price),
        };
    });
    const pricing = await calculateOrderPricing(guildId, pricingInput);
    return prisma.$transaction(async (tx) => {
        const order = await tx.shopOrder.create({
            data: {
                guildId,
                orderCode,
                customerUserId,
                staffChannelId,
                status: 'pending',
                source,
                subtotalAmount: pricing.subtotalAmount,
                totalDiscountAmount: pricing.totalDiscountAmount,
                totalAmount: pricing.totalAmount,
            },
        });
        const createdItems = [];
        for (const item of pricing.items) {
            const createdItem = await tx.shopOrderItem.create({
                data: {
                    orderId: order.id,
                    productId: item.productId,
                    quantity: item.quantity,
                    unitPrice: item.unitPrice,
                    grossLineTotal: item.grossLineTotal,
                    netLineTotal: item.netLineTotal,
                    notes: item.notes,
                },
            });
            createdItems.push(createdItem);
        }
        for (const discount of pricing.orderDiscounts) {
            await tx.shopAppliedDiscount.create({
                data: {
                    appliedByUserId: discount.appliedByUserId,
                    discountAmount: discount.discountAmount,
                    discountPolicyId: discount.discountPolicyId,
                    discountType: discount.discountType,
                    discountValue: discount.discountValue,
                    orderId: order.id,
                    reason: discount.reason,
                    scope: discount.scope,
                },
            });
        }
        for (const item of pricing.items) {
            for (const discount of item.itemDiscounts) {
                const targetItem = createdItems[discount.orderItemIndex ?? -1];
                if (!targetItem)
                    continue;
                await tx.shopAppliedDiscount.create({
                    data: {
                        appliedByUserId: discount.appliedByUserId,
                        discountAmount: discount.discountAmount,
                        discountPolicyId: discount.discountPolicyId,
                        discountType: discount.discountType,
                        discountValue: discount.discountValue,
                        orderId: order.id,
                        orderItemId: targetItem.id,
                        reason: discount.reason,
                        scope: discount.scope,
                    },
                });
            }
        }
        await tx.shopOrderEvent.create({
            data: {
                orderId: order.id,
                eventType: 'order_created',
                newStatus: 'pending',
                performedById: customerUserId,
            },
        });
        return order;
    });
}
/** Calcula el estado actual de stock para un pedido pendiente sin reservar inventario. */
export async function getOrderStockAssessment(orderId) {
    const order = await prisma.shopOrder.findUniqueOrThrow({
        where: { id: orderId },
        include: {
            items: {
                include: {
                    product: {
                        include: {
                            baseMaterial: { include: { inventory: true } },
                            components: {
                                include: {
                                    material: { include: { inventory: true } },
                                },
                            },
                        },
                    },
                },
            },
        },
    });
    const requirements = new Map();
    for (const item of order.items) {
        for (const component of resolveProductComponents(item.product)) {
            const inventory = component.material.inventory;
            const bypassInventory = shouldBypassInventoryForZeroStock(inventory);
            const currentStock = inventory?.currentStock ?? 0;
            const reservedStock = inventory?.reservedStock ?? 0;
            const availableStock = currentStock - reservedStock;
            const requiredQuantity = component.quantityRequired * item.quantity;
            const existing = requirements.get(component.materialId);
            if (existing) {
                existing.requiredQuantity += requiredQuantity;
                existing.shortfallQuantity = shouldBypassInventoryForZeroStock({ currentStock: existing.currentStock })
                    ? 0
                    : Math.max(0, existing.requiredQuantity - existing.availableStock);
                continue;
            }
            requirements.set(component.materialId, {
                availableStock,
                currentStock,
                materialId: component.materialId,
                materialName: component.material.name,
                requiredQuantity,
                reservedStock,
                stackSize: component.material.stackSize,
                shortfallQuantity: bypassInventory ? 0 : Math.max(0, requiredQuantity - availableStock),
            });
        }
    }
    const values = [...requirements.values()].sort((left, right) => right.shortfallQuantity - left.shortfallQuantity || left.materialName.localeCompare(right.materialName, 'es'));
    return {
        isFullyAvailable: values.every(value => value.shortfallQuantity === 0),
        requirements: values,
        shortages: values.filter(value => value.shortfallQuantity > 0),
    };
}
function buildStockStatusValue(stockAssessment) {
    if (stockAssessment.isFullyAvailable) {
        return 'Stock suficiente para completar el pedido en este momento.';
    }
    return [
        'Falta stock para reservar el pedido completo en este momento.',
        ...stockAssessment.shortages.slice(0, 6).map(formatOrderStockStatusLine),
    ].join('\n');
}
function getCustomerOrderDescription(order) {
    switch (order.status) {
        case 'pending':
            return 'Tu pedido fue recibido y está en revisión por el staff.';
        case 'accepted':
            return 'Tu pedido fue aceptado y el staff está preparando la entrega.';
        case 'completed':
            return 'Tu pedido fue completado.';
        case 'rejected':
            return 'Tu pedido no pudo ser aceptado.';
        case 'cancelled':
            return 'Tu pedido fue cancelado.';
        default:
            return 'Tu pedido está siendo gestionado por el staff.';
    }
}
function getCustomerNextStep(order) {
    switch (order.status) {
        case 'pending':
            return 'Te avisaremos cuando el staff revise el pedido y haya una actualización.';
        case 'accepted':
            return 'El staff continuará con la preparación y te avisará cuando corresponda.';
        case 'completed':
            return 'Si necesitas soporte, comparte tu código de pedido con el staff.';
        case 'rejected':
        case 'cancelled':
            return 'Si necesitas más información, contacta al staff indicando tu código de pedido.';
        default:
            return 'Consulta de nuevo más tarde si aún no ves cambios.';
    }
}
// ── Lógica de stock ───────────────────────────────────────────────────────────
/** Reserva los materiales necesarios para un pedido pendiente. */
export async function reserveOrderStock(orderId, guildId, performedById) {
    return prisma.$transaction(async (tx) => {
        const order = await tx.shopOrder.findUniqueOrThrow({
            where: { id: orderId },
            include: {
                items: {
                    include: {
                        product: {
                            include: {
                                baseMaterial: { include: { inventory: true } },
                                components: {
                                    include: { material: { include: { inventory: true } } },
                                },
                            },
                        },
                    },
                },
            },
        });
        let didReserve = false;
        // Validación previa: suficiente stock disponible para lo que falte por reservar
        for (const item of order.items) {
            const unitsToReserve = item.quantity - item.reservedQuantity;
            if (unitsToReserve <= 0)
                continue;
            for (const comp of resolveProductComponents(item.product)) {
                const needed = comp.quantityRequired * unitsToReserve;
                const inv = comp.material.inventory;
                if (!inv)
                    throw new Error(`Sin inventario para ${comp.material.name}`);
                if (shouldBypassInventoryForZeroStock(inv))
                    continue;
                const available = inv.currentStock - inv.reservedStock;
                if (available < needed) {
                    throw new Error(`Stock insuficiente de **${comp.material.name}**.`);
                }
            }
        }
        // Reserva real
        for (const item of order.items) {
            const unitsToReserve = item.quantity - item.reservedQuantity;
            if (unitsToReserve <= 0)
                continue;
            for (const comp of resolveProductComponents(item.product)) {
                const needed = comp.quantityRequired * unitsToReserve;
                if (needed === 0)
                    continue;
                const inv = comp.material.inventory;
                if (shouldBypassInventoryForZeroStock(inv))
                    continue;
                await tx.shopInventory.update({
                    where: { id: inv.id },
                    data: { reservedStock: { increment: needed } },
                });
                await tx.shopInventoryMovement.create({
                    data: {
                        guildId,
                        materialId: comp.materialId,
                        movementType: 'reserve',
                        quantity: needed,
                        reason: `Pedido ${order.orderCode}`,
                        relatedOrderId: order.id,
                        performedById,
                    },
                });
                didReserve = true;
            }
            await tx.shopOrderItem.update({
                where: { id: item.id },
                data: { reservedQuantity: item.quantity },
            });
        }
        return didReserve;
    });
}
/** Libera el stock reservado cuando un pedido se rechaza o cancela. */
export async function releaseOrderStock(orderId, guildId, performedById) {
    await prisma.$transaction(async (tx) => {
        const order = await tx.shopOrder.findUniqueOrThrow({
            where: { id: orderId },
            include: {
                items: {
                    include: {
                        product: {
                            include: {
                                baseMaterial: { include: { inventory: true } },
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
            if (item.reservedQuantity === 0)
                continue;
            for (const comp of resolveProductComponents(item.product)) {
                const qty = comp.quantityRequired * item.reservedQuantity;
                const inv = comp.material.inventory;
                await tx.shopInventory.update({
                    where: { id: inv.id },
                    data: { reservedStock: { decrement: qty } },
                });
                await tx.shopInventoryMovement.create({
                    data: {
                        guildId,
                        materialId: comp.materialId,
                        movementType: 'release',
                        quantity: qty,
                        reason: `Liberación pedido ${order.orderCode}`,
                        relatedOrderId: order.id,
                        performedById,
                    },
                });
            }
            await tx.shopOrderItem.update({
                where: { id: item.id },
                data: { reservedQuantity: 0 },
            });
        }
    });
}
/** Reserva lo faltante y consume el stock cuando un pedido se cierra (entregado al cliente). */
export async function consumeOrderStock(orderId, guildId, performedById) {
    return prisma.$transaction(async (tx) => {
        const order = await tx.shopOrder.findUniqueOrThrow({
            where: { id: orderId },
            include: {
                items: {
                    include: {
                        product: {
                            include: {
                                baseMaterial: { include: { inventory: true } },
                                components: {
                                    include: { material: { include: { inventory: true } } },
                                },
                            },
                        },
                    },
                },
            },
        });
        let didReserve = false;
        for (const item of order.items) {
            const unitsToReserve = item.quantity - item.reservedQuantity;
            if (unitsToReserve <= 0)
                continue;
            for (const comp of resolveProductComponents(item.product)) {
                const needed = comp.quantityRequired * unitsToReserve;
                const inv = comp.material.inventory;
                if (!inv)
                    throw new Error(`Sin inventario para ${comp.material.name}`);
                if (shouldBypassInventoryForZeroStock(inv))
                    continue;
                const available = inv.currentStock - inv.reservedStock;
                if (available < needed) {
                    throw new Error(`Stock insuficiente de **${comp.material.name}**.`);
                }
            }
        }
        for (const item of order.items) {
            const unitsToReserve = item.quantity - item.reservedQuantity;
            if (unitsToReserve > 0) {
                for (const comp of resolveProductComponents(item.product)) {
                    const needed = comp.quantityRequired * unitsToReserve;
                    if (needed === 0)
                        continue;
                    if (shouldBypassInventoryForZeroStock(comp.material.inventory))
                        continue;
                    await tx.shopInventory.update({
                        where: { id: comp.material.inventory.id },
                        data: { reservedStock: { increment: needed } },
                    });
                    await tx.shopInventoryMovement.create({
                        data: {
                            guildId,
                            materialId: comp.materialId,
                            movementType: 'reserve',
                            quantity: needed,
                            reason: `Pedido ${order.orderCode}`,
                            relatedOrderId: order.id,
                            performedById,
                        },
                    });
                    didReserve = true;
                }
                await tx.shopOrderItem.update({
                    where: { id: item.id },
                    data: { reservedQuantity: item.quantity },
                });
            }
            for (const comp of resolveProductComponents(item.product)) {
                const qty = comp.quantityRequired * item.quantity;
                if (qty === 0)
                    continue;
                if (shouldBypassInventoryForZeroStock(comp.material.inventory))
                    continue;
                await tx.shopInventory.update({
                    where: { id: comp.material.inventory.id },
                    data: {
                        currentStock: { decrement: qty },
                        reservedStock: { decrement: qty },
                    },
                });
                await tx.shopInventoryMovement.create({
                    data: {
                        guildId,
                        materialId: comp.materialId,
                        movementType: 'sale',
                        quantity: qty,
                        reason: `Venta pedido ${order.orderCode}`,
                        relatedOrderId: order.id,
                        performedById,
                    },
                });
            }
            await tx.shopOrderItem.update({
                where: { id: item.id },
                data: { deliveredQuantity: item.quantity, reservedQuantity: 0 },
            });
        }
        return didReserve;
    });
}
// ── Embeds y botones ──────────────────────────────────────────────────────────
export function buildOrderEmbed(order, stockAssessment) {
    const color = ORDER_COLORS[order.status] ?? COLORS.neutral;
    const label = ORDER_LABELS[order.status] ?? order.status;
    const itemLines = order.items.map(item => {
        const lineTotal = formatPrice(item.grossLineTotal);
        const unitStr = formatPrice(item.unitPrice);
        const namePart = item.product.variantLabel
            ? `${item.product.name} · *${item.product.variantLabel}*`
            : item.product.name;
        const line = `**${namePart}** × ${item.quantity}  —  ${unitStr} c/u  →  **${lineTotal}**`;
        const itemDiscountTotal = item.appliedDiscounts.reduce((sum, discount) => sum.add(discount.discountAmount), new Prisma.Decimal(0));
        const extraLines = [];
        if (itemDiscountTotal.comparedTo(0) > 0) {
            extraLines.push(`  > 🧾 Descuento línea: -${formatPrice(itemDiscountTotal)}  ·  Neto: **${formatPrice(item.netLineTotal)}**`);
        }
        if (item.notes) {
            extraLines.push(`  > 📝 ${item.notes}`);
        }
        const contentsLines = buildProductContentsLines(item.product, 5);
        if (contentsLines.length > 0) {
            extraLines.push(`  > 🎁 Trae:\n  > ${contentsLines.join('\n  > ')}`);
        }
        return extraLines.length > 0 ? `${line}\n${extraLines.join('\n')}` : line;
    });
    const orderDiscountLines = order.appliedDiscounts
        .filter(discount => discount.scope === 'order')
        .map(discount => `• ${discount.reason ?? 'Descuento'}: -${formatPrice(discount.discountAmount)}`);
    const embed = new EmbedBuilder()
        .setTitle(`Pedido ${order.orderCode}`)
        .setColor(color)
        .addFields({ name: 'Cliente', value: `<@${order.customer.discordUserId}>`, inline: true }, { name: 'Estado', value: label, inline: true }, { name: '\u200B', value: '\u200B', inline: true }, { name: 'Productos', value: itemLines.join('\n') || 'Sin productos' }, { name: 'Subtotal', value: `**${formatPrice(order.subtotalAmount)}**`, inline: true }, { name: 'Descuentos', value: `**-${formatPrice(order.totalDiscountAmount)}**`, inline: true }, { name: 'Total', value: `**${formatPrice(order.totalAmount)}**`, inline: true })
        .setFooter(SHOP_FOOTER)
        .setTimestamp(order.createdAt);
    if (orderDiscountLines.length > 0) {
        embed.addFields({ name: 'Descuentos del pedido', value: orderDiscountLines.join('\n') });
    }
    if (order.surcharges.length > 0) {
        const surchargeLines = order.surcharges.map(s => {
            const rateStr = s.isPercent && s.rate != null ? ` (${s.rate}%)` : '';
            return `• ${s.label}${rateStr}: +${formatPrice(s.amount)}`;
        });
        embed.addFields({ name: 'Servicios adicionales', value: surchargeLines.join('\n') });
    }
    if ((order.status === 'pending' || order.status === 'accepted') && stockAssessment) {
        embed.addFields({
            name: stockAssessment.isFullyAvailable ? 'Stock actual' : 'Preparación',
            value: buildStockStatusValue(stockAssessment),
        });
    }
    if (order.rejectionReason) {
        embed.addFields({ name: 'Motivo de rechazo', value: order.rejectionReason });
    }
    if (order.cancelReason) {
        embed.addFields({ name: 'Motivo de cancelación', value: order.cancelReason });
    }
    return embed;
}
export function buildCustomerOrderEmbed(order) {
    const color = ORDER_COLORS[order.status] ?? COLORS.neutral;
    const label = ORDER_LABELS[order.status] ?? order.status;
    const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);
    const productLines = order.items.map(item => {
        const namePart = item.product.variantLabel
            ? `${item.product.name} · *${item.product.variantLabel}*`
            : item.product.name;
        const contentsSummary = buildProductContentsSummary(item.product, 3);
        return contentsSummary
            ? `• **${namePart}** × ${item.quantity}\n  ${contentsSummary}`
            : `• **${namePart}** × ${item.quantity}`;
    });
    const embed = new EmbedBuilder()
        .setTitle(`Estado de tu pedido ${order.orderCode}`)
        .setColor(color)
        .setDescription(getCustomerOrderDescription(order))
        .addFields({ name: 'Estado', value: label, inline: true }, { name: 'Artículos', value: `**${totalItems}**`, inline: true }, { name: 'Total', value: `**${formatPrice(order.totalAmount)}**`, inline: true }, { name: 'Siguiente paso', value: getCustomerNextStep(order) })
        .setFooter({ text: `${SHOP_FOOTER.text}  ·  Guarda tu código de pedido` })
        .setTimestamp(order.createdAt);
    if (productLines.length > 0) {
        embed.addFields({
            name: 'Productos',
            value: productLines.join('\n').slice(0, 1024),
        });
    }
    if (order.rejectionReason) {
        embed.addFields({ name: 'Motivo informado', value: order.rejectionReason });
    }
    if (order.cancelReason) {
        embed.addFields({ name: 'Motivo informado', value: order.cancelReason });
    }
    return embed;
}
/** Botones para pedido pendiente (en canal de staff). */
export function buildPendingButtons(orderCode) {
    return new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId(`shop:accept:${orderCode}`)
        .setLabel('✅ Aceptar')
        .setStyle(ButtonStyle.Success), new ButtonBuilder()
        .setCustomId(`shop:reject:${orderCode}`)
        .setLabel('❌ Rechazar')
        .setStyle(ButtonStyle.Danger));
}
/** Botones para pedido aceptado (en canal de staff). */
export function buildAcceptedButtons(orderCode) {
    return new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId(`shop:add_service:${orderCode}`)
        .setLabel('➕ Agregar servicio')
        .setStyle(ButtonStyle.Secondary), new ButtonBuilder()
        .setCustomId(`shop:discount:${orderCode}`)
        .setLabel('🏷️ Aplicar descuento')
        .setStyle(ButtonStyle.Secondary), new ButtonBuilder()
        .setCustomId(`shop:close:${orderCode}`)
        .setLabel('📦 Marcar entregado')
        .setStyle(ButtonStyle.Primary), new ButtonBuilder()
        .setCustomId(`shop:cancel:${orderCode}`)
        .setLabel('🚫 Cancelar')
        .setStyle(ButtonStyle.Secondary));
}
//# sourceMappingURL=order-utils.js.map