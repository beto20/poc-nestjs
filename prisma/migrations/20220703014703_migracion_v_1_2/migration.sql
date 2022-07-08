/*
  Warnings:

  - Added the required column `breeds` to the `Mascota` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Mascota` ADD COLUMN `breeds` VARCHAR(191) NOT NULL;
