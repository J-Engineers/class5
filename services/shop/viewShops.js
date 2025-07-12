const Shop = require("../../models/shop")
const ErrorResponse = require("../../utils/ErrorResponse")

const viewShops = async ( req, res, next) => {
    const {limit = 24, page = 1} = req.params
    const skip = (Number(page) - 1) * Number(limit)

    const shops = await Shop.find().skip(skip).limit(limit)
    const totalData = await Shop.countDocuments()

    const totalPage = Math.ceil(totalData/Number(limit))
    const metaData = { totalData, totalPage }

    return {shops, metaData}
}

module.exports = viewShops