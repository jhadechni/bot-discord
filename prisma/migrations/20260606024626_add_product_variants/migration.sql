-- AlterTable
ALTER TABLE "ShopProduct" ADD COLUMN     "parentId" TEXT,
ADD COLUMN     "sortOrder" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "variantAttributes" JSONB,
ADD COLUMN     "variantLabel" TEXT;

-- CreateIndex
CREATE INDEX "ShopProduct_parentId_idx" ON "ShopProduct"("parentId");

-- CreateIndex
CREATE INDEX "ShopProduct_parentId_sortOrder_idx" ON "ShopProduct"("parentId", "sortOrder");

-- AddForeignKey
ALTER TABLE "ShopProduct" ADD CONSTRAINT "ShopProduct_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "ShopProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;
