import Joi from "@hapi/joi"

export const AddScouterValidator = Joi.object({
    name: Joi.string().required()
})

export const AddMatchValidator = Joi.object({
    matchNumber: Joi.number().required(),
    teamNumber: Joi.number().required(),
    defensive: Joi.boolean().required(),
    notes: Joi.string().required(),
    gamePieces: Joi.array().items(Joi.string()).required(),
    endGameStatus: Joi.string().required(),
    endAutoStatus: Joi.string().required(),
    feedLocation: Joi.string().required(),
    feederType: Joi.string().required(),
    scouterId: Joi.number().required()
})