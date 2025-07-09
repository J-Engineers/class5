const express = require('express')

const { addShop, editShop, viewShop, viewShops } = require('../controllers/shop');
const {validateShopData, validateShopDataEdit} = require('../middlewares/shops');
const jwtVerify = require('../middlewares/jwtVerify');

const route = express.Router()

route.post('/add', validateShopData,  jwtVerify, addShop);
route.put('/edit', validateShopDataEdit,  jwtVerify, editShop);
route.get('/view',  jwtVerify, viewShops);
route.get('/view/:shopId',  jwtVerify, viewShop);

module.exports = route