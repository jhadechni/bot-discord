/*
  Warnings:

  - Added the required column `updatedAt` to the `RecruitmentTicket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GuildConfig" ADD COLUMN     "aquarisRoleId" TEXT,
ADD COLUMN     "coLiderRoleId" TEXT,
ADD COLUMN     "liderRoleId" TEXT,
ADD COLUMN     "recruitmentCategoryId" TEXT,
ADD COLUMN     "staffRoleId" TEXT,
ADD COLUMN     "suggestionsChannelId" TEXT;

-- AlterTable
ALTER TABLE "RecruitmentTicket" ADD COLUMN     "answers" JSONB,
ADD COLUMN     "channelId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Suggestion" ADD COLUMN     "messageId" TEXT;

-- CreateTable
CREATE TABLE "ModerationLog" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "moderatorId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "reason" TEXT,
    "duration" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ModerationLog_pkey" PRIMARY KEY ("id")
);
