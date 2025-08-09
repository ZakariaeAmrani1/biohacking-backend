-- CreateTable
CREATE TABLE "Utilisateur" (
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
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Entreprise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ICE" INTEGER NOT NULL,
    "CNSS" INTEGER NOT NULL,
    "RC" INTEGER NOT NULL,
    "IF" INTEGER NOT NULL,
    "RIB" INTEGER NOT NULL,
    "patente" INTEGER NOT NULL,
    "adresse" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Client" (
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
    "Cree_par" TEXT NOT NULL,
    CONSTRAINT "Client_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "rendez_vous" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CIN" TEXT NOT NULL,
    "sujet" TEXT NOT NULL,
    "date_rendez_vous" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Cree_par" TEXT NOT NULL,
    CONSTRAINT "rendez_vous_CIN_fkey" FOREIGN KEY ("CIN") REFERENCES "Client" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "rendez_vous_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "document_templates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sections_json" TEXT NOT NULL,
    "Cree_par" TEXT NOT NULL,
    CONSTRAINT "document_templates_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "template_id" INTEGER NOT NULL,
    "CIN" TEXT NOT NULL,
    "data_json" TEXT NOT NULL,
    "Cree_par" TEXT NOT NULL,
    CONSTRAINT "document_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "document_templates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "document_CIN_fkey" FOREIGN KEY ("CIN") REFERENCES "Client" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "document_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "bien" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nom" TEXT NOT NULL,
    "bien_type" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "prix" REAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "Cree_par" TEXT NOT NULL,
    CONSTRAINT "bien_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "facture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CIN" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "prix_total" REAL NOT NULL,
    "statut" TEXT NOT NULL,
    "notes" TEXT,
    "Cree_par" TEXT NOT NULL,
    CONSTRAINT "facture_CIN_fkey" FOREIGN KEY ("CIN") REFERENCES "Client" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "facture_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "facture_bien" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_facture" INTEGER NOT NULL,
    "id_bien" INTEGER NOT NULL,
    "type_bien" TEXT NOT NULL,
    "quantite" INTEGER NOT NULL,
    "Cree_par" TEXT NOT NULL,
    CONSTRAINT "facture_bien_id_facture_fkey" FOREIGN KEY ("id_facture") REFERENCES "facture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "facture_bien_id_bien_fkey" FOREIGN KEY ("id_bien") REFERENCES "bien" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "facture_bien_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "paiment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_facture" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "montant_totale" REAL NOT NULL,
    "Cree_par" TEXT NOT NULL,
    CONSTRAINT "paiment_id_facture_fkey" FOREIGN KEY ("id_facture") REFERENCES "facture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "paiment_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_CIN_key" ON "Utilisateur"("CIN");

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_CIN_key" ON "Client"("CIN");
