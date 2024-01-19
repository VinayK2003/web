const mongoose=require('mongoose')

const schema= new mongoose.Schema({
    user_id:Number,
    password: String,
    name: String
});
module.exports=mongoose.model("scehma",schema);