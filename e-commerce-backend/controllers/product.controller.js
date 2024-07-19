// controllers/product.controller.js

const db = require("../models");
const Product = db.Product;
const { Op } = db.Sequelize;

// Créer un produit
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un produit
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Product.update(req.body, { where: { id } });
    if (updated) {
      const updatedProduct = await Product.findOne({ where: { id } });
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un produit
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json({ message: "Product deleted" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: error.message });
  }
};

// Obtenir un produit par ID
exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error getting product:", error);
    res.status(500).json({ message: error.message });
  }
};

// Obtenir tous les produits
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error getting all products:", error);
    res.status(500).json({ message: error.message });
  }
};

// Rechercher des produits
exports.searchProducts = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }

    const products = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${query}%`
        }
      }
    });

    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ message: "No products found" });
    }
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({ message: error.message });
  }
};
