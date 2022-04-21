/*
  Warnings:

  - Added the required column `description` to the `DonationRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DonationRequest" ADD COLUMN     "description" TEXT NOT NULL;
