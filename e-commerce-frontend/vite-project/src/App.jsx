import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import OrderList from "./pages/OrderList";
import OrderDetails from "./pages/OrderDetails";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ManageProducts from "./pages/ManageProducts";
import Settings from "./pages/Settings";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Composant PrivateRoute
const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Vérifiez si le token existe dans localStorage
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRoute element={Products} />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manage-products" element={<PrivateRoute element={ManageProducts} />} />
          <Route path="/settings" element={<PrivateRoute element={Settings} />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
