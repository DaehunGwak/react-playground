/*
  Warnings:

  - Added the required column `userId` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tweet" ADD COLUMN     "imageUrls" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "userId" UUID NOT NULL;

-- CreateTable
CREATE TABLE "Profile" (
    "userId" UUID NOT NULL,
    "nickname" TEXT NOT NULL,
    "imageUrl" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "userId" UUID NOT NULL,
    "tweetId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Like_tweetId_idx" ON "Like"("tweetId");

-- CreateIndex
CREATE INDEX "Like_userId_tweetId_idx" ON "Like"("userId", "tweetId");

-- CreateIndex
CREATE INDEX "Tweet_userId_createdAt_idx" ON "Tweet"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "Tweet_createdAt_idx" ON "Tweet"("createdAt");
