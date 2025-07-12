const express = require('express')

const { addCategory, editCategory, viewCategories, viewCategory } = require('../controllers/category');
const {validateCategoryData, validateCategoryDataEdit } = require('../middlewares/categories');
const jwtVerify = require('../middlewares/jwtVerify');
 
const route = express.Router()

route.post('/add', validateCategoryData,  jwtVerify, addCategory);
route.put('/edit', validateCategoryDataEdit,  jwtVerify, editCategory);
route.get('/view',  jwtVerify, viewCategories);
route.get('/view/:categoryId',  jwtVerify, viewCategory);

module.exports = route