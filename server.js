import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import { schema } from "./data/schema";

const express = require("express");
const server = express();
const PORT = 4000;
const url = process.env.DATABASEURL;

// mongoose.connect("mongodb://localhost/miruku", function(err) {
mongoose.connect(url, function(err) {
  if (err) throw err;
  console.log("Successfully connected");
});

const productSchema = mongoose.Schema({
  imagePath: Array,
  title: Array,
  description: String,
  price: Array,
  checkedMatchPrice: Boolean
});

const orderSchema = mongoose.Schema({
  email: String,
  phone: String,
  date: String,
  location: String,
  comment: String
});

const Product = mongoose.model("Product", productSchema);
const Order = mongoose.model("Order", orderSchema);

server.use("*", cors({ origin: "http://localhost:3000" }));
server.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema, context: { Product, Order } })
);

server.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

server.get("/", function(req, res) {
  res.send("This is the Welcome Page!");
});

server.listen(PORT, () =>
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);
