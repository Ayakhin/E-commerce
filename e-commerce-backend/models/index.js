const Sequelize = require('sequelize');
const dbConfig = require('../config/config.json').development;

// Créez une instance Sequelize avec la configuration de la base de données
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

const db = {};

// Importez et définissez les modèles ici
db.Product = require('./product.model')(sequelize, Sequelize.DataTypes);
db.User = require('./user.model')(sequelize, Sequelize.DataTypes);
db.Order = require('./order.model')(sequelize, Sequelize.DataTypes);

// Vous pouvez ajouter d'autres modèles ici de la même manière
// db.OtherModel = require('./other.model')(sequelize, Sequelize.DataTypes);

// Synchroniser les modèles avec la base de données
const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true }); // Utilisez `alter: true` pour ajuster les modèles à la base de données
    console.log("Database synchronized");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
};

syncModels();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
