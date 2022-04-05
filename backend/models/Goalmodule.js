// importing mongoose from mongoose
const mongoose = require("mongoose");

// creating the database schema
const goalsSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// exporting the schema
module.exports = mongoose.model("Goal", goalsSchema); //Goal is the name of the collection in the database
