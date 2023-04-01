/*
  Warnings:

  - You are about to drop the column `scouterId` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the `Scouter` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `scouter` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_scouterId_fkey";

-- AlterTable
ALTER TABLE "Match" DROP COLUMN "scouterId",
ADD COLUMN     "scouter" TEXT NOT NULL;

-- DropTable
DROP TABLE "Scouter";
