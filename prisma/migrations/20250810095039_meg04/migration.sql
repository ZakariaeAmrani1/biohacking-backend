/*
  Warnings:

  - Added the required column `status` to the `rendez_vous` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_rendez_vous" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CIN" TEXT NOT NULL,
    "sujet" TEXT NOT NULL,
    "date_rendez_vous" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Cree_par" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "rendez_vous_CIN_fkey" FOREIGN KEY ("CIN") REFERENCES "Client" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "rendez_vous_Cree_par_fkey" FOREIGN KEY ("Cree_par") REFERENCES "Utilisateur" ("CIN") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_rendez_vous" ("CIN", "Cree_par", "created_at", "date_rendez_vous", "id", "sujet") SELECT "CIN", "Cree_par", "created_at", "date_rendez_vous", "id", "sujet" FROM "rendez_vous";
DROP TABLE "rendez_vous";
ALTER TABLE "new_rendez_vous" RENAME TO "rendez_vous";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
