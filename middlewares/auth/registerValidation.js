const Joi = require("joi");
const ErrorResponse = require("../../utils/ErrorResponse");

const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    referredBy: Joi.string(),
});


const registerValidation = async (req, res, next) => {
    try {
        const result = await schema.validateAsync(req.body)
        req.body = result
        next()
    } catch (err){
        next(new ErrorResponse(err.message.replace(/[\\"]/gi, ""), 400))
    }
}

module.exports = registerValidation


