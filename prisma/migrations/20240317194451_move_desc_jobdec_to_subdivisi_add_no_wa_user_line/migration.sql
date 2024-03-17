/*
  Warnings:

  - You are about to drop the column `deskripsi` on the `Divisi` table. All the data in the column will be lost.
  - You are about to drop the column `jobDesc` on the `Divisi` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `ContactLine` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nomor]` on the table `ContactWA` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `ContactLine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomor` to the `ContactWA` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `HR` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deskripsi` to the `Subdivisi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobDesc` to the `Subdivisi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `Subdivisi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContactLine" ADD COLUMN     "username" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ContactWA" ADD COLUMN     "nomor" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Divisi" DROP COLUMN "deskripsi",
DROP COLUMN "jobDesc";

-- AlterTable
ALTER TABLE "HR" ADD COLUMN     "nama" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subdivisi" ADD COLUMN     "deskripsi" TEXT NOT NULL,
ADD COLUMN     "jobDesc" TEXT NOT NULL,
ADD COLUMN     "nama" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ContactLine_username_key" ON "ContactLine"("username");

-- CreateIndex
CREATE UNIQUE INDEX "ContactWA_nomor_key" ON "ContactWA"("nomor");
