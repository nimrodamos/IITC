const express = require("express");
const dotenv = require("dotenv");
const { getProducts, getProductById } = require("./products");
const app = express();
dotenv.config();

const mySecret = process.env.SECRET;

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<div><p class='baba'>hi mom</p></div>");
});

app.get("/secret", (req, res) => {
  res.send(mySecret);
});

app.get("/products", (req, res) => {
  const products = getProducts();
  res.json(products);
});

app.get("/products/:productId", (req, res) => {
  const productId = req.params.productId;
  const product = getProductById(productId);
  res.json(product);
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
