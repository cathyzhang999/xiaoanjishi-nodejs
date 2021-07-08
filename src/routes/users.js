const router = require('koa-router')()
const {register,login}=require('../controller/user');
const User = require('../models/User');
const { SuccessModel, ErrorModel }=require('../res-model/resModel')


router.prefix("/api/user");

// router.get("/", function (ctx, next) {
//   ctx.body = "this is a users response!";
// });

router.get('/register', function (ctx, next) {
  ctx.body = "this is a users/bar response";
});

router.post("/register",async(ctx,next)=>{
  const {username,password}=ctx.request.body  
  try {
    const newUser= await register(username, password);    
    ctx.body = new SuccessModel(newUser);   
  }catch(ex){
    console.error(ex);    
    ctx.body=new ErrorModel(1001,`register fail! - ${ex.message}`)
  }  
});


router.post('/login',async(ctx,next)=>{
  const { username, password } = ctx.request.body;  
  const res = await login(username, password);
  if(res){
    ctx.body = new SuccessModel();   
    ctx.session.userInfo = { username };
  }else{
    ctx.body=new ErrorModel(1002,`login authentication failed`)
  }
})

module.exports = router
