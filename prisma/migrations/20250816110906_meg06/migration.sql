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
    "Cree_par" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "bien_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_bien" ("Cree_par", "Nom", "Type", "bien_type", "id", "prix", "stock") SELECT "Cree_par", "Nom", "Type", "bien_type", "id", "prix", "stock" FROM "bien";
DROP TABLE "bien";
ALTER TABLE "new_bien" RENAME TO "bien";
CREATE TABLE "new_document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "template_id" INTEGER NOT NULL,
    "CIN" TEXT NOT NULL,
    "data_json" TEXT NOT NULL,
    "Cree_par" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "document_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "document_templates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "document_CIN_fkey" FOREIGN KEY ("CIN") REFERENCES "Client" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "document_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_document" ("CIN", "Cree_par", "data_json", "id", "template_id") SELECT "CIN", "Cree_par", "data_json", "id", "template_id" FROM "document";
DROP TABLE "document";
ALTER TABLE "new_document" RENAME TO "document";
CREATE TABLE "new_document_templates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sections_json" JSONB NOT NULL,
    "Cree_par" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "document_templates_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_document_templates" ("Cree_par", "id", "name", "sections_json") SELECT "Cree_par", "id", "name", "sections_json" FROM "document_templates";
DROP TABLE "document_templates";
ALTER TABLE "new_document_templates" RENAME TO "document_templates";
CREATE TABLE "new_facture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CIN" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "prix_total" REAL NOT NULL,
    "statut" TEXT NOT NULL,
    "notes" TEXT,
    "Cree_par" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "facture_CIN_fkey" FOREIGN KEY ("CIN") REFERENCES "Client" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "facture_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_facture" ("CIN", "Cree_par", "date", "id", "notes", "prix_total", "statut") SELECT "CIN", "Cree_par", "date", "id", "notes", "prix_total", "statut" FROM "facture";
DROP TABLE "facture";
ALTER TABLE "new_facture" RENAME TO "facture";
CREATE TABLE "new_facture_bien" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_facture" INTEGER NOT NULL,
    "id_bien" INTEGER NOT NULL,
    "type_bien" TEXT NOT NULL,
    "quantite" INTEGER NOT NULL,
    "Cree_par" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "facture_bien_id_facture_fkey" FOREIGN KEY ("id_facture") REFERENCES "facture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "facture_bien_id_bien_fkey" FOREIGN KEY ("id_bien") REFERENCES "bien" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "facture_bien_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_facture_bien" ("Cree_par", "id", "id_bien", "id_facture", "quantite", "type_bien") SELECT "Cree_par", "id", "id_bien", "id_facture", "quantite", "type_bien" FROM "facture_bien";
DROP TABLE "facture_bien";
ALTER TABLE "new_facture_bien" RENAME TO "facture_bien";
CREATE TABLE "new_paiment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_facture" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "montant_totale" REAL NOT NULL,
    "Cree_par" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "paiment_id_facture_fkey" FOREIGN KEY ("id_facture") REFERENCES "facture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "paiment_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_paiment" ("Cree_par", "date", "id", "id_facture", "montant_totale") SELECT "Cree_par", "date", "id", "id_facture", "montant_totale" FROM "paiment";
DROP TABLE "paiment";
ALTER TABLE "new_paiment" RENAME TO "paiment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
