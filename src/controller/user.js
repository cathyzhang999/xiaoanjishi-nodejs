/**
 * @description register
 */

const User=require('../models/User');

/**
 * register
 * @param {String} username 
 * @param {String} password 
 */
async function register(username,password){
    const newUser=User.create({
        username,
        password
    })
    return newUser
}

/**
 * Login
 * @param {String} username 
 * @param {String} password 
 */
async function login(username,password){
    const user= await User.findOne({ username, password });
    if(user!=null){
        return true
    }
    else{
        return false
    }
}

module.exports = { register, login };