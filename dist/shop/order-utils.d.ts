import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from 'discord.js';
export type OrderFull = NonNullable<Awaited<ReturnType<typeof getOrderFull>>>;
export interface PendingOrderItemInput {
    notes: string | null;
    productId: string;
    quantity: number;
}
export interface OrderMaterialStockStatus {
    availableStock: number;
    currentStock: number;
    materialId: string;
    materialName: string;
    requiredQuantity: number;
    reservedStock: number;
    stackSize: number;
    shortfallQuantity: number;
}
export interface OrderStockAssessment {
    isFullyAvailable: boolean;
    requirements: OrderMaterialStockStatus[];
    shortages: OrderMaterialStockStatus[];
}
export declare function formatOrderStockStatusLine(status: OrderMaterialStockStatus): string;
/** Carga un pedido completo con cliente e ítems para mostrar en embed. */
export declare function getOrderFull(orderCode: string): Promise<({
    appliedDiscounts: {
        id: string;
        reason: string | null;
        orderId: string | null;
        discountPolicyId: string | null;
        orderItemId: string | null;
        scope: string;
        discountType: string;
        discountValue: import("@prisma/client-runtime-utils").Decimal;
        discountAmount: import("@prisma/client-runtime-utils").Decimal;
        appliedByUserId: string | null;
        appliedAt: Date;
    }[];
    customer: {
        createdAt: Date;
        id: string;
        guildId: string;
        updatedAt: Date;
        username: string;
        discordUserId: string;
        displayName: string;
        isStaff: boolean;
    };
    items: ({
        product: {
            components: ({
                material: {
                    name: string;
                };
            } & {
                id: string;
                quantityRequired: number;
                productId: string;
                materialId: string;
            })[];
        } & {
            createdAt: Date;
            id: string;
            parentId: string | null;
            guildId: string;
            name: string;
            updatedAt: Date;
            description: string | null;
            isActive: boolean;
            sortOrder: number;
            category: string;
            productType: string;
            subcategory: string;
            baseMaterialId: string | null;
            presentationType: string;
            presentationQuantity: number;
            presentationLabel: string | null;
            additionalCategories: string[];
            additionalCategoryAssignments: import("@prisma/client/runtime/client").JsonValue;
            variantLabel: string | null;
            variantAttributes: import("@prisma/client/runtime/client").JsonValue | null;
        };
        appliedDiscounts: {
            id: string;
            reason: string | null;
            orderId: string | null;
            discountPolicyId: string | null;
            orderItemId: string | null;
            scope: string;
            discountType: string;
            discountValue: import("@prisma/client-runtime-utils").Decimal;
            discountAmount: import("@prisma/client-runtime-utils").Decimal;
            appliedByUserId: string | null;
            appliedAt: Date;
        }[];
    } & {
        id: string;
        productId: string;
        orderId: string;
        quantity: number;
        unitPrice: import("@prisma/client-runtime-utils").Decimal;
        grossLineTotal: import("@prisma/client-runtime-utils").Decimal;
        netLineTotal: import("@prisma/client-runtime-utils").Decimal;
        reservedQuantity: number;
        deliveredQuantity: number;
        notes: string | null;
    })[];
    surcharges: {
        createdAt: Date;
        id: string;
        label: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        orderId: string;
        isPercent: boolean;
        rate: import("@prisma/client-runtime-utils").Decimal | null;
    }[];
} & {
    createdAt: Date;
    id: string;
    guildId: string;
    status: string;
    orderCode: string;
    customerUserId: string;
    source: string;
    ticketChannelId: string | null;
    staffChannelId: string | null;
    acceptedByUserId: string | null;
    rejectedByUserId: string | null;
    closedByUserId: string | null;
    rejectionReason: string | null;
    cancelReason: string | null;
    subtotalAmount: import("@prisma/client-runtime-utils").Decimal;
    totalDiscountAmount: import("@prisma/client-runtime-utils").Decimal;
    surchargesAmount: import("@prisma/client-runtime-utils").Decimal;
    totalAmount: import("@prisma/client-runtime-utils").Decimal;
    acceptedAt: Date | null;
    rejectedAt: Date | null;
    closedAt: Date | null;
    cancelledAt: Date | null;
}) | null>;
/** Agrega un recargo al pedido y recalcula el total. */
export declare function addSurchargeToOrder(orderCode: string, label: string, isPercent: boolean, rate: number): Promise<void>;
/** Genera un código único con formato AQ-XXXXXX. */
export declare function generateOrderCode(): Promise<string>;
/** Crea un pedido pendiente congelando precio y descuentos al momento de crear la orden. */
export declare function createPendingOrder(params: {
    customerUserId: string;
    guildId: string;
    items: PendingOrderItemInput[];
    staffChannelId?: string | null;
    source?: 'cart' | 'direct';
}): Promise<{
    createdAt: Date;
    id: string;
    guildId: string;
    status: string;
    orderCode: string;
    customerUserId: string;
    source: string;
    ticketChannelId: string | null;
    staffChannelId: string | null;
    acceptedByUserId: string | null;
    rejectedByUserId: string | null;
    closedByUserId: string | null;
    rejectionReason: string | null;
    cancelReason: string | null;
    subtotalAmount: import("@prisma/client-runtime-utils").Decimal;
    totalDiscountAmount: import("@prisma/client-runtime-utils").Decimal;
    surchargesAmount: import("@prisma/client-runtime-utils").Decimal;
    totalAmount: import("@prisma/client-runtime-utils").Decimal;
    acceptedAt: Date | null;
    rejectedAt: Date | null;
    closedAt: Date | null;
    cancelledAt: Date | null;
}>;
/** Calcula el estado actual de stock para un pedido pendiente sin reservar inventario. */
export declare function getOrderStockAssessment(orderId: string): Promise<OrderStockAssessment>;
/** Reserva los materiales necesarios para un pedido pendiente. */
export declare function reserveOrderStock(orderId: string, guildId: string, performedById: string): Promise<boolean>;
/** Libera el stock reservado cuando un pedido se rechaza o cancela. */
export declare function releaseOrderStock(orderId: string, guildId: string, performedById: string): Promise<void>;
/** Reserva lo faltante y consume el stock cuando un pedido se cierra (entregado al cliente). */
export declare function consumeOrderStock(orderId: string, guildId: string, performedById: string): Promise<boolean>;
export declare function buildOrderEmbed(order: OrderFull, stockAssessment?: OrderStockAssessment | null): EmbedBuilder;
export declare function buildCustomerOrderEmbed(order: OrderFull): EmbedBuilder;
/** Botones para pedido pendiente (en canal de staff). */
export declare function buildPendingButtons(orderCode: string): ActionRowBuilder<ButtonBuilder>;
/** Botones para pedido aceptado (en canal de staff). */
export declare function buildAcceptedButtons(orderCode: string): ActionRowBuilder<ButtonBuilder>;
//# sourceMappingURL=order-utils.d.ts.map