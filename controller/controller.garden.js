var Garden=require("../models/garden.model");

module.exports.index=async function(req,res){
	var garden=await Garden.find();
	res.render("garden/index",{gardens:garden});
}