const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    title:String,
    authors:Array,
    image:String,
    subject:String
})

module.exports=mongoose.model("tests",userSchema);
