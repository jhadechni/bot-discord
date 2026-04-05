-- AlterTable
ALTER TABLE "ShopMaterial"
ADD COLUMN "stackSize" INTEGER NOT NULL DEFAULT 64;

-- AlterTable
ALTER TABLE "ShopProduct"
ADD COLUMN "baseMaterialId" TEXT,
ADD COLUMN "presentationLabel" TEXT,
ADD COLUMN "presentationQuantity" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN "presentationType" TEXT NOT NULL DEFAULT 'custom';

-- AddForeignKey
ALTER TABLE "ShopProduct"
ADD CONSTRAINT "ShopProduct_baseMaterialId_fkey"
FOREIGN KEY ("baseMaterialId") REFERENCES "ShopMaterial"("id")
ON DELETE SET NULL
ON UPDATE CASCADE;
