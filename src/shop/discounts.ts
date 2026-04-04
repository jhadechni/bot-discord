import { Prisma } from '../generated/prisma/client.js';
import { prisma } from '../database/prisma.js';

const ZERO = new Prisma.Decimal(0);
const ONE_HUNDRED = new Prisma.Decimal(100);

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

function clampDiscountAmount(
  amount: Prisma.Decimal,
  base: Prisma.Decimal,
): Prisma.Decimal {
  if (amount.comparedTo(ZERO) <= 0) return ZERO;
  if (amount.comparedTo(base) >= 0) return base;
  return amount;
}

function calculateDiscountAmount(
  baseAmount: Prisma.Decimal,
  discountType: string,
  discountValue: Prisma.Decimal,
): Prisma.Decimal {
  if (discountType === 'percent') {
    return clampDiscountAmount(baseAmount.mul(discountValue).div(ONE_HUNDRED), baseAmount);
  }

  if (discountType === 'fixed') {
    return clampDiscountAmount(discountValue, baseAmount);
  }

  return ZERO;
}

function isPolicyInWindow(
  now: Date,
  startsAt: Date | null,
  endsAt: Date | null,
): boolean {
  if (startsAt && startsAt > now) return false;
  if (endsAt && endsAt < now) return false;
  return true;
}

function isAutoApplicablePolicy(
  policyType: string,
  isFirstCompletedOrder: boolean,
): boolean {
  if (policyType === 'first_order' || policyType === 'new_customer') {
    return isFirstCompletedOrder;
  }

  if (policyType === 'seasonal') {
    return true;
  }

  return false;
}

export async function calculateOrderPricing(
  guildId: string,
  customerUserId: string,
  items: PendingOrderPricingItemInput[],
): Promise<CalculatedOrderPricing> {
  const calculatedItems: CalculatedOrderItemDraft[] = items.map(item => {
    const grossLineTotal = item.unitPrice.mul(item.quantity);

    return {
      ...item,
      grossLineTotal,
      itemDiscounts: [],
      netLineTotal: grossLineTotal,
    };
  });

  const subtotalAmount = calculatedItems.reduce(
    (sum, item) => sum.add(item.grossLineTotal),
    ZERO,
  );

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
  const [completedOrdersCount, policies] = await Promise.all([
    prisma.shopOrder.count({
      where: {
        guildId,
        customerUserId,
        status: 'completed',
      },
    }),
    prisma.shopDiscountPolicy.findMany({
      where: { guildId, isActive: true },
      orderBy: [
        { priority: 'desc' },
        { createdAt: 'asc' },
      ],
    }),
  ]);

  const activePolicies = policies.filter(policy =>
    isPolicyInWindow(now, policy.startsAt ?? null, policy.endsAt ?? null),
  );
  const isFirstCompletedOrder = completedOrdersCount === 0;

  for (const policy of activePolicies) {
    if (!isAutoApplicablePolicy(policy.policyType, isFirstCompletedOrder)) {
      continue;
    }

    if (policy.scope === 'item') {
      for (const [index, item] of calculatedItems.entries()) {
        if (item.netLineTotal.comparedTo(ZERO) <= 0) continue;

        const discountAmount = calculateDiscountAmount(
          item.netLineTotal,
          policy.discountType,
          policy.discountValue,
        );

        if (discountAmount.comparedTo(ZERO) <= 0) continue;

        item.itemDiscounts.push({
          appliedByUserId: null,
          discountAmount,
          discountPolicyId: policy.id,
          discountType: policy.discountType,
          discountValue: policy.discountValue,
          orderItemIndex: index,
          reason: policy.name,
          scope: 'item',
        });
        item.netLineTotal = item.netLineTotal.sub(discountAmount);
      }

      continue;
    }

    if (policy.scope !== 'order') {
      continue;
    }
  }

  const itemDiscountTotal = calculatedItems.reduce(
    (sum, item) =>
      sum.add(item.itemDiscounts.reduce(
        (itemSum, discount) => itemSum.add(discount.discountAmount),
        ZERO,
      )),
    ZERO,
  );

  let remainingOrderBase = subtotalAmount.sub(itemDiscountTotal);
  const orderDiscounts: CalculatedDiscountDraft[] = [];

  for (const policy of activePolicies) {
    if (!isAutoApplicablePolicy(policy.policyType, isFirstCompletedOrder)) {
      continue;
    }

    if (policy.scope !== 'order') {
      continue;
    }

    if (remainingOrderBase.comparedTo(ZERO) <= 0) {
      break;
    }

    const discountAmount = calculateDiscountAmount(
      remainingOrderBase,
      policy.discountType,
      policy.discountValue,
    );

    if (discountAmount.comparedTo(ZERO) <= 0) continue;

    orderDiscounts.push({
      appliedByUserId: null,
      discountAmount,
      discountPolicyId: policy.id,
      discountType: policy.discountType,
      discountValue: policy.discountValue,
      orderItemIndex: null,
      reason: policy.name,
      scope: 'order',
    });
    remainingOrderBase = remainingOrderBase.sub(discountAmount);
  }

  const orderDiscountTotal = orderDiscounts.reduce(
    (sum, discount) => sum.add(discount.discountAmount),
    ZERO,
  );
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
