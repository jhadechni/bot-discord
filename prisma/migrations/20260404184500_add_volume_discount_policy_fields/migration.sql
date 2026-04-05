-- AlterTable
ALTER TABLE "ShopDiscountPolicy"
ADD COLUMN "productId" TEXT,
ADD COLUMN "minQuantity" INTEGER;

-- AddForeignKey
ALTER TABLE "ShopDiscountPolicy"
ADD CONSTRAINT "ShopDiscountPolicy_productId_fkey"
FOREIGN KEY ("productId") REFERENCES "ShopProduct"("id")
ON DELETE SET NULL
ON UPDATE CASCADE;
