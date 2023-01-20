import Boom from "@hapi/boom"
import Hapi from "@hapi/hapi"

export const scoutersPlugin = {
    name: 'app/matches',
    dependencies: ['prisma'],
    register: async function (server: Hapi.Server) {
        server.route([
            {
                method: 'GET',
                path: '/scouters/get-all',
                handler: getAllScouters
            }
        ])
    }    
}

const getAllScouters = async (req: Hapi.Request, res: Hapi.ResponseToolkit) => {
    const { prisma } = req.server.app

    try {
        const scouters = prisma.scouter.findMany({})
        return res.response(scouters).code(200)
    } catch (err) {
        console.log(err)
        return Boom.badImplementation("could not get all those scouters")
    }
}