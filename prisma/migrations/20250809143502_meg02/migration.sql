/*
  Warnings:

  - You are about to alter the column `CNSS` on the `Entreprise` table. The data in that column could be lost. The data in that column will be cast from `String` to `BigInt`.
  - You are about to alter the column `ICE` on the `Entreprise` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.
  - You are about to alter the column `IF` on the `Entreprise` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.
  - You are about to alter the column `RC` on the `Entreprise` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.
  - You are about to alter the column `RIB` on the `Entreprise` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.
  - You are about to alter the column `patente` on the `Entreprise` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Entreprise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ICE" REAL NOT NULL,
    "CNSS" BIGINT NOT NULL,
    "RC" REAL NOT NULL,
    "IF" REAL NOT NULL,
    "RIB" REAL NOT NULL,
    "patente" REAL NOT NULL,
    "adresse" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Entreprise" ("CNSS", "ICE", "IF", "RC", "RIB", "adresse", "created_at", "id", "patente") SELECT "CNSS", "ICE", "IF", "RC", "RIB", "adresse", "created_at", "id", "patente" FROM "Entreprise";
DROP TABLE "Entreprise";
ALTER TABLE "new_Entreprise" RENAME TO "Entreprise";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
