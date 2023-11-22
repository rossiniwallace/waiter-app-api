-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(10,7) NOT NULL,
    "category" TEXT NOT NULL,
    "imagePath" VARCHAR(225) NOT NULL,
    "ingredients" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_fkey" FOREIGN KEY ("category") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
