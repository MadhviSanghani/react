const express = require("express");
const errors = require("./src/utils/error");
const category = require("./src/routes/category.route");
const product = require("./src/routes/product.route");
const app = express();
const port = 3000;
app.use(express.json());    //middleware
app.use(express.urlencoded({ extended: true }));   //middleware
app.use(errors.errorHandler);   //middleware
app.use("/category", category);
app.use("/product", product);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
