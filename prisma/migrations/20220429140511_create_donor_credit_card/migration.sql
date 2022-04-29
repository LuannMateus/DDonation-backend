-- CreateTable
CREATE TABLE "DonorCreditCard" (
    "id" TEXT NOT NULL,
    "creditCardTypeId" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "holderName" TEXT NOT NULL,
    "creditCardNumber" INTEGER NOT NULL,
    "validity" INTEGER NOT NULL,
    "cvv" INTEGER NOT NULL,

    CONSTRAINT "DonorCreditCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DonorCreditCard" ADD CONSTRAINT "DonorCreditCard_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DonorCreditCard" ADD CONSTRAINT "DonorCreditCard_creditCardTypeId_fkey" FOREIGN KEY ("creditCardTypeId") REFERENCES "CreditCardType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
