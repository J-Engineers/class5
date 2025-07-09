const Category = require("../../models/Category")
const Product = require("../../models/product")
const Shop = require("../../models/shop")
const ErrorResponse = require("../../utils/ErrorResponse")

const addProduct = async ( req, res, next) => {
    const { name, description, quantity, price, images,  categoryId, shopId } = req.body
    const userId = req.user._id
    const data = {
        name,
        description,
        quantity,
        price,
        slug: images,
        user: userId,
        category: categoryId,
        shop: shopId,
    }

    // confirm the avaliability of categoryId
    const checkCategory = await Category.findOne({_id: categoryId, user: userId}).select('_id')
    if(!checkCategory){
        throw new ErrorResponse("Category does not exist or does not belong to you", 400)
    }

    // confirm the avaliability of shopId
    const checkShop = await Shop.findOne({_id: shopId, user: userId}).select('_id')
    if(!checkShop){
        throw new ErrorResponse("Shop does not exist or does not belong to you", 400)
    }



    const check = await Product.findOne({name:name, user: userId})
    if(check){
        throw new ErrorResponse(`The product ${data.name} already exist`, 400)
    }

    const result =  await Product.create(data)
    return result
}

module.exports = addProduct