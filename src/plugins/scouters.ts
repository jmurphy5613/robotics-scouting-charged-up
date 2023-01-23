import Boom from "@hapi/boom"
import Hapi from "@hapi/hapi"

import { AddScouter } from "../utils/interfaces"
import { AddScouterValidator } from "../utils/validators"

export const scoutersPlugin = {
    name: 'app/scouters',
    dependencies: ['prisma'],
    register: async function (server: Hapi.Server) {
        server.route([
            {
                method: 'GET',
                path: '/scouters/get-all',
                handler: getAllScouters
            },
            {
                method: 'POST',
                path: '/scouters/add',
                handler: addScouter,
                options: {
                    validate: AddScouterValidator
                }
            }
        ])
    }    
}

const getAllScouters = async (req: Hapi.Request, res: Hapi.ResponseToolkit) => {
    const { prisma } = req.server.app

    try {
        const scouters = await prisma.scouter.findMany({})
        return res.response(scouters).code(200)
    } catch (err) {
        console.log(err)
        return Boom.badImplementation("could not get all those scouters")
    }
}

const addScouter = async (req: Hapi.Request, res: Hapi.ResponseToolkit) => {
    const { prisma } = req.server.app
    const payload = req.payload as AddScouter

    try {
        const scouter = await prisma.scouter.create({
            data: {
                name: payload.name
            }
        })
        return res.response(scouter).code(200)
    } catch (err) {
        console.log(err)
        return Boom.badImplementation("could not add scouter")
    }
}