import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Importez CartProvider
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import OrderList from "./pages/OrderList";
import OrderDetails from "./pages/OrderDetails";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <CartProvider> {/* Entourez votre application avec CartProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
