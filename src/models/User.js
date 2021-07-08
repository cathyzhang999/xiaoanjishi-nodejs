/* @description user model */

const mongoose=require('../db/db')
const userSchema=mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:String
},{timestamps:true})

const User=mongoose.model('user',userSchema)

module.exports=User