/*
  Warnings:

  - Added the required column `category` to the `DonationRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `DonationRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DonationRequest" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "emergency" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "image" TEXT NOT NULL;
