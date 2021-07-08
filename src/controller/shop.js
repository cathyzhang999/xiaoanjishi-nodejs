const Shop=require('../models/Shop')
const Goods = require("../models/Goods");


async function getShopList(){
    const list =await  Shop.find()
    return list
}

async function getShopDetail(id) {
  const shop = await Shop.findById(id);
  return shop;
}

async function getGoodsList(shopId,tab){
    const goodsList = await Goods.find({
      shopId,
      tabs: {
        $in: tab,
      },
    });
    return goodsList
}
module.exports = { getShopList, getShopDetail, getGoodsList };