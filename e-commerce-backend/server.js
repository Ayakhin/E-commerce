const app = require("./app");
const db = require("./models");

const PORT = process.env.PORT || 5000;

// Synchroniser la base de données et démarrer le serveur
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});
