const  User=require('../../models/User')

!(async ()=>{
    // await User.create({
    //     username:"13999678888",
    //     password:'123'
    // })

    const aUser=new User({
      username: "13798769999",
      password: "abc",
    });
    aUser.save()

    // const userList=User.find()
    // console.log(userList)

    const oneUser = User.findOne({
      username: "13798769999",
      password: "abc"
    });
    console.log('login',oneUser);
})()