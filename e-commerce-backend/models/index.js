// models/index.js
const Sequelize = require('sequelize');
const dbConfig = require('../config/config.json').development;

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

const db = {};

// Importez et définissez les modèles ici
db.Product = require('./product.model')(sequelize, Sequelize.DataTypes);
db.User = require('./user.model')(sequelize, Sequelize.DataTypes);
db.Order = require('./order.model')(sequelize, Sequelize.DataTypes);
db.OrderProduct = require('./orderProduct.model')(sequelize, Sequelize.DataTypes);

// Ajoutez les associations ici
db.User.hasMany(db.Order, { foreignKey: 'userId', as: 'orders' });
db.Order.belongsTo(db.User, { foreignKey: 'userId', as: 'user' });

db.Product.belongsToMany(db.Order, { through: db.OrderProduct, foreignKey: 'productId', as: 'orders' });
db.Order.belongsToMany(db.Product, { through: db.OrderProduct, foreignKey: 'orderId', as: 'products' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
