-- AlterTable
ALTER TABLE "GuildConfig" ADD COLUMN     "expulsionReasons" JSONB NOT NULL DEFAULT '[]';
