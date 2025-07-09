const express = require('express')
const { register, login, viewUser, viewUsers } = require('../controllers/auth')
const jwtVerify = require('../middlewares/jwtVerify');

const route = express.Router()

route.post("/register", register)
route.post("/login", login)
route.get("/users", jwtVerify, viewUsers)
route.get("/user/:userId", jwtVerify, viewUser)

module.exports = route