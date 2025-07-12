const Joi = require("joi");
const ErrorResponse = require("../../utils/ErrorResponse");

const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    id: Joi.string().required(),
});

const validateCategoryDataEdit = async (req, res, next) => {
    try {
        const result = await schema.validateAsync(req.body)
        req.body = result
        next()
    } catch (err){
        next(new ErrorResponse(err.message.replace(/[\\"]/gi, ""), 400))
    }
}

module.exports = validateCategoryDataEdit


