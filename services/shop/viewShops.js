const Shop = require("../../models/shop")
const ErrorResponse = require("../../utils/ErrorResponse")

const viewShops = async ( req, res, next) => {
    const check = await Shop.find()
    return check
}

module.exports = viewShops