/**
 * order router
 */

const router = require("koa-router")();
const { SuccessModel, ErrorModel } = require("../res-model/resModel");
const loginCheck = require("../middleware/loginCheck");
const { createOrder, getOrderList } = require("../controller/order");
const { createIndexes } = require("../models/Address");


router.prefix("/api/order");

/**
 * create purchase order
 */
router.post('/',loginCheck,async(ctx,next)=>{
    const username=ctx.session.userInfo.username
    const data=ctx.request.body
    // console.log(data)
    try{
        const newOrder = await createOrder(username, data);
        ctx.body = new SuccessModel(newOrder);
    }catch(ex){
        console.log(ex)
        ctx.body = new ErrorModel(1008,`create order failed - ${ex.message}`);
    }    
})

/**
 * get order list
 */
router.get("/", loginCheck, async (ctx, next) => {
    const username = ctx.session.userInfo.username;
    try{
        const orderList = await getOrderList(username);
        ctx.body = new SuccessModel(orderList);
    }catch(ex){
        console.log(ex)
        ctx.body = new ErrorModel(
          1009,
          `get order failed - ${ex.message}`
        );
    }
    
});

module.exports=router