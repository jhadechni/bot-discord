-- AlterTable
ALTER TABLE "GuildConfig" ADD COLUMN     "boostChannelId" TEXT,
ADD COLUMN     "levelUpChannelId" TEXT,
ADD COLUMN     "logsAutomodChannelId" TEXT,
ADD COLUMN     "logsJoinsChannelId" TEXT,
ADD COLUMN     "logsLeavesChannelId" TEXT,
ADD COLUMN     "logsModChannelId" TEXT,
ADD COLUMN     "logsRecruitChannelId" TEXT,
ADD COLUMN     "shopCategoryId" TEXT,
ADD COLUMN     "shopStaffChannelId" TEXT;

-- CreateTable
CREATE TABLE "UserActivity" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "level" INTEGER NOT NULL DEFAULT 0,
    "messageCount" INTEGER NOT NULL DEFAULT 0,
    "voiceMinutes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reminder" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "triggerAt" TIMESTAMP(3) NOT NULL,
    "intervalMin" INTEGER,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reminder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FilterWord" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "addedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FilterWord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NicknameRole" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NicknameRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopUser" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "discordUserId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopMaterial" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "baseUnit" TEXT NOT NULL DEFAULT 'item',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopMaterial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopInventory" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "currentStock" INTEGER NOT NULL DEFAULT 0,
    "reservedStock" INTEGER NOT NULL DEFAULT 0,
    "minStockAlert" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopProduct" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'general',
    "subcategory" TEXT NOT NULL DEFAULT 'otros',
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopProductComponent" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "quantityRequired" INTEGER NOT NULL,

    CONSTRAINT "ShopProductComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopProductPrice" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT '$',
    "validFrom" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validTo" TIMESTAMP(3),
    "changedByUserId" TEXT,

    CONSTRAINT "ShopProductPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopOrder" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "orderCode" TEXT NOT NULL,
    "customerUserId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "ticketChannelId" TEXT,
    "staffChannelId" TEXT,
    "acceptedByUserId" TEXT,
    "rejectedByUserId" TEXT,
    "closedByUserId" TEXT,
    "rejectionReason" TEXT,
    "cancelReason" TEXT,
    "subtotalAmount" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "totalAmount" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "acceptedAt" TIMESTAMP(3),
    "rejectedAt" TIMESTAMP(3),
    "closedAt" TIMESTAMP(3),
    "cancelledAt" TIMESTAMP(3),

    CONSTRAINT "ShopOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopOrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DECIMAL(65,30) NOT NULL,
    "grossLineTotal" DECIMAL(65,30) NOT NULL,
    "reservedQuantity" INTEGER NOT NULL DEFAULT 0,
    "deliveredQuantity" INTEGER NOT NULL DEFAULT 0,
    "notes" TEXT,

    CONSTRAINT "ShopOrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopInventoryMovement" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "movementType" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "reason" TEXT,
    "relatedOrderId" TEXT,
    "performedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShopInventoryMovement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopSale" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "buyerUserId" TEXT NOT NULL,
    "registeredById" TEXT NOT NULL,
    "totalAmount" DECIMAL(65,30) NOT NULL,
    "soldAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShopSale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopWithdrawal" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "performedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShopWithdrawal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopOrderEvent" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "oldStatus" TEXT,
    "newStatus" TEXT,
    "performedById" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShopOrderEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserActivity_guildId_userId_key" ON "UserActivity"("guildId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "FilterWord_guildId_word_key" ON "FilterWord"("guildId", "word");

-- CreateIndex
CREATE UNIQUE INDEX "NicknameRole_guildId_roleId_key" ON "NicknameRole"("guildId", "roleId");

-- CreateIndex
CREATE UNIQUE INDEX "ShopUser_guildId_discordUserId_key" ON "ShopUser"("guildId", "discordUserId");

-- CreateIndex
CREATE UNIQUE INDEX "ShopMaterial_guildId_name_key" ON "ShopMaterial"("guildId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "ShopInventory_materialId_key" ON "ShopInventory"("materialId");

-- CreateIndex
CREATE UNIQUE INDEX "ShopProduct_guildId_name_key" ON "ShopProduct"("guildId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "ShopProductComponent_productId_materialId_key" ON "ShopProductComponent"("productId", "materialId");

-- CreateIndex
CREATE UNIQUE INDEX "ShopOrder_orderCode_key" ON "ShopOrder"("orderCode");

-- CreateIndex
CREATE UNIQUE INDEX "ShopSale_orderId_key" ON "ShopSale"("orderId");

-- AddForeignKey
ALTER TABLE "ShopInventory" ADD CONSTRAINT "ShopInventory_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "ShopMaterial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopProductComponent" ADD CONSTRAINT "ShopProductComponent_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ShopProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopProductComponent" ADD CONSTRAINT "ShopProductComponent_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "ShopMaterial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopProductPrice" ADD CONSTRAINT "ShopProductPrice_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ShopProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopProductPrice" ADD CONSTRAINT "ShopProductPrice_changedByUserId_fkey" FOREIGN KEY ("changedByUserId") REFERENCES "ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopOrder" ADD CONSTRAINT "ShopOrder_customerUserId_fkey" FOREIGN KEY ("customerUserId") REFERENCES "ShopUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopOrder" ADD CONSTRAINT "ShopOrder_acceptedByUserId_fkey" FOREIGN KEY ("acceptedByUserId") REFERENCES "ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopOrder" ADD CONSTRAINT "ShopOrder_rejectedByUserId_fkey" FOREIGN KEY ("rejectedByUserId") REFERENCES "ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopOrder" ADD CONSTRAINT "ShopOrder_closedByUserId_fkey" FOREIGN KEY ("closedByUserId") REFERENCES "ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopOrderItem" ADD CONSTRAINT "ShopOrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "ShopOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopOrderItem" ADD CONSTRAINT "ShopOrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ShopProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopInventoryMovement" ADD CONSTRAINT "ShopInventoryMovement_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "ShopMaterial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopInventoryMovement" ADD CONSTRAINT "ShopInventoryMovement_relatedOrderId_fkey" FOREIGN KEY ("relatedOrderId") REFERENCES "ShopOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopInventoryMovement" ADD CONSTRAINT "ShopInventoryMovement_performedById_fkey" FOREIGN KEY ("performedById") REFERENCES "ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopSale" ADD CONSTRAINT "ShopSale_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "ShopOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopSale" ADD CONSTRAINT "ShopSale_buyerUserId_fkey" FOREIGN KEY ("buyerUserId") REFERENCES "ShopUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopSale" ADD CONSTRAINT "ShopSale_registeredById_fkey" FOREIGN KEY ("registeredById") REFERENCES "ShopUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopWithdrawal" ADD CONSTRAINT "ShopWithdrawal_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "ShopMaterial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopWithdrawal" ADD CONSTRAINT "ShopWithdrawal_performedById_fkey" FOREIGN KEY ("performedById") REFERENCES "ShopUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopOrderEvent" ADD CONSTRAINT "ShopOrderEvent_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "ShopOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopOrderEvent" ADD CONSTRAINT "ShopOrderEvent_performedById_fkey" FOREIGN KEY ("performedById") REFERENCES "ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
