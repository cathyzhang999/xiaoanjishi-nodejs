
const Address=require('../models/Address')

/**
 * create a new address
 * @param {String} username 
 * @param {Object} data 
 * @returns 
 */
async function createAddress(username,data){
    const newAddress=await Address.create({
        username,
        ...data
    })
    return newAddress
}

/**
 * get a user address list
 * @param {stringg} username 
 * @returns 
 */
async function getAddressList(username){
    const list= await Address.find({username}).sort({updateAt:-1})   
     return list;
}

/**
 * get a address by id
 * @param {string} id 
 * @returns 
 */
async function getAddressById(id) {  
  const address = Address.findById(id);
  return address;
}

/**
 * update address
 * @param {string} username 
 * @param {string} id 
 * @param {object} data 
 * @returns 
 */
async function updateAddress(username,id,data){
    const address=await Address.findOneAndUpdate(
        {username,_id:id},
        {username,...data},
        {new:true})
    return address
}
module.exports = {
  createAddress,
  getAddressList,
  getAddressById,
  updateAddress,
};