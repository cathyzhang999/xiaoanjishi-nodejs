/**
 * @description order data test
 */

const Order=require('../../models/Order')
const Address = require("../../models/Address");
const Goods = require("../../models/Goods");


!(async ()=>{
  const requireBody = {
    username: "13798769999",
    addressId: "6068047087827a0c3cc6954d",
    shopId: "60680dfcbee00e21a02db4d8",
    shopName: "沃尔玛",
    isCanceled: false,
    goods: [
      {
        id: "60681ef6d1b6321168f26d13",
        num: 3,
      },
      {
        id: "60681ef6d1b6321168f26d14",
        num: 5,
      },
    ],
  };
  const address = await Address.findById(requireBody.addressId);
  // console.log(address);
  const ids = requireBody.goods.map((item) => item.id);
  const goodsList = await Goods.find({
    _id: {
      $in: ids,
    },
    shopId: requireBody.shopId,
  });
  // console.log(goodsList)
  const goodsWithSales = goodsList.map((salesGoods) => {
    const goodsId = salesGoods._id.toString();
    const filterGoods = requireBody.goods.filter((item) => item.id === goodsId);
    if (salesGoods.length == 0) {
      throw new error("not match");
    }
    return {
      goods: salesGoods,
      orderSales: filterGoods[0].num,
    };
  });
  // console.log(goodsWithSales);

  /*  create order*/
//   await Order.create({
//     username: "13798769999",
//     shopId: requireBody.shopId,
//     shopName: requireBody.shopName,
//     isCanceled: requireBody.isCanceled,
//     goodsList: goodsWithSales,
//     address,
//   });

  const orderList=await Order.find().sort({_id:-1})
  console.log(orderList)
})()