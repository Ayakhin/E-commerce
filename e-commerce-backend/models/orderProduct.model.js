// models/orderProduct.model.js
module.exports = (sequelize, DataTypes) => {
    const OrderProduct = sequelize.define("OrderProduct", {
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Orders',
          key: 'id'
        }
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id'
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
    return OrderProduct;
  };
  