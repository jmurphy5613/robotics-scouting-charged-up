/*
  Warnings:

  - You are about to drop the column `gamePieces` on the `Match` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Match" DROP COLUMN "gamePieces",
ADD COLUMN     "conesScored" INTEGER[],
ADD COLUMN     "conesScoredAuto" INTEGER[],
ADD COLUMN     "cubesScored" INTEGER[],
ADD COLUMN     "cubesScoredAuto" INTEGER[];
