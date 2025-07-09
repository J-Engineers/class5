const express = require('express')

const { addCategory } = require('../controllers/category');
const validateCategoryData = require('../middlewares/categories/addCategoryValidation');
const jwtVerify = require('../middlewares/jwtVerify');
 
const route = express.Router()

route.post('/add', validateCategoryData,  jwtVerify, addCategory);

module.exports = route