const Shop = require("../../models/shop")
const ErrorResponse = require("../../utils/ErrorResponse")

const viewShop = async ( req, res, next) => {
    const {  shopId } = req.params
    const shop = await Shop.findById(shopId).populate('user', 'name email')
    if(!shop){
        throw new ErrorResponse(`The shop ${shopId} does not exist`, 400)
    }
    return shop
}

module.exports = viewShop