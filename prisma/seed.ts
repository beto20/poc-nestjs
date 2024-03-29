import { PrismaClient } from "@prisma/client";
import { products } from "products";

const prisma = new PrismaClient();

async function main() {
    for (let product of products) {
        await prisma.product.create({
            data: product
        })
    }

    main()
        .catch((err) => {
            console.error(err);
            process.exit(1);
        })
        .finally(async () => {
            await prisma.$disconnect();
        });


}