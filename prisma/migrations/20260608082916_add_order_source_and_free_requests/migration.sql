-- AlterTable
ALTER TABLE "ShopOrder" ADD COLUMN     "source" TEXT NOT NULL DEFAULT 'direct';

-- CreateTable
CREATE TABLE "ShopFreeRequest" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "requestText" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShopFreeRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ShopFreeRequest_guildId_createdAt_idx" ON "ShopFreeRequest"("guildId", "createdAt");

-- CreateIndex
CREATE INDEX "ShopFreeRequest_userId_idx" ON "ShopFreeRequest"("userId");

-- AddForeignKey
ALTER TABLE "ShopFreeRequest" ADD CONSTRAINT "ShopFreeRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "ShopUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
