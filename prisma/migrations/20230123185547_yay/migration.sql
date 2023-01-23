/*
  Warnings:

  - Added the required column `defensive` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endAutoStatus` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endGameStatus` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feedLocation` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feederType` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "defensive" BOOLEAN NOT NULL,
ADD COLUMN     "endAutoStatus" TEXT NOT NULL,
ADD COLUMN     "endGameStatus" TEXT NOT NULL,
ADD COLUMN     "feedLocation" TEXT NOT NULL,
ADD COLUMN     "feederType" TEXT NOT NULL,
ADD COLUMN     "gamePieces" TEXT[],
ADD COLUMN     "notes" TEXT NOT NULL;
