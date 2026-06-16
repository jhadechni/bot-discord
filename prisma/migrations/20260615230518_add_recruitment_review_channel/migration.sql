-- AlterTable
ALTER TABLE "GuildConfig" ADD COLUMN     "recruitmentReviewChannelId" TEXT;

-- AlterTable
ALTER TABLE "RecruitmentVote" ALTER COLUMN "username" DROP DEFAULT;
