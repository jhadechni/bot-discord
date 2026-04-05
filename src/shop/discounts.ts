import { Prisma } from '../generated/prisma/client.js';
import { prisma } from '../database/prisma.js';

const ZERO = new Prisma.Decimal(0);
const ONE_HUNDRED = new Prisma.Decimal(100);
type DiscountTx = Prisma.TransactionClient;

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
): boolean {
  return policyType === 'seasonal';
}

function sumDiscountAmounts(
  discounts: Array<{ discountAmount: Prisma.Decimal }>,
): Prisma.Decimal {
  return discounts.reduce((sum, discount) => sum.add(discount.discountAmount), ZERO);
}

function pickBestEligibleVolumePolicies(params: {
  items: Array<{
    appliedDiscounts: Array<{ discountPolicyId: string | null }>;
    product: { name: string };
    productId: string;
    quantity: number;
  }>;
  policies: Array<{
    createdAt: Date;
    discountType: string;
    discountValue: Prisma.Decimal;
    id: string;
    minQuantity: number | null;
    name: string;
    policyType: string;
    priority: number;
    productId: string | null;
    scope: string;
  }>;
}): EligibleManualVolumeDiscount[] {
  const quantityByProduct = new Map<string, number>();
  const productNameById   = new Map<string, string>();
  const appliedPolicyIds  = new Set<string>();

  for (const item of params.items) {
    quantityByProduct.set(item.productId, (quantityByProduct.get(item.productId) ?? 0) + item.quantity);
    productNameById.set(item.productId, item.product.name);
    for (const discount of item.appliedDiscounts) {
      if (discount.discountPolicyId) {
        appliedPolicyIds.add(discount.discountPolicyId);
      }
    }
  }

  const bestByProduct = new Map<string, EligibleManualVolumeDiscount>();

  for (const policy of params.policies) {
    if (policy.policyType !== 'volume' || policy.scope !== 'item') continue;
    if (!policy.productId || policy.minQuantity == null) continue;
    if (appliedPolicyIds.has(policy.id)) continue;

    const aggregatedQuantity = quantityByProduct.get(policy.productId) ?? 0;
    if (aggregatedQuantity < policy.minQuantity) continue;

    const current = bestByProduct.get(policy.productId);
    const candidate: EligibleManualVolumeDiscount = {
      aggregatedQuantity,
      discountType: policy.discountType,
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

    if (
      candidate.minQuantity === current.minQuantity &&
      candidate.priority === current.priority &&
      candidate.discountValue.comparedTo(current.discountValue) > 0
    ) {
      bestByProduct.set(policy.productId, candidate);
    }
  }

  return Array.from(bestByProduct.values()).sort((a, b) => {
    if (a.productName === b.productName) return a.minQuantity - b.minQuantity;
    return a.productName.localeCompare(b.productName, 'es');
  });
}

async function recalculateOrderDiscountState(
  tx: DiscountTx,
  orderId: string,
): Promise<void> {
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

  const orderDiscountTotal = sumDiscountAmounts(
    order.appliedDiscounts.filter(discount => discount.scope === 'order'),
  );
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

export async function calculateOrderPricing(
  guildId: string,
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
  const policies = await prisma.shopDiscountPolicy.findMany({
    where: {
      guildId,
      isActive: true,
      policyType: 'seasonal',
    },
    orderBy: [
      { priority: 'desc' },
      { createdAt: 'asc' },
    ],
  });

  const activePolicies = policies.filter(policy =>
    isPolicyInWindow(now, policy.startsAt ?? null, policy.endsAt ?? null),
  );

  for (const policy of activePolicies) {
    if (!isAutoApplicablePolicy(policy.policyType)) {
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
    if (!isAutoApplicablePolicy(policy.policyType)) {
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

export async function getEligibleManualVolumeDiscounts(
  orderId: string,
): Promise<EligibleManualVolumeDiscount[]> {
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
      guildId: order.guildId,
      isActive: true,
      policyType: 'volume',
      productId: { in: productIds },
    },
    orderBy: [
      { productId: 'asc' },
      { minQuantity: 'desc' },
      { priority: 'desc' },
      { createdAt: 'asc' },
    ],
  });

  const activePolicies = policies.filter(policy =>
    isPolicyInWindow(now, policy.startsAt ?? null, policy.endsAt ?? null),
  );

  return pickBestEligibleVolumePolicies({
    items: order.items,
    policies: activePolicies,
  });
}

export async function applyManualVolumeDiscounts(params: {
  appliedByUserId: string;
  orderId: string;
  selectedPolicyIds: string[];
}): Promise<EligibleManualVolumeDiscount[]> {
  const selectedPolicyIds = Array.from(new Set(params.selectedPolicyIds));
  if (selectedPolicyIds.length === 0) {
    return [];
  }

  return prisma.$transaction(async tx => {
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
        guildId: order.guildId,
        id: { in: selectedPolicyIds },
        isActive: true,
        policyType: 'volume',
      },
      orderBy: [
        { productId: 'asc' },
        { minQuantity: 'desc' },
        { priority: 'desc' },
        { createdAt: 'asc' },
      ],
    });

    const activePolicies = policies.filter(policy =>
      isPolicyInWindow(now, policy.startsAt ?? null, policy.endsAt ?? null),
    );
    const eligibleDiscounts = pickBestEligibleVolumePolicies({
      items: order.items,
      policies: activePolicies,
    });
    const eligibleByPolicyId = new Map(
      eligibleDiscounts.map(discount => [discount.policyId, discount]),
    );

    const appliedDiscounts: EligibleManualVolumeDiscount[] = [];

    for (const selectedPolicyId of selectedPolicyIds) {
      const eligible = eligibleByPolicyId.get(selectedPolicyId);
      if (!eligible) continue;

      const targetItems = order.items.filter(item => item.productId === eligible.productId);
      if (targetItems.length === 0) continue;

      for (const item of targetItems) {
        const currentItemDiscountTotal = sumDiscountAmounts(item.appliedDiscounts);
        const currentNetLineTotal = item.grossLineTotal.sub(currentItemDiscountTotal);
        const discountAmount = calculateDiscountAmount(
          currentNetLineTotal,
          eligible.discountType,
          eligible.discountValue,
        );

        if (discountAmount.comparedTo(ZERO) <= 0) continue;

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
