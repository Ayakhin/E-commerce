// e-commerce-backend/controllers/product.controller.js

const db = require("../models");
const Product = db.Product; // Assurez-vous que 'products' est le modèle Sequelize correct

// Créer un produit
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body); // Crée un nouveau produit avec les données envoyées dans le corps de la requête
    res.status(201).json(product); // Répond avec le produit créé
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création du produit", error });
  }
};

// Mettre à jour un produit
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Product.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedProduct = await Product.findByPk(id);
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: "Produit non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour du produit", error });
  }
};

// Supprimer un produit
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({
      where: { id: id },
    });
    if (deleted) {
      res.status(204).send(); // Répond avec un code 204 No Content si la suppression a réussi
    } else {
      res.status(404).json({ message: "Produit non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression du produit", error });
  }
};

// Obtenir un produit spécifique
exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Produit non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération du produit", error });
  }
};

// Obtenir tous les produits
exports.getAllProducts = async (req, res) => {

  console.log('getAllProducts called');
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des produits", error });
  }
};
