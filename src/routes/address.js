/**
 * @description address router
 */

const router = require("koa-router")()
const { SuccessModel, ErrorModel } = require("../res-model/resModel");
const {
  createAddress,
  getAddressList,
  getAddressById,
  updateAddress,
} = require("../controller/address");
const loginCheck=require('../middleware/loginCheck')

router.prefix("/api/user/address");

/**
 * creat address
 */
router.post('/',loginCheck,async(ctx,next)=>{
    const data=ctx.request.body
    const userInfo = ctx.session.userInfo;
    const username = userInfo.username;
    try{
        const newAddress = await createAddress(username, data);
        // console.log(newAddress);
        ctx.body = new SuccessModel(newAddress);
    }catch(ex){
        console.error(ex)
        ctx.body = new ErrorModel(1004,`create address failed - ${ex.message}`);
    }    
})

/**
 * get a user address list
 */
router.get("/", loginCheck,async (ctx, next) => {
  const username = ctx.session.userInfo.username;
  try {
    const addressList = await getAddressList(username);
    ctx.body = new SuccessModel(addressList);
  } catch (ex) {
    console.error(ex);
    ctx.body = new ErrorModel(1005, `get address list failed - ${ex.message}`);
  }
});
/**
 * get a address by id
 */
router.get("/:id", loginCheck, async (ctx, next) => {
  const id = ctx.params.id;
  try {
    const address = await getAddressById(id);
    console.log(address)
    ctx.body = new SuccessModel(address);
  } catch (ex) {
    console.error(ex);
    ctx.body = new ErrorModel(1006, `get address by id failed - ${ex.message}`);
  }
});

/**
 * update a address
 */
router.patch("/:id", loginCheck, async (ctx, next) => {
  const id = ctx.params.id;
  const username=ctx.session.userInfo.username
  const data=ctx.request.body
  try {
    const address = await updateAddress(username,id,data);    
    ctx.body = new SuccessModel(address);
  } catch (ex) {
    console.error(ex);
    ctx.body = new ErrorModel(1007, `update address failed - ${ex.message}`);
  }
});

module.exports = router
