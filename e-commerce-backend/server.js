const app = require("./app");
const db = require("./models");
const PORT = process.env.PORT || 5000;

db.sequelize.sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });
