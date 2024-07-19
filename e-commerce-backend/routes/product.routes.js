const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.post("/products", productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);
router.get("/products/:id", productController.getProduct);
router.get("/products", productController.getAllProducts);
router.get("/products/search", productController.searchProducts);  // Nouvelle route pour la recherche

module.exports = router;
