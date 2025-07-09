const register = require("../services/auth/register");
const login = require("../services/auth/login");
const viewUser = require("../services/auth/viewUser");
const viewUsers = require("../services/auth/viewUsers");


module.exports.login = async (req, res, next) => {
    const result = await login(req)
    res.status(200).json({
        success: true,
        message: "These is no data for now",
        token: result
    })
}

module.exports.register = async (req, res, next) => {
    const result = await register(req);
    res.status(200).json({
        success: true,
        message: "Registration is successful",
        data: result
    })
}

module.exports.viewUser = async (req, res, next) => {
    const result = await viewUser(req, res, next)
     res.status(201).json({
        success: true,
        message: "UserviewUser",
        data: result
    });
}

module.exports.viewUsers = async (req, res, next) => {
    const result = await viewUsers(req, res, next)
     res.status(201).json({
        success: true,
        message: "Users",
        data: result
    });
}