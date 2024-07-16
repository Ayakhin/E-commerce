// src/pages/Products.jsx
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Supprimez le token
    navigate("/login"); // Redirigez vers la page de connexion
  };

  return (
    <div>
      <h1>Products</h1>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}€
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
