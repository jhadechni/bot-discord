import { Prisma } from '../generated/prisma/client.js';
import { prisma } from '../database/prisma.js';
import { buildShopGuildWhere } from './scope.js';
const ZERO = new Prisma.Decimal(0);
const ONE_HUNDRED = new Prisma.Decimal(100);
export function normalizeDiscountType(discountType) {
    const normalized = discountType.trim().toLowerCase();
    if (normalized === 'percent' || normalized === 'percentage') {
        return 'percent';
    }
    if (normalized === 'fixed'
        || normalized === 'fixed_amount'
        || normalized === 'fixedamount'
        || normalized === 'amount'
        || normalized === 'flat'
        || normalized === 'flat_amount') {
        return 'fixed';
    }
    return normalized;
}
function normalizePolicyType(policyType) {
    const normalized = policyType.trim().toLowerCase();
    if (normalized === 'seasonal' || normalized === 'automatic') {
        return 'automatic';
    }
    if (normalized === 'volume' || normalized === 'bulk') {
        return 'volume';
    }
    if (normalized === 'manual') {
        return 'manual';
    }
    return normalized;
}
function normalizeDiscountScope(scope) {
    const normalized = scope.trim().toLowerCase();
    if (normalized === 'item' || normalized === 'product') {
        return 'item';
    }
    if (normalized === 'order' || normalized === 'global') {
        return 'order';
    }
    return normalized;
}
function clampDiscountAmount(amount, base) {
    if (amount.comparedTo(ZERO) <= 0)
        return ZERO;
    if (amount.comparedTo(base) >= 0)
        return base;
    return amount;
}
function calculateDiscountAmount(baseAmount, discountType, discountValue) {
    const normalizedDiscountType = normalizeDiscountType(discountType);
    if (normalizedDiscountType === 'percent') {
        return clampDiscountAmount(baseAmount.mul(discountValue).div(ONE_HUNDRED), baseAmount);
    }
    if (normalizedDiscountType === 'fixed') {
        return clampDiscountAmount(discountValue, baseAmount);
    }
    return ZERO;
}
function isPolicyInWindow(now, startsAt, endsAt) {
    if (startsAt && startsAt > now)
        return false;
    if (endsAt && endsAt < now)
        return false;
    return true;
}
function isAutoApplicablePolicy(policyType) {
    return normalizePolicyType(policyType) === 'automatic';
}
function isManualVolumeLikePolicy(policyType) {
    const normalized = normalizePolicyType(policyType);
    return normalized === 'volume' || normalized === 'manual';
}
function isProductScopedPolicy(scope) {
    return normalizeDiscountScope(scope) === 'item';
}
function sumDiscountAmounts(discounts) {
    return discounts.reduce((sum, discount) => sum.add(discount.discountAmount), ZERO);
}
function pickBestEligibleVolumePolicies(params) {
    const quantityByProduct = new Map();
    const productNameById = new Map();
    const appliedPolicyIds = new Set();
    for (const item of params.items) {
        quantityByProduct.set(item.productId, (quantityByProduct.get(item.productId) ?? 0) + item.quantity);
        productNameById.set(item.productId, item.product.name);
        for (const discount of item.appliedDiscounts) {
            if (discount.discountPolicyId) {
                appliedPolicyIds.add(discount.discountPolicyId);
            }
        }
    }
    const bestByProduct = new Map();
    for (const policy of params.policies) {
        if (!isManualVolumeLikePolicy(policy.policyType) || !isProductScopedPolicy(policy.scope))
            continue;
        if (!policy.productId || policy.minQuantity == null)
            continue;
        if (appliedPolicyIds.has(policy.id))
            continue;
        const aggregatedQuantity = quantityByProduct.get(policy.productId) ?? 0;
        if (aggregatedQuantity < policy.minQuantity)
            continue;
        const current = bestByProduct.get(policy.productId);
        const candidate = {
            aggregatedQuantity,
            discountType: normalizeDiscountType(policy.discountType),
            discountValue: policy.discountValue,
            minQuantity: policy.minQuantity,
            policyId: policy.id,
            policyName: policy.name,
            priority: policy.priority,
            productId: policy.productId,
            productName: productNameById.get(policy.productId) ?? 'Producto',
        };
        if (!current) {
            bestByProduct.set(policy.productId, candidate);
            continue;
        }
        if (candidate.minQuantity > current.minQuantity) {
            bestByProduct.set(policy.productId, candidate);
            continue;
        }
        if (candidate.minQuantity === current.minQuantity && candidate.priority > current.priority) {
            bestByProduct.set(policy.productId, candidate);
            continue;
        }
        if (candidate.minQuantity === current.minQuantity &&
            candidate.priority === current.priority &&
            candidate.discountValue.comparedTo(current.discountValue) > 0) {
            bestByProduct.set(policy.productId, candidate);
        }
    }
    return Array.from(bestByProduct.values()).sort((a, b) => {
        if (a.productName === b.productName)
            return a.minQuantity - b.minQuantity;
        return a.productName.localeCompare(b.productName, 'es');
    });
}
async function recalculateOrderDiscountState(tx, orderId) {
    const order = await tx.shopOrder.findUniqueOrThrow({
        where: { id: orderId },
        include: {
            appliedDiscounts: true,
            items: {
                include: {
                    appliedDiscounts: true,
                },
            },
        },
    });
    let subtotalAmount = ZERO;
    let itemDiscountTotal = ZERO;
    for (const item of order.items) {
        subtotalAmount = subtotalAmount.add(item.grossLineTotal);
        const itemDiscountAmount = sumDiscountAmounts(item.appliedDiscounts);
        itemDiscountTotal = itemDiscountTotal.add(itemDiscountAmount);
        await tx.shopOrderItem.update({
            where: { id: item.id },
            data: {
                netLineTotal: item.grossLineTotal.sub(itemDiscountAmount),
            },
        });
    }
    const orderDiscountTotal = sumDiscountAmounts(order.appliedDiscounts.filter(discount => discount.scope === 'order'));
    const totalDiscountAmount = itemDiscountTotal.add(orderDiscountTotal);
    await tx.shopOrder.update({
        where: { id: order.id },
        data: {
            subtotalAmount,
            totalAmount: subtotalAmount.sub(totalDiscountAmount),
            totalDiscountAmount,
        },
    });
}
export async function calculateOrderPricing(guildId, items) {
    const calculatedItems = items.map(item => {
        const grossLineTotal = item.unitPrice.mul(item.quantity);
        return {
            ...item,
            grossLineTotal,
            itemDiscounts: [],
            netLineTotal: grossLineTotal,
        };
    });
    const subtotalAmount = calculatedItems.reduce((sum, item) => sum.add(item.grossLineTotal), ZERO);
    if (calculatedItems.length === 0) {
        return {
            items: calculatedItems,
            orderDiscounts: [],
            subtotalAmount,
            totalAmount: subtotalAmount,
            totalDiscountAmount: ZERO,
        };
    }
    const now = new Date();
    const policies = await prisma.shopDiscountPolicy.findMany({
        where: {
            ...buildShopGuildWhere(guildId),
            isActive: true,
        },
        orderBy: [
            { priority: 'desc' },
            { createdAt: 'asc' },
        ],
    });
    const activePolicies = policies.filter(policy => isPolicyInWindow(now, policy.startsAt ?? null, policy.endsAt ?? null));
    for (const policy of activePolicies) {
        if (!isAutoApplicablePolicy(policy.policyType)) {
            continue;
        }
        const normalizedScope = normalizeDiscountScope(policy.scope);
        if (normalizedScope === 'item') {
            for (const [index, item] of calculatedItems.entries()) {
                if (item.netLineTotal.comparedTo(ZERO) <= 0)
                    continue;
                if (policy.productId && item.productId !== policy.productId)
                    continue;
                const discountAmount = calculateDiscountAmount(item.netLineTotal, policy.discountType, policy.discountValue);
                if (discountAmount.comparedTo(ZERO) <= 0)
                    continue;
                item.itemDiscounts.push({
                    appliedByUserId: null,
                    discountAmount,
                    discountPolicyId: policy.id,
                    discountType: normalizeDiscountType(policy.discountType),
                    discountValue: policy.discountValue,
                    orderItemIndex: index,
                    reason: policy.name,
                    scope: normalizedScope,
                });
                item.netLineTotal = item.netLineTotal.sub(discountAmount);
            }
            continue;
        }
        if (normalizedScope !== 'order') {
            continue;
        }
    }
    const itemDiscountTotal = calculatedItems.reduce((sum, item) => sum.add(item.itemDiscounts.reduce((itemSum, discount) => itemSum.add(discount.discountAmount), ZERO)), ZERO);
    let remainingOrderBase = subtotalAmount.sub(itemDiscountTotal);
    const orderDiscounts = [];
    for (const policy of activePolicies) {
        if (!isAutoApplicablePolicy(policy.policyType)) {
            continue;
        }
        const normalizedScope = normalizeDiscountScope(policy.scope);
        if (normalizedScope !== 'order') {
            continue;
        }
        if (remainingOrderBase.comparedTo(ZERO) <= 0) {
            break;
        }
        const discountAmount = calculateDiscountAmount(remainingOrderBase, policy.discountType, policy.discountValue);
        if (discountAmount.comparedTo(ZERO) <= 0)
            continue;
        orderDiscounts.push({
            appliedByUserId: null,
            discountAmount,
            discountPolicyId: policy.id,
            discountType: normalizeDiscountType(policy.discountType),
            discountValue: policy.discountValue,
            orderItemIndex: null,
            reason: policy.name,
            scope: normalizedScope,
        });
        remainingOrderBase = remainingOrderBase.sub(discountAmount);
    }
    const orderDiscountTotal = orderDiscounts.reduce((sum, discount) => sum.add(discount.discountAmount), ZERO);
    const totalDiscountAmount = itemDiscountTotal.add(orderDiscountTotal);
    const totalAmount = subtotalAmount.sub(totalDiscountAmount);
    return {
        items: calculatedItems,
        orderDiscounts,
        subtotalAmount,
        totalAmount,
        totalDiscountAmount,
    };
}
export async function getEligibleManualVolumeDiscounts(orderId) {
    const order = await prisma.shopOrder.findUniqueOrThrow({
        where: { id: orderId },
        include: {
            items: {
                include: {
                    appliedDiscounts: true,
                    product: true,
                },
            },
        },
    });
    const productIds = Array.from(new Set(order.items.map(item => item.productId)));
    if (productIds.length === 0) {
        return [];
    }
    const now = new Date();
    const policies = await prisma.shopDiscountPolicy.findMany({
        where: {
            ...buildShopGuildWhere(order.guildId),
            isActive: true,
            productId: { in: productIds },
        },
        orderBy: [
            { productId: 'asc' },
            { minQuantity: 'desc' },
            { priority: 'desc' },
            { createdAt: 'asc' },
        ],
    });
    const activePolicies = policies.filter(policy => isPolicyInWindow(now, policy.startsAt ?? null, policy.endsAt ?? null)
        && isManualVolumeLikePolicy(policy.policyType)
        && isProductScopedPolicy(policy.scope));
    return pickBestEligibleVolumePolicies({
        items: order.items,
        policies: activePolicies,
    });
}
export async function applyManualVolumeDiscounts(params) {
    const selectedPolicyIds = Array.from(new Set(params.selectedPolicyIds));
    if (selectedPolicyIds.length === 0) {
        return [];
    }
    return prisma.$transaction(async (tx) => {
        const order = await tx.shopOrder.findUniqueOrThrow({
            where: { id: params.orderId },
            include: {
                items: {
                    include: {
                        appliedDiscounts: true,
                        product: true,
                    },
                },
            },
        });
        if (order.status !== 'accepted') {
            throw new Error('Solo se pueden aplicar descuentos a pedidos aceptados.');
        }
        const now = new Date();
        const policies = await tx.shopDiscountPolicy.findMany({
            where: {
                ...buildShopGuildWhere(order.guildId),
                id: { in: selectedPolicyIds },
                isActive: true,
            },
            orderBy: [
                { productId: 'asc' },
                { minQuantity: 'desc' },
                { priority: 'desc' },
                { createdAt: 'asc' },
            ],
        });
        const activePolicies = policies.filter(policy => isPolicyInWindow(now, policy.startsAt ?? null, policy.endsAt ?? null)
            && isManualVolumeLikePolicy(policy.policyType)
            && isProductScopedPolicy(policy.scope));
        const eligibleDiscounts = pickBestEligibleVolumePolicies({
            items: order.items,
            policies: activePolicies,
        });
        const eligibleByPolicyId = new Map(eligibleDiscounts.map(discount => [discount.policyId, discount]));
        const appliedDiscounts = [];
        for (const selectedPolicyId of selectedPolicyIds) {
            const eligible = eligibleByPolicyId.get(selectedPolicyId);
            if (!eligible)
                continue;
            const targetItems = order.items.filter(item => item.productId === eligible.productId);
            if (targetItems.length === 0)
                continue;
            for (const item of targetItems) {
                const currentItemDiscountTotal = sumDiscountAmounts(item.appliedDiscounts);
                const currentNetLineTotal = item.grossLineTotal.sub(currentItemDiscountTotal);
                const discountAmount = calculateDiscountAmount(currentNetLineTotal, eligible.discountType, eligible.discountValue);
                if (discountAmount.comparedTo(ZERO) <= 0)
                    continue;
                await tx.shopAppliedDiscount.create({
                    data: {
                        appliedByUserId: params.appliedByUserId,
                        discountAmount,
                        discountPolicyId: eligible.policyId,
                        discountType: eligible.discountType,
                        discountValue: eligible.discountValue,
                        orderId: order.id,
                        orderItemId: item.id,
                        reason: eligible.policyName,
                        scope: 'item',
                    },
                });
            }
            await tx.shopOrderEvent.create({
                data: {
                    orderId: order.id,
                    eventType: 'manual_discount_applied',
                    oldStatus: 'accepted',
                    newStatus: 'accepted',
                    performedById: params.appliedByUserId,
                    notes: `${eligible.productName}: ${eligible.policyName}`,
                },
            });
            appliedDiscounts.push(eligible);
        }
        if (appliedDiscounts.length > 0) {
            await recalculateOrderDiscountState(tx, order.id);
        }
        return appliedDiscounts;
    });
}
//# sourceMappingURL=discounts.js.map