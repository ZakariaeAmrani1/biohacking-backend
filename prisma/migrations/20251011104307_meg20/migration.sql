-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_facture_bien" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_facture" INTEGER,
    "id_bien" INTEGER NOT NULL,
    "type_bien" TEXT NOT NULL,
    "quantite" INTEGER NOT NULL,
    "prix" REAL NOT NULL,
    "Cree_par" TEXT NOT NULL,
    "movementType" TEXT NOT NULL DEFAULT 'OUT',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "facture_bien_id_facture_fkey" FOREIGN KEY ("id_facture") REFERENCES "facture" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "facture_bien_id_bien_fkey" FOREIGN KEY ("id_bien") REFERENCES "bien" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "facture_bien_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_facture_bien" ("Cree_par", "created_at", "id", "id_bien", "id_facture", "movementType", "prix", "quantite", "type_bien", "updated_at") SELECT "Cree_par", "created_at", "id", "id_bien", "id_facture", "movementType", "prix", "quantite", "type_bien", "updated_at" FROM "facture_bien";
DROP TABLE "facture_bien";
ALTER TABLE "new_facture_bien" RENAME TO "facture_bien";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
