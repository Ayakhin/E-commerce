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
import SearchResults from "./pages/SearchResults"; 
import Payment from "./pages/Payment";
import 'bootstrap/dist/css/bootstrap.min.css';

// Composant PrivateRoute
const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Vérifiez si le token existe dans localStorage
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRoute element={Products} />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/products/:id" element={<PrivateRoute element={ProductDetails} />} />
          <Route path="/orders" element={<PrivateRoute element={OrderList} />} />
          <Route path="/orders/:id" element={<PrivateRoute element={OrderDetails} />} />
          <Route path="/cart" element={<PrivateRoute element={Cart} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manage-products" element={<PrivateRoute element={ManageProducts} />} />
          <Route path="/settings" element={<PrivateRoute element={Settings} />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
