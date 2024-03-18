-- DropForeignKey
ALTER TABLE "HR" DROP CONSTRAINT "HR_idSubdivisi_fkey";

-- AddForeignKey
ALTER TABLE "HR" ADD CONSTRAINT "HR_idSubdivisi_fkey" FOREIGN KEY ("idSubdivisi") REFERENCES "Subdivisi"("id") ON DELETE CASCADE ON UPDATE CASCADE;
