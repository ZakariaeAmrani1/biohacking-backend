/*
  Warnings:

  - You are about to drop the column `methode_paiment` on the `facture` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_facture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CIN" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "prix_total" REAL NOT NULL,
    "statut" TEXT NOT NULL,
    "notes" TEXT,
    "Cree_par" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "date_paiement" DATETIME,
    "methode_paiement" TEXT,
    "cheque_numero" TEXT,
    "cheque_banque" TEXT,
    "cheque_date_tirage" DATETIME,
    CONSTRAINT "facture_CIN_fkey" FOREIGN KEY ("CIN") REFERENCES "Client" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "facture_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_facture" ("CIN", "Cree_par", "cheque_banque", "cheque_date_tirage", "cheque_numero", "created_at", "date", "date_paiement", "id", "notes", "prix_total", "statut", "updated_at") SELECT "CIN", "Cree_par", "cheque_banque", "cheque_date_tirage", "cheque_numero", "created_at", "date", "date_paiement", "id", "notes", "prix_total", "statut", "updated_at" FROM "facture";
DROP TABLE "facture";
ALTER TABLE "new_facture" RENAME TO "facture";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
