const mongoose = require("mongoose");

const User = new mongoose.Schema({
  userid: Number,
  password: String,
  name: String,
  imageUrl: String,
});
module.exports = mongoose.model("User", User);
