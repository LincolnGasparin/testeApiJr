/*
  Warnings:

  - The primary key for the `Items` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Items" DROP CONSTRAINT "Items_pkey",
ADD CONSTRAINT "Items_pkey" PRIMARY KEY ("orderId", "productId");

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "creationDate" DROP DEFAULT;
