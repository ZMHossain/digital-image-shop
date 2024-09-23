const express = require("express");
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

// Add a product
router.post("/add", ensureAuthenticated, productController);

// Fetch all products for a specific user
router.get("/user/:userId", async (req, res) => {
  try {
    const products = await Product.find({ owner: req.params.userId });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
});

module.exports = router;
