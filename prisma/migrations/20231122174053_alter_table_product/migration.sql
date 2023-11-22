-- CreateTable
CREATE TABLE "Ingredients" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "icon" VARCHAR(10) NOT NULL,

    CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_ingredients_fkey" FOREIGN KEY ("ingredients") REFERENCES "Ingredients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
