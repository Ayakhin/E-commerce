// src/pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Container, ListGroup, Row, Col } from "react-bootstrap";

const Cart = () => {
  const { cart, removeFromCart, clearItemFromCart, goToPayment } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Container className="mt-4">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ListGroup>
            {cart.map((item, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.price}€</p>
                  <p>Quantity: {item.quantity}</p>
                  <Button variant="secondary" size="sm" onClick={() => removeFromCart(index)}>-</Button>{" "}
                  <Button variant="secondary" size="sm" onClick={() => addToCart(item)}>+</Button>
                </div>
                <Button variant="danger" onClick={() => clearItemFromCart(index)}>
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h3 className="mt-3">Total: {calculateTotal()}€</h3>
          <Button className="mt-3" onClick={goToPayment}>Proceed to Payment</Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
