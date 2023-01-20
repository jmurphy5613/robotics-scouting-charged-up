import Hapi, { server } from '@hapi/hapi'
import Boom from '@hapi/boom'

const matchesPlugin = {
    name: 'app/matches',
    dependencies: ['prisma'],
    register: async function (server: Hapi.Server) {
        server.route([
            {
                method: 'GET',
                path: '/matches/get-all',
                handler: getAllMatches
            }
        ])
    }
}

const getAllMatches = async (req: Hapi.Request, res: Hapi.ResponseToolkit) => {
    const { prisma } = req.server.app
}