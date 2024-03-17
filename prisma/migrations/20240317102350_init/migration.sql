-- CreateTable
CREATE TABLE "Divisi" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "jobDesc" TEXT NOT NULL,

    CONSTRAINT "Divisi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subdivisi" (
    "id" TEXT NOT NULL,
    "idDivisi" TEXT NOT NULL,

    CONSTRAINT "Subdivisi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HR" (
    "id" TEXT NOT NULL,
    "idSubdivisi" TEXT NOT NULL,

    CONSTRAINT "HR_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactHR" (
    "id" TEXT NOT NULL,
    "idHR" TEXT NOT NULL,

    CONSTRAINT "ContactHR_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactWA" (
    "idContact" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ContactLine" (
    "idContact" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Divisi_nama_key" ON "Divisi"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "Subdivisi_idDivisi_key" ON "Subdivisi"("idDivisi");

-- CreateIndex
CREATE UNIQUE INDEX "HR_idSubdivisi_key" ON "HR"("idSubdivisi");

-- CreateIndex
CREATE UNIQUE INDEX "ContactHR_idHR_key" ON "ContactHR"("idHR");

-- CreateIndex
CREATE UNIQUE INDEX "ContactWA_idContact_key" ON "ContactWA"("idContact");

-- CreateIndex
CREATE UNIQUE INDEX "ContactLine_idContact_key" ON "ContactLine"("idContact");

-- AddForeignKey
ALTER TABLE "Subdivisi" ADD CONSTRAINT "Subdivisi_idDivisi_fkey" FOREIGN KEY ("idDivisi") REFERENCES "Divisi"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HR" ADD CONSTRAINT "HR_idSubdivisi_fkey" FOREIGN KEY ("idSubdivisi") REFERENCES "Subdivisi"("idDivisi") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactHR" ADD CONSTRAINT "ContactHR_idHR_fkey" FOREIGN KEY ("idHR") REFERENCES "HR"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactWA" ADD CONSTRAINT "ContactWA_idContact_fkey" FOREIGN KEY ("idContact") REFERENCES "ContactHR"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactLine" ADD CONSTRAINT "ContactLine_idContact_fkey" FOREIGN KEY ("idContact") REFERENCES "ContactHR"("id") ON DELETE CASCADE ON UPDATE CASCADE;
