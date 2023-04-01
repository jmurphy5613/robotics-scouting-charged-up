import { PrismaClient } from "@prisma/client"
import { format } from "date-fns"

const prisma = new PrismaClient()

async function main() {
    await prisma.match.deleteMany({})

}

main()
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        prisma.$disconnect
    })