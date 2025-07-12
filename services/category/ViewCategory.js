const Category = require("../../models/Category");
const ErrorResponse = require("../../utils/ErrorResponse");

const viewCategory = async (req, res, next) => {
  const { categoryId: id } = req.params;

  const category = await Category.findById(id)
    .populate("user", "name email")
    .populate("shop", "name location");
  if (!category) {
    throw new ErrorResponse(
      `The category ${id} you are looking for doesn't exsist`,
      404
    );
  }

  return category;
};

module.exports = viewCategory;