-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Entreprise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ICE" TEXT NOT NULL,
    "CNSS" TEXT NOT NULL,
    "RC" TEXT NOT NULL,
    "IF" TEXT NOT NULL,
    "RIB" TEXT NOT NULL,
    "patente" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Entreprise" ("CNSS", "ICE", "IF", "RC", "RIB", "adresse", "created_at", "id", "patente") SELECT "CNSS", "ICE", "IF", "RC", "RIB", "adresse", "created_at", "id", "patente" FROM "Entreprise";
DROP TABLE "Entreprise";
ALTER TABLE "new_Entreprise" RENAME TO "Entreprise";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
