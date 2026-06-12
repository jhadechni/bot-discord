-- AlterTable
ALTER TABLE "ShopOrder" ADD COLUMN     "surchargesAmount" DECIMAL(65,30) NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "ShopOrderSurcharge" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "isPercent" BOOLEAN NOT NULL DEFAULT true,
    "rate" DECIMAL(65,30),
    "amount" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShopOrderSurcharge_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ShopOrderSurcharge_orderId_idx" ON "ShopOrderSurcharge"("orderId");

-- AddForeignKey
ALTER TABLE "ShopOrderSurcharge" ADD CONSTRAINT "ShopOrderSurcharge_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "ShopOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
