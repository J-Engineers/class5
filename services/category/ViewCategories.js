const { default: mongoose } = require("mongoose");
const Category = require("../../models/Category");

const viewCategories = async (req, res, next) => {
  const limit = Number(req.query.limit) || 24;

  const page = Number(req.query.page) || 1;

  const skip = (page - 1) * limit

  const shop =  new mongoose.Types.ObjectId(req.query.shop);

  let category = await Category.find().populate('user', 'name email').populate('shop', 'name location').skip(skip).limit(limit);
  let totalData = await Category.countDocuments();

  if (shop) {
    category = await Category.find({shop: shop}).populate('user', 'name email').populate('shop', 'name location').skip(skip).limit(limit);
    totalData = await Category.countDocuments({shop: shop});
  }

  const pageNumber = Math.ceil(totalData / limit);

  const metaData = {
    totalData,
    pageNumber
  };

  return {
    category,
    metaData
  };
};

module.exports = viewCategories;
