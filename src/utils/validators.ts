import Joi from "@hapi/joi"

export const AddScouterValidator = Joi.object({
    name: Joi.string().required()
})