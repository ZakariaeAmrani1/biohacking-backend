/*
  Warnings:

  - You are about to alter the column `data_json` on the `document` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "template_id" INTEGER NOT NULL,
    "CIN" TEXT NOT NULL,
    "data_json" JSONB NOT NULL,
    "Cree_par" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "document_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "document_templates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "document_CIN_fkey" FOREIGN KEY ("CIN") REFERENCES "Client" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "document_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_document" ("CIN", "Cree_par", "created_at", "data_json", "id", "template_id") SELECT "CIN", "Cree_par", "created_at", "data_json", "id", "template_id" FROM "document";
DROP TABLE "document";
ALTER TABLE "new_document" RENAME TO "document";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
