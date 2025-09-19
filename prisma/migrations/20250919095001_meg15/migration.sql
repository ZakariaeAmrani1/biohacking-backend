/*
  Warnings:

  - Added the required column `CIN` to the `scannedDocument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Cree_par` to the `scannedDocument` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_scannedDocument" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "CIN" TEXT NOT NULL,
    "description" TEXT,
    "Cree_par" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "scannedDocument_CIN_fkey" FOREIGN KEY ("CIN") REFERENCES "Client" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "scannedDocument_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_scannedDocument" ("createdAt", "filePath", "id", "title", "updatedAt") SELECT "createdAt", "filePath", "id", "title", "updatedAt" FROM "scannedDocument";
DROP TABLE "scannedDocument";
ALTER TABLE "new_scannedDocument" RENAME TO "scannedDocument";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
