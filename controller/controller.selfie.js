var Selfie=require("../models/selfie.model");

module.exports.index=async function(req,res){
	var selfie=await Selfie.find();
	res.render("selfie/index",{selfies:selfie});
}