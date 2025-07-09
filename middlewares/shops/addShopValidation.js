const Joi = require("joi");
const ErrorResponse = require("../../utils/ErrorResponse");

const schema = Joi.object({
    name: Joi.string().required(),
    location: Joi.string(),
    brand: Joi.string().required(),
});

const validateShopData = async (req, res, next) => {
    try {
        const result = await schema.validateAsync(req.body)
        req.body = result
        next()
    } catch (err){
        next(new ErrorResponse(err.message.replace(/[\\"]/gi, ""), 400))
    }
}

module.exports = validateShopData


