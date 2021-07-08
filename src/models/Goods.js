/* @description goods model */

const { removeAllListeners } = require("nodemon");
const mongoose = require("../db/db");

const Schema = mongoose.Schema(
  {
    shopId: {
      type: String,
      require: true,
    },
    tabs: [String],
    name: String,
    imgUrl: String,
    sales: Number,
    price: Number,
    oldPrice: Number,
  },
  { timestamps: true }
);

const Goods = mongoose.model("goods", Schema);

module.exports = Goods;
