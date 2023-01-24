import Hapi from '@hapi/hapi'
import Boom from '@hapi/boom'

import { AddMatch } from '../utils/interfaces'
import { AddMatchValidator } from '../utils/validators'

export const matchesPlugin = {
    name: 'app/matches',
    dependencies: ['prisma'],
    register: async function (server: Hapi.Server) {
        server.route([
            {
                method: 'GET',
                path: '/matches/get-all',
                handler: getAllMatches
            },
            {
                method: 'POST',
                path: '/matches/add',
                handler: addMatch
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

const addMatch = async (req: Hapi.Request, res: Hapi.ResponseToolkit) => {
    const { prisma } = req.server.app
    const payload = req.payload as AddMatch

    console.log(payload)
    console.log(payload.gamePieces)

    try {
        const match = await prisma.match.create({
            data: {
                matchNumber: payload.matchNumber,
                teamNumber: payload.teamNumber,
                defensive: payload.defensive,
                notes: payload.notes,
                gamePieces: payload.gamePieces,
                endAutoStatus: payload.endAutoStatus,
                endGameStatus: payload.endGameStatus,
                feederType: payload.feederType,
                feedLocation: payload.feedLocation,
                scouterId: payload.scouterId
            }
        })
        return res.response(match).code(200)
    } catch (err) {
        console.log(err)
        return Boom.badImplementation("could not add match")
    }
}
