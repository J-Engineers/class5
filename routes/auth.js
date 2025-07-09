const express = require('express')
const { register, login, viewUser, viewUsers } = require('../controllers/auth')
const jwtVerify = require('../middlewares/jwtVerify');
const { loginValidation, registerValidation } = require('../middlewares/auth');

const route = express.Router()

route.post("/register", registerValidation, register)
route.post("/login", loginValidation, login)
route.get("/users", jwtVerify, viewUsers)
route.get("/user/:userId", jwtVerify, viewUser)

module.exports = route