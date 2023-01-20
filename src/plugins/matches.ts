import Hapi from '@hapi/hapi'
import Boom from '@hapi/boom'

export const matchesPlugin = {
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

    try {
        const matches = await prisma.match.findMany({
            include: {
                scouter: true
            }
        })
        return res.response(matches).code(200)
    } catch (err) {
        console.log(err)
        return Boom.badImplementation("could not get all matches")
    }
}
