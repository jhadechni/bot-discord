import { Prisma } from '../generated/prisma/client.js';
export declare function normalizeDiscountType(discountType: string): string;
export interface PendingOrderPricingItemInput {
    productId: string;
    quantity: number;
    unitPrice: Prisma.Decimal;
    notes: string | null;
}
export interface CalculatedDiscountDraft {
    appliedByUserId: string | null;
    discountAmount: Prisma.Decimal;
    discountPolicyId: string | null;
    discountType: string;
    discountValue: Prisma.Decimal;
    orderItemIndex: number | null;
    reason: string;
    scope: 'item' | 'order';
}
export interface CalculatedOrderItemDraft extends PendingOrderPricingItemInput {
    grossLineTotal: Prisma.Decimal;
    itemDiscounts: CalculatedDiscountDraft[];
    netLineTotal: Prisma.Decimal;
}
export interface CalculatedOrderPricing {
    items: CalculatedOrderItemDraft[];
    orderDiscounts: CalculatedDiscountDraft[];
    subtotalAmount: Prisma.Decimal;
    totalAmount: Prisma.Decimal;
    totalDiscountAmount: Prisma.Decimal;
}
export interface EligibleManualVolumeDiscount {
    aggregatedQuantity: number;
    discountType: string;
    discountValue: Prisma.Decimal;
    minQuantity: number;
    policyId: string;
    policyName: string;
    priority: number;
    productId: string;
    productName: string;
}
export declare function calculateOrderPricing(guildId: string, items: PendingOrderPricingItemInput[]): Promise<CalculatedOrderPricing>;
export declare function getEligibleManualVolumeDiscounts(orderId: string): Promise<EligibleManualVolumeDiscount[]>;
export declare function applyManualVolumeDiscounts(params: {
    appliedByUserId: string;
    orderId: string;
    selectedPolicyIds: string[];
}): Promise<EligibleManualVolumeDiscount[]>;
//# sourceMappingURL=discounts.d.ts.map