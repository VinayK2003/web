const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userid: Number,
  password: String,
  name: String,
  imageUrl: String,
});
module.exports = mongoose.model("schema", schema);
