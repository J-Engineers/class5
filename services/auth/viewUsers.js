const User = require("../../models/user")
const ErrorResponse = require("../../utils/ErrorResponse")

const viewUsers = async ( req, res, next) => {
    const check = await User.find()
    return check
}

module.exports = viewUsers