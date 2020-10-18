const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
  console.log("This line is always called");
  res.setHeader("Access-Control-Allow-Origin", "*"); //can connect from any host
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS"); //allowable methods
  res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/inventory", (req, res, next) => {
  const inventory = [
    {
      id: "1",
      itemName: "Apple",
      itemCategory: "fruit",
      price: "1",
      stock: "99",
    },
    {
      id: "2",
      itemName: "Potato",
      itemCategory: "vegetable",
      price: "2",
      stock: "99",
    },
    {
      id: "3",
      itemName: "Chips",
      itemCategory: "snack",
      price: "3",
      stock: "99",
    },
  ];
  //send the array as the response
  res.json(inventory);
});
// serve incoming post requests to /inventory
app.post("/inventory", (req, res, next) => {
  const inv = req.body;
  console.log(inv.firstName + " " + inv.lastName);
  //sent an acknowledgment back to caller
  res.status(201).json("Post successful");
});

//to use this middleware in other parts of the application
module.exports = app;
