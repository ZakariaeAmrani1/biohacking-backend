/*
  Warnings:

  - You are about to alter the column `sections_json` on the `document_templates` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_document_templates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sections_json" JSONB NOT NULL,
    "Cree_par" TEXT NOT NULL,
    CONSTRAINT "document_templates_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_document_templates" ("Cree_par", "id", "name", "sections_json") SELECT "Cree_par", "id", "name", "sections_json" FROM "document_templates";
DROP TABLE "document_templates";
ALTER TABLE "new_document_templates" RENAME TO "document_templates";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
