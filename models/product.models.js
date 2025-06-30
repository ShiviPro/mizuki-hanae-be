const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  yearOfMaking: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  description: String,
  category: [
    {
      type: String,
      required: true,
    },
  ],
  images: [
    {
      type: String,
      required: true,
    },
  ],
  dimensions: {
    type: String,
    required: true,
  },
  isFramed: {
    type: Boolean,
    default: false,
  },
  stateOfPreservation: {
    type: String,
    enum: ["New/Excellent", "Very Good", "Good", "Fair", "Poor"],
    required: true,
  },
  proofOfAuthenticity: {
    type: String,
    required: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
  },
  markedPrice: {
    type: Number,
    required: true,
  },

  // Todo: delivery to be linked from seller model

  tags: [
    {
      type: String,
      required: true,
    },
  ],
  additionalInfo: Object,

  // Todo: comments to be linked from user model

  // Todo: artists to be linked from their own model,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
