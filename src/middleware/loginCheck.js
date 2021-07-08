const { ErrorModel } = require("../res-model/resModel");

async function loginCheck(ctx,next){
    const session = ctx.session
    const userInfo=session.userInfo
    if(session&&userInfo){
        await next()
    }else{
        ctx.body = new ErrorModel(1003,'the user has not logined');
    }
}

module.exports = loginCheck;