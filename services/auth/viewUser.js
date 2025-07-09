const User = require("../../models/user")
const ErrorResponse = require("../../utils/ErrorResponse")

const viewUser = async ( req, res, next) => {
    const {  userId } = req.query
    const check = await viewUser.findById(userId)
    if(!check){
        throw new ErrorResponse(`The user ${userId} does not exist`, 400)
    }
    return check
}

module.exports = viewUser