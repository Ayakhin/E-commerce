import React, { useEffect, useState } from "react";
import orderService from "../services/orderService";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderService.getAllOrders().then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order #{order.id} - Total: {order.total}€ - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
