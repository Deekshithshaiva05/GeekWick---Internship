const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// Core APIs
router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getProductById);
router.get("/products/slug/:slug", productController.getProductBySlug);

// Advanced APIs
router.get("/products/search", productController.searchProducts);
router.get("/products/category/:category", productController.getByCategory);

// Write APIs
router.post("/products", productController.addProduct);
router.put("/products/:id", productController.updateProduct);
router.patch("/products/:id/stock", productController.updateStock);
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;