-- CreateTable
CREATE TABLE "Inventory" (
    "id" SERIAL NOT NULL,
    "inventoryAddress" TEXT NOT NULL,
    "authorityIncharge" TEXT NOT NULL,
    "inventoryManager" TEXT NOT NULL,
    "Manageraddress" TEXT NOT NULL,
    "contact" INTEGER NOT NULL,
    "mailId" TEXT NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);
