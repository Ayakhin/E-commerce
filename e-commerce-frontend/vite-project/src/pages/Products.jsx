import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer Bootstrap CSS

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("/api/products") // Assurez-vous que cette URL est correcte
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1>Products</h1>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4 mb-3" key={product.id}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                  <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
