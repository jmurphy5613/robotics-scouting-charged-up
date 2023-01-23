import { PrismaClient } from "@prisma/client"
import { format } from "date-fns"

const prisma = new PrismaClient()

async function main() {
    await prisma.match.deleteMany({})
    await prisma.scouter.deleteMany({})

}

main()
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        prisma.$disconnect
    })