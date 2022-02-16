var User=require("../models/user.model");

var user=async function readUser(){
 return await User.find();
}

module.exports=user();