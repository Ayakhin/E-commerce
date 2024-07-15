import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import orderService from "../services/orderService";

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    orderService.getOrderById(id).then((response) => {
      setOrder(response.data);
    });
  }, [id]);

  if (!order) return <div>Loading...</div>;

  return (
    <div>
      <h1>Order Details</h1>
      <p>Order ID: {order.id}</p>
      <p>Total: {order.total}€</p>
      <p>Status: {order.status}</p>
      <p>User ID: {order.userId}</p>
    </div>
  );
};

export default OrderDetails;
