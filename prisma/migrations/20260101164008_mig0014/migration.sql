-- CreateTable
CREATE TABLE "Workflow" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "client_CIN" TEXT NOT NULL,
    "rendez_vous_id" INTEGER NOT NULL,
    "facture_id" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'IN_PROGRESS',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "Cree_par" TEXT NOT NULL,
    CONSTRAINT "Workflow_client_CIN_fkey" FOREIGN KEY ("client_CIN") REFERENCES "Client" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Workflow_rendez_vous_id_fkey" FOREIGN KEY ("rendez_vous_id") REFERENCES "rendez_vous" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Workflow_facture_id_fkey" FOREIGN KEY ("facture_id") REFERENCES "facture" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Workflow_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Workflow_rendez_vous_id_key" ON "Workflow"("rendez_vous_id");

-- CreateIndex
CREATE UNIQUE INDEX "Workflow_facture_id_key" ON "Workflow"("facture_id");
