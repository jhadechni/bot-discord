-- AlterTable
ALTER TABLE "ShopUser" ADD COLUMN "isStaff" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ShopOrder" ADD COLUMN "totalDiscountAmount" DECIMAL(65,30) NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "ShopOrderItem" ADD COLUMN "netLineTotal" DECIMAL(65,30) NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "ShopDiscountPolicy" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "policyType" TEXT NOT NULL,
    "scope" TEXT NOT NULL,
    "discountType" TEXT NOT NULL,
    "discountValue" DECIMAL(65,30) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "startsAt" TIMESTAMP(3),
    "endsAt" TIMESTAMP(3),
    "createdByUserId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShopDiscountPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopAppliedDiscount" (
    "id" TEXT NOT NULL,
    "discountPolicyId" TEXT,
    "orderId" TEXT,
    "orderItemId" TEXT,
    "scope" TEXT NOT NULL,
    "discountType" TEXT NOT NULL,
    "discountValue" DECIMAL(65,30) NOT NULL,
    "discountAmount" DECIMAL(65,30) NOT NULL,
    "reason" TEXT,
    "appliedByUserId" TEXT,
    "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShopAppliedDiscount_pkey" PRIMARY KEY ("id")
);

-- Backfill
UPDATE "ShopOrderItem"
SET "netLineTotal" = "grossLineTotal"
WHERE "netLineTotal" = 0;

UPDATE "ShopOrder"
SET "status" = 'completed'
WHERE "status" = 'closed';

UPDATE "ShopOrder" AS o
SET "staffChannelId" = gc."shopStaffChannelId"
FROM "GuildConfig" AS gc
WHERE o."guildId" = gc."guildId";

UPDATE "ShopOrderEvent" SET "eventType" = 'order_created' WHERE "eventType" = 'created';
UPDATE "ShopOrderEvent" SET "eventType" = 'order_accepted' WHERE "eventType" = 'accepted';
UPDATE "ShopOrderEvent" SET "eventType" = 'order_rejected' WHERE "eventType" = 'rejected';
UPDATE "ShopOrderEvent" SET "eventType" = 'order_cancelled' WHERE "eventType" = 'cancelled';
UPDATE "ShopOrderEvent" SET "eventType" = 'order_completed' WHERE "eventType" = 'closed';
UPDATE "ShopOrderEvent" SET "oldStatus" = 'completed' WHERE "oldStatus" = 'closed';
UPDATE "ShopOrderEvent" SET "newStatus" = 'completed' WHERE "newStatus" = 'closed';

UPDATE "ShopUser" AS u
SET "isStaff" = true
WHERE EXISTS (
    SELECT 1
    FROM "ShopOrder" AS o
    WHERE o."acceptedByUserId" = u."id"
       OR o."rejectedByUserId" = u."id"
       OR o."closedByUserId" = u."id"
)
   OR EXISTS (
    SELECT 1
    FROM "ShopSale" AS s
    WHERE s."registeredById" = u."id"
)
   OR EXISTS (
    SELECT 1
    FROM "ShopInventoryMovement" AS m
    WHERE m."performedById" = u."id"
)
   OR EXISTS (
    SELECT 1
    FROM "ShopWithdrawal" AS w
    WHERE w."performedById" = u."id"
);

-- AddForeignKey
ALTER TABLE "ShopDiscountPolicy" ADD CONSTRAINT "ShopDiscountPolicy_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopAppliedDiscount" ADD CONSTRAINT "ShopAppliedDiscount_discountPolicyId_fkey" FOREIGN KEY ("discountPolicyId") REFERENCES "ShopDiscountPolicy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopAppliedDiscount" ADD CONSTRAINT "ShopAppliedDiscount_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "ShopOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopAppliedDiscount" ADD CONSTRAINT "ShopAppliedDiscount_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "ShopOrderItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopAppliedDiscount" ADD CONSTRAINT "ShopAppliedDiscount_appliedByUserId_fkey" FOREIGN KEY ("appliedByUserId") REFERENCES "ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
