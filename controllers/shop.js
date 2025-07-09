const addShop = require("../services/shop/addShop");
const editShop = require("../services/shop/editShop");
const viewShop = require("../services/shop/viewShop");
const viewShops = require("../services/shop/viewShops");


module.exports.addShop = async (req, res, next) => {
    const result = await addShop(req, res, next)
    res.status(201).json({
        success: true,
        message: "Created successfully",
        data: result
    });
}

module.exports.editShop = async (req, res, next) => {
    const result = await editShop(req, res, next)
     res.status(201).json({
        success: true,
        message: "Edited successfully",
        data: result
    });
}

module.exports.viewShop = async (req, res, next) => {
    const result = await viewShop(req, res, next)
     res.status(201).json({
        success: true,
        message: "Shop",
        data: result
    });
}

module.exports.viewShops = async (req, res, next) => {
    const result = await viewShops(req, res, next)
     res.status(201).json({
        success: true,
        message: "Shops",
        data: result
    });
}