const User = require("../../models/user")
const ErrorResponse = require("../../utils/ErrorResponse")

const viewUsers = async ( req, res, next) => {

    const {limit = 24, page = 1} = req.params
    const skip = (Number(page) - 1) * Number(limit)

    const users = await User.find().skip(skip).limit(limit)
    const totalData = await User.countDocuments()

    const totalPage = Math.ceil(totalData/Number(limit))
    const metaData = { totalData, totalPage }

    return { users, metaData }
}

module.exports = viewUsers