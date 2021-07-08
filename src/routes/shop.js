/**
 * shop router
 */


const router = require("koa-router")();

const {
  getShopList,
  getShopDetail,
  getGoodsList,
} = require("../controller/shop");
const { createIndexes } = require("../models/Address");
const { SuccessModel, ErrorModel } = require("../res-model/resModel");

router.prefix("/api/shop");

/**
 * get shop list
 */
router.get("/hot-list", async (ctx, next) => {
  try{
    const shopList = await getShopList();
    ctx.body = new SuccessModel(shopList);
  }catch(ex){
    console.log(ex)
    ctx.body = new ErrorModel('1010',`get shop list failed - ${ex.message}`);
  }
  
});

/**
 * get a shop detail data
 */
router.get("/:id", async (ctx, next) => {
  const id = ctx.params.id;
  try{
    const shopDetail = await getShopDetail(id);
    ctx.body = new SuccessModel(shopDetail);
  }catch(ex){
    console.log(ex);
    ctx.body = new ErrorModel("1011", `get a shop detail failed - ${ex.message}`);
  }
  
});

/**
 * get goods list of a shop 
 */
router.get("/:id/goods", async (ctx, next) => {
  const shopId = ctx.params.id;
  const tab=ctx.query.tab||'all'
  try{
    const goodsList = await getGoodsList(shopId, tab);
    ctx.body = new SuccessModel(goodsList);
  }catch(ex){
    console.log(ex);
    ctx.body = new ErrorModel(
      "1012",
      `get goods list of a shop failed - ${ex.message}`
    );
  }
  
});

module.exports=router