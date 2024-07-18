import React, { useState, useEffect } from "react";
import axios from "axios";
import { DropdownButton, Dropdown } from "react-bootstrap";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    imageUrl: "",
    category: "Smartphone", // Valeur par défaut
  });
  const [editMode, setEditMode] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  useEffect(() => {
    // Fetch all products on component mount
    axios.get("http://localhost:5000/api/products")
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
      axios.put(`http://localhost:5000/api/products/${currentProductId}`, formData)
        .then(response => {
          setProducts(products.map(product => product.id === currentProductId ? response.data : product));
          resetForm();
        })
        .catch(error => {
          console.error("There was an error updating the product!", error);
        });
    } else {
      // Create new product
      axios.post("http://localhost:5000/api/products", formData)
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
    axios.delete(`http://localhost:5000/api/products/${id}`)
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
      stock: product.stock,
      imageUrl: product.imageUrl,
      category: product.category,
    });
    setEditMode(true);
    setCurrentProductId(product.id);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      stock: "",
      imageUrl: "",
      category: "Smartphone", // Réinitialiser la catégorie par défaut
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
            required
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
            required
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Enter product stock"
            required
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
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <DropdownButton id="category-dropdown" title={formData.category} onSelect={(eventKey) => setFormData({ ...formData, category: eventKey })}>
            <Dropdown.Item eventKey="Smartphone">Smartphone</Dropdown.Item>
            <Dropdown.Item eventKey="Laptop">Laptop</Dropdown.Item>
            <Dropdown.Item eventKey="Watch">Watch</Dropdown.Item>
          </DropdownButton>
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
                <p className="card-text"><strong>Stock:</strong> {product.stock}</p>
                <p className="card-text"><strong>Category:</strong> {product.category}</p>
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
