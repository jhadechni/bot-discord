-- CreateTable
CREATE TABLE "MonthlyActivity" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "yearMonth" TEXT NOT NULL,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "messageCount" INTEGER NOT NULL DEFAULT 0,
    "voiceMinutes" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MonthlyActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MonthlyActivity_guildId_yearMonth_idx" ON "MonthlyActivity"("guildId", "yearMonth");

-- CreateIndex
CREATE UNIQUE INDEX "MonthlyActivity_guildId_userId_yearMonth_key" ON "MonthlyActivity"("guildId", "userId", "yearMonth");
