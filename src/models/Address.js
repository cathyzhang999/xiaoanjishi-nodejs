/* @description address model */

const  mongoose=require('../db/db')

const addressSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    city: String,
    department: String,
    houseNumber: String,
    name: String,
    phone: String,
  },
  { timestamps: true }
);

const Address = mongoose.model("address", addressSchema);

module.exports=Address