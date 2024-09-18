const express = require("express");
const app = express();

const cats = [
  { id: "1", name: "fluf" },
  { id: "2", name: "matan" },
];

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/cats", (req, res) => {
  res.json(cats);
});

app.get("/cats/info", (req, res) => {
  res.send("cats are gods");
});

app.get("/cats/:catId", (req, res) => {
  const catId = req.params.catId;
  let cat = null;
  for (let i = 0; i < cats.length; i++) {
    if (cats[i].id === catId) cat = cats[i];
  }
  if (cat === null) res.send("cat not found");
  else res.json(cat);
});

app.get("/login", (req, res) => {
  res.send("please login");
});

app.get("/protected", (req, res) => {
  // check if user is authenticated
  res.redirect("/login");
});

app.get("*", (req, res) => {
  res.send("Oops, it seems you are lost...");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
