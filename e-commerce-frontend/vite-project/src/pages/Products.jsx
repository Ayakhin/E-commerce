// src/pages/Products.jsx
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
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
