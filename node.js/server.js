// Import the express module
const express = require("express");

// Create an Express application
const app = express();

// Define a port
const PORT = 3000;

// Define sample data in separate variables
const contactInfo = {
  email: "your.email@example.com",
  phone: "123-456-7890",
};

const aboutMessage = "This server was created by [Your Name]";

const products = [
  { id: 1, name: "Product 1", price: 10.0 },
  { id: 2, name: "Product 2", price: 20.0 },
  { id: 3, name: "Product 3", price: 30.0 },
];

// Define the routes
app.get("/", (req, res) => {
  res.send("Welcome to my basic Express server!");
});

app.get("/about", (req, res) => {
  res.send(aboutMessage);
});

app.get("/contact", (req, res) => {
  res.json(contactInfo);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

// Dynamic route for product details
app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  let product = null;

  // Loop through the products to find the one with the matching ID
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      product = products[i];
    }
  }

  // Send the product or a 404 response if not found
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Make the server listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
