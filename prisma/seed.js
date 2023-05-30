import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const users = [
    {
        id: 1,
        password: "teste",
    },
    {
        id: 2,
        password: "teste2",
    },
    {
        id: 3,
        password: "teste3",
    },
];

async function main() {
    for (let user of users) {
        await prisma.user.create({
            data: user
        });
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
}) 