const Category = require("../../models/Category")
const Product = require("../../models/product")
const Shop = require("../../models/shop")
const ErrorResponse = require("../../utils/ErrorResponse")

const addShop = async ( req, res, next) => {
    const { name, location, brand } = req.body
    const userId = req.user._id
    const data = {
        name,
        location,
        user: userId,
        brand
    }
    const check = await Shop.findOne({name:name, user: userId})
    if(check){
        throw new ErrorResponse(`The shop ${data.name} already exist`, 400)
    }
    
    return await Shop.create(data)
}

module.exports = addShop