const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

const initialiseDatabase = async () => {
  await mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("Successfully Connected to Database.");
    })
    .catch((error) => {
      console.log("Error Connecting to Database:", error);
    });
};

module.exports = { initialiseDatabase };
