const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");
const categoryRouter = require("./Routes/categoryRouter.js");
require("dotenv").config();
require("./Models/db");

const PORT = process.env.PORT || 8080;

app.get("./");

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);
app.use("/category", categoryRouter);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
