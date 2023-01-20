-- CreateTable
CREATE TABLE "Scouter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Scouter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "matchNumber" INTEGER NOT NULL,
    "teamNumber" INTEGER NOT NULL,
    "scouterId" INTEGER NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_scouterId_fkey" FOREIGN KEY ("scouterId") REFERENCES "Scouter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
