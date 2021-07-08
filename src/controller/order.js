const Goods = require("../models/Goods");
const Order = require("../models/Order");
const Address = require("../models/Address");

/**
 * create order
 * @param {string} username 
 * @param {object} data 
 * @returns 
 */
async function createOrder(username, data) {
    const {
        addressId,
        shopId,
        shopName,
        isCanceled,
        goods=[]
    }=data
    const shop_id = shopId.slice(1)
    const address = await Address.findById(addressId);
    const pIds=goods.map(p=>p.id)
    const goodsList = await Goods.find({
      _id: {
        $in: pIds,
      },
      shopId: shop_id,
    });
    // console.log('goodList',goodsList)
    const goodsWithSales=goodsList.map(item=>{
        const id=item._id.toString()
        const filterGoods=goods.filter(p=>p.id==id)
        
        if (filterGoods.length==0){
            throw new Error ('not matched')
        }else{
            const sales = filterGoods[0].num;
            return {
              goods: item,
              orderSales: sales,
            };
        }          
    })

    const order = await Order.create({
      username,
      shopId,
      shopName,
      isCanceled,
      address,
      purchases:goodsWithSales,
    });
    return order
}

async function getOrderList(username) {
    const orderList=Order.find({username})
    return orderList
}
module.exports = { createOrder, getOrderList };