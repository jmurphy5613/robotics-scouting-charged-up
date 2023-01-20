import { PrismaClient } from "@prisma/client"
import { format } from "date-fns"

const prisma = new PrismaClient()

async function main() {
    await prisma.match.deleteMany({})
    await prisma.scouter.deleteMany({})
    await prisma.scouter.create({
        data: {
            name: "John Muprhy",
            matches: {
                create: [
                    {
                        matchNumber: 40,
                        teamNumber: 40,
                    }
                ]
            }
        }
    })
}

main()
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        prisma.$disconnect
    })