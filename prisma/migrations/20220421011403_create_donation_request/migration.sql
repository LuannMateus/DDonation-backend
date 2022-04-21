-- CreateTable
CREATE TABLE "DonationRequest" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "daysRemaining" INTEGER NOT NULL,
    "target" INTEGER NOT NULL,
    "reached" INTEGER NOT NULL,

    CONSTRAINT "DonationRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DonationRequest" ADD CONSTRAINT "DonationRequest_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Donor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
