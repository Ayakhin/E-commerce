import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: ""
  });
  const [editMode, setEditMode] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  useEffect(() => {
    // Fetch all products on component mount
    axios.get("/api/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      // Update existing product
      axios.put(`/api/products/${currentProductId}`, formData)
        .then(response => {
          setProducts(products.map(product => product.id === currentProductId ? response.data : product));
          resetForm();
        })
        .catch(error => {
          console.error("There was an error updating the product!", error);
        });
    } else {
      // Create new product
      axios.post("/api/products", formData)
        .then(response => {
          setProducts([...products, response.data]);
          resetForm();
        })
        .catch(error => {
          console.error("There was an error creating the product!", error);
        });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`/api/products/${id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => {
        console.error("There was an error deleting the product!", error);
      });
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl
    });
    setEditMode(true);
    setCurrentProductId(product.id);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      imageUrl: ""
    });
    setEditMode(false);
    setCurrentProductId(null);
  };

  return (
    <div className="container mt-4">
      <h1>Manage Products</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter product price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </div>
        <button type="submit" className="btn btn-primary">{editMode ? "Update" : "Submit"}</button>
        {editMode && <button type="button" className="btn btn-secondary ml-2" onClick={resetForm}>Cancel</button>}
      </form>

      <h2 className="mt-5">Current Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-3" key={product.id}>
            <div className="card" style={{ width: '18rem' }}>
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                <button className="btn btn-danger mr-2" onClick={() => handleDelete(product.id)}>Delete</button>
                <button className="btn btn-secondary" onClick={() => handleEdit(product)}>Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
