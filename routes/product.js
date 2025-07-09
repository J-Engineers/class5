const express = require('express')

const { addProduct, viewProduct } = require('../controllers/product');
const {validateProductData} = require('../middlewares/products');
const jwtVerify = require('../middlewares/jwtVerify');

const route = express.Router()

route.post('/add', validateProductData, jwtVerify, addProduct);
// route.put('/edit', editProduct);
route.get('/view-one/:id', jwtVerify, viewProduct);
// route.get('/view', viewProducts);
// route.delete('/delete', deleteProduct);

module.exports = route