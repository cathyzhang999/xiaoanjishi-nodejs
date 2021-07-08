const Address = require("../../models/Address");

!(async () => {
  //   await Address.create({
  //     username: "13798769999",
  //     city: "北京",
  //     department: "西二旗小区",
  //     houseNumber: "2号楼1单元403",
  //     name: "双越老师",
  //     phone: "18677778888",
  //   });

  //   const aAddress = new Address({
  //     username: "13798769999",
  //     city: "北京",
  //     department: "软件园二期",
  //     houseNumber: "百度科技园",
  //     name: "双越老师",
  //     phone: "18677778888",
  //   });
  //   aAddress.save();

  //   const addressList = await Address.find({ username: "13798769999" }).sort({updateAt:-1});
  //   console.log(addressList);

  /* seach by id */
  const id = "6068047087827a0c3cc6954e";
//   const oneAddress = await Address.findById(id);
//   console.log("findById", oneAddress);

  /* update */
  const newAddress = {
    username: "13798769999",
    city: "北京",
    department: "软件园三期",
    houseNumber: "百度科技园",
    name: "双越",
    phone: "18677778888",
  };
  const address=await Address.findOneAndUpdate({_id:id},newAddress,{new:true})
  console.log(address);
})();
