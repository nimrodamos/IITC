// fake-database.js

const products = [
  { id: "1", name: "Laptop", price: 1200 },
  { id: "2", name: "Smartphone", price: 800 },
  { id: "3", name: "Headphones", price: 150 },
  { id: "4", name: "Keyboard", price: 75 },
  { id: "5", name: "Monitor", price: 300 },
];

function getProducts() {
  return products;
}

function getProductById(id) {
  let product = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      product = products[i];
    }
  }
  return product;
}

module.exports = {
  getProducts,
  getProductById,
};
