-- DropForeignKey
ALTER TABLE "Items" DROP CONSTRAINT "Items_orderId_fkey";

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE CASCADE ON UPDATE CASCADE;
