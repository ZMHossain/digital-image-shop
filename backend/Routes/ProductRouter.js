const Product = require("../Models/ProductModel");
const User = require("../Models/User"); // Ensure User model is imported

const ensureAuthenticated = require("../Middlewares/Auth");
const { productController } = require("../Controllers/productController");

const router = require("express").Router();

router.get("/", ensureAuthenticated, (req, res) => {
  res.status(200).json([
    {
      name: "mobile",
      price: 10000,
    },
    {
      name: "mobile",
      price: 10000,
    },
  ]);
});

// Get all products
router.get("/allproducts", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/sellerproducts", async (req, res) => {
  const { email } = req.params;
  try {
    const seller = await Product.findOne({ email: "seller@gmail.com" });
    console.log(seller.products);

    res.json(seller.products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a product
router.post("/add", ensureAuthenticated, productController);

// Fetch all products for a specific user
router.get("/user/:userName", async (req, res) => {
  try {
    const user = await User.findOne({ name: req.params.userName }).populate(
      "products"
    );
    console.log(user.products);

    res.status(200).json(user.products);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
});

module.exports = router;
