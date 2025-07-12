const Category = require("../../models/Category");
const ErrorResponse = require("../../utils/ErrorResponse");

const viewCategory = async (req, res, next) => {
  const { id } = req.params;

  const check = await Category.findById(id);
  if (!check) {
    throw new ErrorResponse(
      `The category you are lokking for doesn't exsist`,
      404
    );
  }

  return check;
};

module.exports = viewCategory;
