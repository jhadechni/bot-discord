/*
  Warnings:

  - Added the required column `username` to the `RecruitmentVote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RecruitmentVote" ADD COLUMN "username" TEXT NOT NULL DEFAULT '';
