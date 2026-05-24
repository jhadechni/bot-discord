-- AlterTable
ALTER TABLE "GuildConfig" ADD COLUMN     "notifPanelChannelId" TEXT,
ADD COLUMN     "notifPanelMessageId" TEXT,
ADD COLUMN     "notifRoles" JSONB NOT NULL DEFAULT '[]';
