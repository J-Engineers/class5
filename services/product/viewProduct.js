const Category = require("../../models/Category")
const Product = require("../../models/product")
const Shop = require("../../models/shop")
const ErrorResponse = require("../../utils/ErrorResponse")

const viewProduct = async ( req, res, next) => {
    const { id } = req.params

    const product = await Product.findOne({ _id: id})
    .populate('user', 'email name')
    .populate('shop', 'name location brand')
    .populate('category', 'name description');
    if (!product) {
        throw new ErrorResponse("No product found", 404)
    }

    return product
}

module.exports = viewProduct