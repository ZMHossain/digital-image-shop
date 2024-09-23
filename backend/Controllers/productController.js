const Product = require("../Models/ProductModel");

const productController = async (req, res) => {
  try {
    const { name, description, price, stock, imageUrl } = req.body;

    const { _id } = req.user;
    // Fetch the user (owner) from the userId
    const owner = await User.findById(_id);
    if (!owner) {
      return res.status(404).json({ error: "User not found" });
    }

    const product = new Product({
      name,
      description,
      price,
      stock,

      imageUrl,
      owner: _id,
    });
    console.log(product);
    await product.save();

    owner.products.push(product._id);
    await owner.save();

    return res
      .status(201)
      .json({ message: "Product created successfully", product });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = { productController };
