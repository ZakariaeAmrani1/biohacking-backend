-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CIN" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "date_naissance" DATETIME NOT NULL,
    "adresse" TEXT NOT NULL,
    "numero_telephone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "groupe_sanguin" TEXT NOT NULL,
    "antecedents" TEXT,
    "allergies" TEXT,
    "commentaire" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "Cree_par" TEXT NOT NULL,
    CONSTRAINT "Client_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Client" ("CIN", "Cree_par", "adresse", "allergies", "antecedents", "commentaire", "created_at", "date_naissance", "email", "groupe_sanguin", "id", "nom", "numero_telephone", "prenom", "updated_at") SELECT "CIN", "Cree_par", "adresse", "allergies", "antecedents", "commentaire", "created_at", "date_naissance", "email", "groupe_sanguin", "id", "nom", "numero_telephone", "prenom", "updated_at" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_CIN_key" ON "Client"("CIN");
CREATE TABLE "new_Entreprise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ICE" TEXT NOT NULL,
    "CNSS" TEXT NOT NULL,
    "RC" TEXT NOT NULL,
    "IF" TEXT NOT NULL,
    "RIB" TEXT NOT NULL,
    "patente" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Entreprise" ("CNSS", "ICE", "IF", "RC", "RIB", "adresse", "created_at", "id", "patente", "updated_at") SELECT "CNSS", "ICE", "IF", "RC", "RIB", "adresse", "created_at", "id", "patente", "updated_at" FROM "Entreprise";
DROP TABLE "Entreprise";
ALTER TABLE "new_Entreprise" RENAME TO "Entreprise";
CREATE TABLE "new_Utilisateur" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CIN" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "date_naissance" DATETIME NOT NULL,
    "adresse" TEXT NOT NULL,
    "numero_telephone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Utilisateur" ("CIN", "adresse", "created_at", "date_naissance", "email", "id", "nom", "numero_telephone", "password", "prenom", "role", "updated_at") SELECT "CIN", "adresse", "created_at", "date_naissance", "email", "id", "nom", "numero_telephone", "password", "prenom", "role", "updated_at" FROM "Utilisateur";
DROP TABLE "Utilisateur";
ALTER TABLE "new_Utilisateur" RENAME TO "Utilisateur";
CREATE UNIQUE INDEX "Utilisateur_CIN_key" ON "Utilisateur"("CIN");
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");
CREATE TABLE "new_bien" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nom" TEXT NOT NULL,
    "bien_type" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "prix" REAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "cabinet" TEXT NOT NULL DEFAULT 'Biohacking',
    "Cree_par" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "bien_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_bien" ("Cree_par", "Nom", "Type", "bien_type", "cabinet", "created_at", "id", "prix", "stock", "updated_at") SELECT "Cree_par", "Nom", "Type", "bien_type", "cabinet", "created_at", "id", "prix", "stock", "updated_at" FROM "bien";
DROP TABLE "bien";
ALTER TABLE "new_bien" RENAME TO "bien";
CREATE TABLE "new_document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "template_id" INTEGER NOT NULL,
    "CIN" TEXT NOT NULL,
    "data_json" JSONB NOT NULL,
    "Cree_par" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "document_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "document_templates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "document_CIN_fkey" FOREIGN KEY ("CIN") REFERENCES "Client" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "document_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_document" ("CIN", "Cree_par", "created_at", "data_json", "id", "template_id", "updated_at") SELECT "CIN", "Cree_par", "created_at", "data_json", "id", "template_id", "updated_at" FROM "document";
DROP TABLE "document";
ALTER TABLE "new_document" RENAME TO "document";
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
    CONSTRAINT "facture_CIN_fkey" FOREIGN KEY ("CIN") REFERENCES "Client" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "facture_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_facture" ("CIN", "Cree_par", "created_at", "date", "date_paiement", "id", "notes", "prix_total", "statut", "updated_at") SELECT "CIN", "Cree_par", "created_at", "date", "date_paiement", "id", "notes", "prix_total", "statut", "updated_at" FROM "facture";
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
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "facture_bien_id_facture_fkey" FOREIGN KEY ("id_facture") REFERENCES "facture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "facture_bien_id_bien_fkey" FOREIGN KEY ("id_bien") REFERENCES "bien" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "facture_bien_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_facture_bien" ("Cree_par", "created_at", "id", "id_bien", "id_facture", "quantite", "type_bien", "updated_at") SELECT "Cree_par", "created_at", "id", "id_bien", "id_facture", "quantite", "type_bien", "updated_at" FROM "facture_bien";
DROP TABLE "facture_bien";
ALTER TABLE "new_facture_bien" RENAME TO "facture_bien";
CREATE TABLE "new_paiment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_facture" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "montant_totale" REAL NOT NULL,
    "Cree_par" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "paiment_id_facture_fkey" FOREIGN KEY ("id_facture") REFERENCES "facture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "paiment_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_paiment" ("Cree_par", "created_at", "date", "id", "id_facture", "montant_totale", "updated_at") SELECT "Cree_par", "created_at", "date", "id", "id_facture", "montant_totale", "updated_at" FROM "paiment";
DROP TABLE "paiment";
ALTER TABLE "new_paiment" RENAME TO "paiment";
CREATE TABLE "new_rendez_vous" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CIN" TEXT NOT NULL,
    "sujet" TEXT NOT NULL,
    "date_rendez_vous" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Cree_par" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "cabinet" TEXT NOT NULL DEFAULT 'Biohacking',
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "rendez_vous_CIN_fkey" FOREIGN KEY ("CIN") REFERENCES "Client" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "rendez_vous_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_rendez_vous" ("CIN", "Cree_par", "cabinet", "created_at", "date_rendez_vous", "id", "status", "sujet", "updated_at") SELECT "CIN", "Cree_par", "cabinet", "created_at", "date_rendez_vous", "id", "status", "sujet", "updated_at" FROM "rendez_vous";
DROP TABLE "rendez_vous";
ALTER TABLE "new_rendez_vous" RENAME TO "rendez_vous";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
