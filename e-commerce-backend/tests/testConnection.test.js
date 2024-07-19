const Sequelize = require('sequelize');
const dbConfig = require('../config/config.json').development;

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

describe('Database Connection', () => {
  test('should connect to the database', async () => {
    await expect(sequelize.authenticate()).resolves.toBeUndefined();
  });

  afterAll(async () => {
    await sequelize.close(); // Ferme la connexion à la base de données
  });
});
