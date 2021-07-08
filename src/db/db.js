/* @description mongoose */

// const mongoose = require("mongoose");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017";
const dbName = "testsdb";
mongoose.set("useCreateIndex", true), 
mongoose.set("useFindAndModify", false);

mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => {
  console.log("mongoose connect error", err);
});
db.once("open", () => {
  console.log("mongoose connect success");
});
module.exports = mongoose;
