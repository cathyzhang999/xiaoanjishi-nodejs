/* @description shop model */

const mongoose = require("../db/db");

const shopSchema = mongoose.Schema(
  {
    name: String,
    city: String,
    imgUrl: String,
    sales: Number,
    expressLimit: {
      type: Number,
      default: 0,
    },
    expressPrice: Number,
    slogan: String,
  },
  { timestamps: true }
);

const Shop = mongoose.model("shop", shopSchema);

module.exports = Shop;
