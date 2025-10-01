-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_bien" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nom" TEXT NOT NULL,
    "bien_type" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "prix" REAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "cabinet" TEXT NOT NULL DEFAULT 'Biohacking',
    "Cree_par" TEXT NOT NULL,
    "therapeute" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "bien_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "bien_therapeute_fkey" FOREIGN KEY ("therapeute") REFERENCES "Utilisateur" ("CIN") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_bien" ("Cree_par", "Nom", "Type", "bien_type", "cabinet", "created_at", "id", "prix", "stock", "updated_at") SELECT "Cree_par", "Nom", "Type", "bien_type", "cabinet", "created_at", "id", "prix", "stock", "updated_at" FROM "bien";
DROP TABLE "bien";
ALTER TABLE "new_bien" RENAME TO "bien";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
