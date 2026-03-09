-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "orderId" DROP DEFAULT;
DROP SEQUENCE "Order_orderId_seq";
