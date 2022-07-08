/*
  Warnings:

  - You are about to drop the column `Continent` on the `Country` table. All the data in the column will be lost.
  - Added the required column `continent` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Country` DROP COLUMN `Continent`,
    ADD COLUMN `continent` VARCHAR(191) NOT NULL;
