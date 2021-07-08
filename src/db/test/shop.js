/**
 * @description shop test
 */

const Shop = require("../../models/Shop");
!(async () => {
//   await Shop.create({
//     name: "沃尔玛",
//     imgUrl: "/images/shop/wmt.jpeg",
//     sales: 10000, // 月售多少
//     expressLimit: 0, // 起售价格
//     expressPrice: 5, // 基础运费
//     slogan: "VIP尊享满89元4元运费券（每月3张）", // 宣传标语
//   });
//   await Shop.create({
//     name: "山姆会员店",
//     imgUrl: "/images/shop/sam.jpeg",
//     sales: 2000, // 月售多少
//     expressLimit: 0, // 起售价格
//     expressPrice: 5, // 基础运费
//     slogan: "联合利华洗护满10减5", // 宣传标语
//   });

    /* get shop list */
//   const shopList=await Shop.find()
//   console.log(shopList)

  /* get shop detail */
  const id = "60680dfcbee00e21a02db4d8";
  const oneShop=await Shop.findById(id)
  console.log(oneShop);
  
})();
