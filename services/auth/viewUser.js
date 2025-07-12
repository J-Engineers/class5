const User = require("../../models/user")
const ErrorResponse = require("../../utils/ErrorResponse")

const viewUser = async ( req, res, next) => {
    const {  userId } = req.params
    const user = await User.findById(userId)
    if(!user){
        throw new ErrorResponse(`The user ${userId} does not exist`, 400)
    }
    return user
}

module.exports = viewUser