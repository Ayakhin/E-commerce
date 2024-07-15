const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const userRoutes = require("./routes/user.routes");

app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", userRoutes);

module.exports = app;
