// ENV Variables
require("dotenv").config();
//Dependencies
const mongoose = require("mongoose");

// Create COnnection to DB
const { MONGODBURI } = process.env;
const config = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(MONGODBURI, config);
const db = mongoose.connection;
db.on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("You are disconnected to Mongo"))
  .on("error", (err) => console.log(err));

module.exports = mongoose;
