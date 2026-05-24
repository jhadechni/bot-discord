-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "public"."ClanPlayer" (
    "id" TEXT NOT NULL,
    "discord" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "minecraftNick" TEXT NOT NULL,
    "rank" TEXT NOT NULL,
    "joinedAt" DATE NOT NULL,
    "country" TEXT NOT NULL,
    "utcOffset" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'activo',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "minecraftRank" TEXT NOT NULL DEFAULT 'miembro',

    CONSTRAINT "ClanPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FilterWord" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "addedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FilterWord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GuildConfig" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "welcomeChannelId" TEXT,
    "logsChannelId" TEXT,
    "logsModChannelId" TEXT,
    "logsAutomodChannelId" TEXT,
    "logsRecruitChannelId" TEXT,
    "logsJoinsChannelId" TEXT,
    "logsLeavesChannelId" TEXT,
    "suggestionsChannelId" TEXT,
    "recruitmentCategoryId" TEXT,
    "visitorRoleId" TEXT,
    "aspirantRoleId" TEXT,
    "liderRoleId" TEXT,
    "coLiderRoleId" TEXT,
    "aquarisRoleId" TEXT,
    "staffRoleId" TEXT,
    "levelUpChannelId" TEXT,
    "boostChannelId" TEXT,
    "shopStaffChannelId" TEXT,
    "shopCategoryId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "farewellChannelId" TEXT,

    CONSTRAINT "GuildConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MapBackground" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT,
    "x1" INTEGER NOT NULL DEFAULT -10774,
    "z1" INTEGER NOT NULL DEFAULT 15731,
    "x2" INTEGER NOT NULL DEFAULT -6588,
    "z2" INTEGER NOT NULL DEFAULT 22171,

    CONSTRAINT "MapBackground_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ModerationLog" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "moderatorId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "reason" TEXT,
    "duration" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ModerationLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."NicknameRole" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "emoji" TEXT,

    CONSTRAINT "NicknameRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProtectionMember" (
    "id" TEXT NOT NULL,
    "protectionId" TEXT NOT NULL,
    "playerName" TEXT NOT NULL,
    "level" TEXT NOT NULL DEFAULT 'miembro',
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProtectionMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RecruitmentTicket" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "channelId" TEXT,
    "minecraftRole" TEXT,
    "answers" JSONB,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "staleAlertedAt" TIMESTAMP(3),

    CONSTRAINT "RecruitmentTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Reminder" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "triggerAt" TIMESTAMP(3) NOT NULL,
    "intervalMin" INTEGER,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "templateId" TEXT,

    CONSTRAINT "Reminder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ReminderTemplate" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "cooldownMin" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReminderTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ShopAppliedDiscount" (
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

-- CreateTable
CREATE TABLE "public"."ShopCategory" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ShopDiscountPolicy" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "productId" TEXT,
    "minQuantity" INTEGER,
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
CREATE TABLE "public"."ShopInventory" (
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
CREATE TABLE "public"."ShopInventoryMovement" (
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
CREATE TABLE "public"."ShopMaterial" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "baseUnit" TEXT NOT NULL DEFAULT 'item',
    "stackSize" INTEGER NOT NULL DEFAULT 64,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopMaterial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ShopOrder" (
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
    "totalDiscountAmount" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "totalAmount" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "acceptedAt" TIMESTAMP(3),
    "rejectedAt" TIMESTAMP(3),
    "closedAt" TIMESTAMP(3),
    "cancelledAt" TIMESTAMP(3),

    CONSTRAINT "ShopOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ShopOrderEvent" (
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

-- CreateTable
CREATE TABLE "public"."ShopOrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DECIMAL(65,30) NOT NULL,
    "grossLineTotal" DECIMAL(65,30) NOT NULL,
    "netLineTotal" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "reservedQuantity" INTEGER NOT NULL DEFAULT 0,
    "deliveredQuantity" INTEGER NOT NULL DEFAULT 0,
    "notes" TEXT,

    CONSTRAINT "ShopOrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ShopProduct" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'general',
    "subcategory" TEXT NOT NULL DEFAULT 'otros',
    "description" TEXT,
    "baseMaterialId" TEXT,
    "presentationType" TEXT NOT NULL DEFAULT 'custom',
    "presentationQuantity" INTEGER NOT NULL DEFAULT 1,
    "presentationLabel" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "additionalCategories" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "additionalCategoryAssignments" JSONB NOT NULL DEFAULT '[]',

    CONSTRAINT "ShopProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ShopProductComponent" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "quantityRequired" INTEGER NOT NULL,

    CONSTRAINT "ShopProductComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ShopProductPrice" (
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
CREATE TABLE "public"."ShopSale" (
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
CREATE TABLE "public"."ShopSubcategory" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopSubcategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ShopUser" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "discordUserId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "isStaff" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ShopWithdrawal" (
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
CREATE TABLE "public"."Suggestion" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "messageId" TEXT,
    "content" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Suggestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SuggestionVote" (
    "id" TEXT NOT NULL,
    "suggestionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "vote" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SuggestionVote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserActivity" (
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
CREATE TABLE "public"."WorldProtection" (
    "id" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "startX" INTEGER NOT NULL,
    "startZ" INTEGER NOT NULL,
    "endX" INTEGER NOT NULL,
    "endZ" INTEGER NOT NULL,
    "isOwned" BOOLEAN NOT NULL DEFAULT true,
    "color" TEXT NOT NULL DEFAULT '#4cd7f6',
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorldProtection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClanPlayer_discord_key" ON "public"."ClanPlayer"("discord" ASC);

-- CreateIndex
CREATE INDEX "ClanPlayer_joinedAt_idx" ON "public"."ClanPlayer"("joinedAt" ASC);

-- CreateIndex
CREATE INDEX "ClanPlayer_minecraftNick_idx" ON "public"."ClanPlayer"("minecraftNick" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "ClanPlayer_minecraftNick_key" ON "public"."ClanPlayer"("minecraftNick" ASC);

-- CreateIndex
CREATE INDEX "ClanPlayer_minecraftRank_idx" ON "public"."ClanPlayer"("minecraftRank" ASC);

-- CreateIndex
CREATE INDEX "ClanPlayer_status_idx" ON "public"."ClanPlayer"("status" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "FilterWord_guildId_word_key" ON "public"."FilterWord"("guildId" ASC, "word" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "GuildConfig_guildId_key" ON "public"."GuildConfig"("guildId" ASC);

-- CreateIndex
CREATE INDEX "ModerationLog_guildId_createdAt_idx" ON "public"."ModerationLog"("guildId" ASC, "createdAt" ASC);

-- CreateIndex
CREATE INDEX "ModerationLog_guildId_moderatorId_createdAt_idx" ON "public"."ModerationLog"("guildId" ASC, "moderatorId" ASC, "createdAt" ASC);

-- CreateIndex
CREATE INDEX "ModerationLog_guildId_targetId_createdAt_idx" ON "public"."ModerationLog"("guildId" ASC, "targetId" ASC, "createdAt" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "NicknameRole_guildId_roleId_key" ON "public"."NicknameRole"("guildId" ASC, "roleId" ASC);

-- CreateIndex
CREATE INDEX "ProtectionMember_playerName_idx" ON "public"."ProtectionMember"("playerName" ASC);

-- CreateIndex
CREATE INDEX "ProtectionMember_protectionId_idx" ON "public"."ProtectionMember"("protectionId" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "ProtectionMember_protectionId_playerName_key" ON "public"."ProtectionMember"("protectionId" ASC, "playerName" ASC);

-- CreateIndex
CREATE INDEX "RecruitmentTicket_guildId_status_createdAt_idx" ON "public"."RecruitmentTicket"("guildId" ASC, "status" ASC, "createdAt" ASC);

-- CreateIndex
CREATE INDEX "RecruitmentTicket_guildId_userId_idx" ON "public"."RecruitmentTicket"("guildId" ASC, "userId" ASC);

-- CreateIndex
CREATE INDEX "Reminder_active_triggerAt_idx" ON "public"."Reminder"("active" ASC, "triggerAt" ASC);

-- CreateIndex
CREATE INDEX "Reminder_guildId_userId_idx" ON "public"."Reminder"("guildId" ASC, "userId" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "ReminderTemplate_guildId_name_key" ON "public"."ReminderTemplate"("guildId" ASC, "name" ASC);

-- CreateIndex
CREATE INDEX "ShopAppliedDiscount_appliedByUserId_idx" ON "public"."ShopAppliedDiscount"("appliedByUserId" ASC);

-- CreateIndex
CREATE INDEX "ShopAppliedDiscount_discountPolicyId_idx" ON "public"."ShopAppliedDiscount"("discountPolicyId" ASC);

-- CreateIndex
CREATE INDEX "ShopAppliedDiscount_orderId_idx" ON "public"."ShopAppliedDiscount"("orderId" ASC);

-- CreateIndex
CREATE INDEX "ShopAppliedDiscount_orderItemId_idx" ON "public"."ShopAppliedDiscount"("orderItemId" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "ShopCategory_guildId_slug_key" ON "public"."ShopCategory"("guildId" ASC, "slug" ASC);

-- CreateIndex
CREATE INDEX "ShopCategory_isActive_sortOrder_idx" ON "public"."ShopCategory"("isActive" ASC, "sortOrder" ASC);

-- CreateIndex
CREATE INDEX "ShopDiscountPolicy_createdByUserId_idx" ON "public"."ShopDiscountPolicy"("createdByUserId" ASC);

-- CreateIndex
CREATE INDEX "ShopDiscountPolicy_endsAt_idx" ON "public"."ShopDiscountPolicy"("endsAt" ASC);

-- CreateIndex
CREATE INDEX "ShopDiscountPolicy_isActive_priority_createdAt_idx" ON "public"."ShopDiscountPolicy"("isActive" ASC, "priority" ASC, "createdAt" ASC);

-- CreateIndex
CREATE INDEX "ShopDiscountPolicy_productId_idx" ON "public"."ShopDiscountPolicy"("productId" ASC);

-- CreateIndex
CREATE INDEX "ShopDiscountPolicy_startsAt_idx" ON "public"."ShopDiscountPolicy"("startsAt" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "ShopInventory_materialId_key" ON "public"."ShopInventory"("materialId" ASC);

-- CreateIndex
CREATE INDEX "ShopInventoryMovement_createdAt_idx" ON "public"."ShopInventoryMovement"("createdAt" ASC);

-- CreateIndex
CREATE INDEX "ShopInventoryMovement_materialId_idx" ON "public"."ShopInventoryMovement"("materialId" ASC);

-- CreateIndex
CREATE INDEX "ShopInventoryMovement_movementType_createdAt_idx" ON "public"."ShopInventoryMovement"("movementType" ASC, "createdAt" ASC);

-- CreateIndex
CREATE INDEX "ShopInventoryMovement_performedById_idx" ON "public"."ShopInventoryMovement"("performedById" ASC);

-- CreateIndex
CREATE INDEX "ShopInventoryMovement_relatedOrderId_idx" ON "public"."ShopInventoryMovement"("relatedOrderId" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "ShopMaterial_guildId_name_key" ON "public"."ShopMaterial"("guildId" ASC, "name" ASC);

-- CreateIndex
CREATE INDEX "ShopMaterial_isActive_name_idx" ON "public"."ShopMaterial"("isActive" ASC, "name" ASC);

-- CreateIndex
CREATE INDEX "ShopMaterial_name_idx" ON "public"."ShopMaterial"("name" ASC);

-- CreateIndex
CREATE INDEX "ShopOrder_acceptedByUserId_idx" ON "public"."ShopOrder"("acceptedByUserId" ASC);

-- CreateIndex
CREATE INDEX "ShopOrder_closedByUserId_idx" ON "public"."ShopOrder"("closedByUserId" ASC);

-- CreateIndex
CREATE INDEX "ShopOrder_customerUserId_idx" ON "public"."ShopOrder"("customerUserId" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "ShopOrder_orderCode_key" ON "public"."ShopOrder"("orderCode" ASC);

-- CreateIndex
CREATE INDEX "ShopOrder_rejectedByUserId_idx" ON "public"."ShopOrder"("rejectedByUserId" ASC);

-- CreateIndex
CREATE INDEX "ShopOrder_status_createdAt_idx" ON "public"."ShopOrder"("status" ASC, "createdAt" ASC);

-- CreateIndex
CREATE INDEX "ShopOrderEvent_orderId_createdAt_idx" ON "public"."ShopOrderEvent"("orderId" ASC, "createdAt" ASC);

-- CreateIndex
CREATE INDEX "ShopOrderEvent_performedById_idx" ON "public"."ShopOrderEvent"("performedById" ASC);

-- CreateIndex
CREATE INDEX "ShopOrderItem_orderId_idx" ON "public"."ShopOrderItem"("orderId" ASC);

-- CreateIndex
CREATE INDEX "ShopOrderItem_productId_idx" ON "public"."ShopOrderItem"("productId" ASC);

-- CreateIndex
CREATE INDEX "ShopProduct_baseMaterialId_idx" ON "public"."ShopProduct"("baseMaterialId" ASC);

-- CreateIndex
CREATE INDEX "ShopProduct_isActive_name_idx" ON "public"."ShopProduct"("isActive" ASC, "name" ASC);

-- CreateIndex
CREATE INDEX "ShopProduct_productType_category_name_idx" ON "public"."ShopProduct"("productType" ASC, "category" ASC, "name" ASC);

-- CreateIndex
CREATE INDEX "ShopProduct_productType_isActive_idx" ON "public"."ShopProduct"("productType" ASC, "isActive" ASC);

-- CreateIndex
CREATE INDEX "ShopProductComponent_materialId_idx" ON "public"."ShopProductComponent"("materialId" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "ShopProductComponent_productId_materialId_key" ON "public"."ShopProductComponent"("productId" ASC, "materialId" ASC);

-- CreateIndex
CREATE INDEX "ShopProductPrice_changedByUserId_idx" ON "public"."ShopProductPrice"("changedByUserId" ASC);

-- CreateIndex
CREATE INDEX "ShopProductPrice_productId_validTo_validFrom_idx" ON "public"."ShopProductPrice"("productId" ASC, "validTo" ASC, "validFrom" ASC);

-- CreateIndex
CREATE INDEX "ShopSale_buyerUserId_idx" ON "public"."ShopSale"("buyerUserId" ASC);

-- CreateIndex
CREATE INDEX "ShopSale_guildId_soldAt_idx" ON "public"."ShopSale"("guildId" ASC, "soldAt" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "ShopSale_orderId_key" ON "public"."ShopSale"("orderId" ASC);

-- CreateIndex
CREATE INDEX "ShopSale_registeredById_idx" ON "public"."ShopSale"("registeredById" ASC);

-- CreateIndex
CREATE INDEX "ShopSubcategory_categoryId_isActive_sortOrder_idx" ON "public"."ShopSubcategory"("categoryId" ASC, "isActive" ASC, "sortOrder" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "ShopSubcategory_categoryId_slug_key" ON "public"."ShopSubcategory"("categoryId" ASC, "slug" ASC);

-- CreateIndex
CREATE INDEX "ShopSubcategory_categoryId_sortOrder_idx" ON "public"."ShopSubcategory"("categoryId" ASC, "sortOrder" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "ShopUser_guildId_discordUserId_key" ON "public"."ShopUser"("guildId" ASC, "discordUserId" ASC);

-- CreateIndex
CREATE INDEX "ShopWithdrawal_guildId_createdAt_idx" ON "public"."ShopWithdrawal"("guildId" ASC, "createdAt" ASC);

-- CreateIndex
CREATE INDEX "ShopWithdrawal_materialId_idx" ON "public"."ShopWithdrawal"("materialId" ASC);

-- CreateIndex
CREATE INDEX "ShopWithdrawal_performedById_idx" ON "public"."ShopWithdrawal"("performedById" ASC);

-- CreateIndex
CREATE INDEX "Suggestion_guildId_status_createdAt_idx" ON "public"."Suggestion"("guildId" ASC, "status" ASC, "createdAt" ASC);

-- CreateIndex
CREATE INDEX "Suggestion_userId_createdAt_idx" ON "public"."Suggestion"("userId" ASC, "createdAt" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "SuggestionVote_suggestionId_userId_key" ON "public"."SuggestionVote"("suggestionId" ASC, "userId" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "UserActivity_guildId_userId_key" ON "public"."UserActivity"("guildId" ASC, "userId" ASC);

-- CreateIndex
CREATE INDEX "WorldProtection_isOwned_idx" ON "public"."WorldProtection"("isOwned" ASC);

-- AddForeignKey
ALTER TABLE "public"."ProtectionMember" ADD CONSTRAINT "ProtectionMember_protectionId_fkey" FOREIGN KEY ("protectionId") REFERENCES "public"."WorldProtection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reminder" ADD CONSTRAINT "Reminder_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "public"."ReminderTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopAppliedDiscount" ADD CONSTRAINT "ShopAppliedDiscount_appliedByUserId_fkey" FOREIGN KEY ("appliedByUserId") REFERENCES "public"."ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopAppliedDiscount" ADD CONSTRAINT "ShopAppliedDiscount_discountPolicyId_fkey" FOREIGN KEY ("discountPolicyId") REFERENCES "public"."ShopDiscountPolicy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopAppliedDiscount" ADD CONSTRAINT "ShopAppliedDiscount_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."ShopOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopAppliedDiscount" ADD CONSTRAINT "ShopAppliedDiscount_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "public"."ShopOrderItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopDiscountPolicy" ADD CONSTRAINT "ShopDiscountPolicy_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "public"."ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopDiscountPolicy" ADD CONSTRAINT "ShopDiscountPolicy_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."ShopProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopInventory" ADD CONSTRAINT "ShopInventory_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "public"."ShopMaterial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopInventoryMovement" ADD CONSTRAINT "ShopInventoryMovement_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "public"."ShopMaterial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopInventoryMovement" ADD CONSTRAINT "ShopInventoryMovement_performedById_fkey" FOREIGN KEY ("performedById") REFERENCES "public"."ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopInventoryMovement" ADD CONSTRAINT "ShopInventoryMovement_relatedOrderId_fkey" FOREIGN KEY ("relatedOrderId") REFERENCES "public"."ShopOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopOrder" ADD CONSTRAINT "ShopOrder_acceptedByUserId_fkey" FOREIGN KEY ("acceptedByUserId") REFERENCES "public"."ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopOrder" ADD CONSTRAINT "ShopOrder_closedByUserId_fkey" FOREIGN KEY ("closedByUserId") REFERENCES "public"."ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopOrder" ADD CONSTRAINT "ShopOrder_customerUserId_fkey" FOREIGN KEY ("customerUserId") REFERENCES "public"."ShopUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopOrder" ADD CONSTRAINT "ShopOrder_rejectedByUserId_fkey" FOREIGN KEY ("rejectedByUserId") REFERENCES "public"."ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopOrderEvent" ADD CONSTRAINT "ShopOrderEvent_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."ShopOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopOrderEvent" ADD CONSTRAINT "ShopOrderEvent_performedById_fkey" FOREIGN KEY ("performedById") REFERENCES "public"."ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopOrderItem" ADD CONSTRAINT "ShopOrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."ShopOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopOrderItem" ADD CONSTRAINT "ShopOrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."ShopProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopProduct" ADD CONSTRAINT "ShopProduct_baseMaterialId_fkey" FOREIGN KEY ("baseMaterialId") REFERENCES "public"."ShopMaterial"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopProductComponent" ADD CONSTRAINT "ShopProductComponent_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "public"."ShopMaterial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopProductComponent" ADD CONSTRAINT "ShopProductComponent_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."ShopProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopProductPrice" ADD CONSTRAINT "ShopProductPrice_changedByUserId_fkey" FOREIGN KEY ("changedByUserId") REFERENCES "public"."ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopProductPrice" ADD CONSTRAINT "ShopProductPrice_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."ShopProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopSale" ADD CONSTRAINT "ShopSale_buyerUserId_fkey" FOREIGN KEY ("buyerUserId") REFERENCES "public"."ShopUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopSale" ADD CONSTRAINT "ShopSale_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."ShopOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopSale" ADD CONSTRAINT "ShopSale_registeredById_fkey" FOREIGN KEY ("registeredById") REFERENCES "public"."ShopUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopSubcategory" ADD CONSTRAINT "ShopSubcategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."ShopCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopWithdrawal" ADD CONSTRAINT "ShopWithdrawal_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "public"."ShopMaterial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShopWithdrawal" ADD CONSTRAINT "ShopWithdrawal_performedById_fkey" FOREIGN KEY ("performedById") REFERENCES "public"."ShopUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SuggestionVote" ADD CONSTRAINT "SuggestionVote_suggestionId_fkey" FOREIGN KEY ("suggestionId") REFERENCES "public"."Suggestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

