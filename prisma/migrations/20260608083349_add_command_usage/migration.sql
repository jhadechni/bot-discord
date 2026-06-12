-- CreateTable
CREATE TABLE "CommandUsage" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "commandName" TEXT NOT NULL,
    "subcommandGroup" TEXT,
    "subcommand" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommandUsage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CommandUsage_guildId_createdAt_idx" ON "CommandUsage"("guildId", "createdAt");

-- CreateIndex
CREATE INDEX "CommandUsage_userId_idx" ON "CommandUsage"("userId");

-- CreateIndex
CREATE INDEX "CommandUsage_commandName_subcommandGroup_subcommand_idx" ON "CommandUsage"("commandName", "subcommandGroup", "subcommand");
