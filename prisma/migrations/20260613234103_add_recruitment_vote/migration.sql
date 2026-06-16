-- CreateTable
CREATE TABLE "RecruitmentVote" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "vote" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecruitmentVote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RecruitmentVote_ticketId_idx" ON "RecruitmentVote"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "RecruitmentVote_ticketId_userId_key" ON "RecruitmentVote"("ticketId", "userId");

-- AddForeignKey
ALTER TABLE "RecruitmentVote" ADD CONSTRAINT "RecruitmentVote_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "RecruitmentTicket"("id") ON DELETE CASCADE ON UPDATE CASCADE;
