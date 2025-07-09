const Joi = require("joi");
const ErrorResponse = require("../../utils/ErrorResponse");

const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number().required(),
    images: Joi.any().required(),
    quantity: Joi.number().integer().min(1).required(),
    categoryId: Joi.string().required(),
    shopId: Joi.string().required(),
});

const validateProductData = async (req, res, next) => {
    try {
        const result = await schema.validateAsync(req.body)
        req.body = result
        next()
    } catch (err){
        next(new ErrorResponse(err.message.replace(/[\\"]/gi, ""), 400))
    }
}

module.exports = validateProductData


