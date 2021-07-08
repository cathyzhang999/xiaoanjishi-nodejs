/**
 * description goods
 */
const Goods= require('../../models/Goods')

!(async () => {
  // 创建
    await Goods.create({
      shopId: "60680dfcbee00e21a02db4d9", // 沃尔玛
      name: "葡萄",
      imgUrl: "http://localhost:3000/images/goods/grape.jpg",
      sales: 120, // 月售多少
      price: 32, // 当前价格
      oldPrice: 35, // 原价
      tabs: ["all", "seckill", "fruit"],
    });
  //   p1.save();
    // 创建
    const p2 = new Goods({
      shopId: "60680dfcbee00e21a02db4d9", // 沃尔玛
      name: "苹果",
      imgUrl: "http://localhost:3000/images/goods/apple.jpeg",
      sales: 210, // 月售多少
      price: 24, // 当前价格
      oldPrice: 28, // 原价
      tabs: ["all", "seckill", "fruit"],
    });
    p2.save();
    // 创建
    const p3 = new Goods({
      shopId: "60680dfcbee00e21a02db4d9", // 沃尔玛
      name: "桃子",
      imgUrl: "http://localhost:3000/images/goods/peach.jpg",
      sales: 60, // 月售多少
      price: 17, // 当前价格
      oldPrice: 19, // 原价
      tabs: ["all", "seckill", "fruit"],
    });
    p3.save();
  //   // 创建
  const p4 = new Goods({
    shopId: "60680dfcbee00e21a02db4d8", // 山姆会员店
    name: "西瓜",
    imgUrl: "http://localhost:3000/images/goods/watermelon.jpg",
    sales: 200, // 月售多少
    price: 13, // 当前价格
    oldPrice: 15, // 原价
    tabs: ["all", "seckill", "fruit"],
  });
  p4.save();

  /* search by id and tab */
  //   const shopId='60680dfcbee00e21a02db4d8'
  // const goods = await Goods.find({
  //   shopId: "60680dfcbee00e21a02db4d8",
  //   tabs: {
  //     $in: "seckill",
  //   },
  // });
  // console.log(goods)
})();