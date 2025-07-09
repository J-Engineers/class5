const Shop = require("../../models/shop")
const ErrorResponse = require("../../utils/ErrorResponse")

const viewShop = async ( req, res, next) => {
    const {  shopId } = req.query
    const check = await Shop.findById(shopId)
    if(!check){
        throw new ErrorResponse(`The shop ${shopId} does not exist`, 400)
    }
    return check
}

module.exports = viewShop