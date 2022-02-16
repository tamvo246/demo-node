var Food=require("../models/food.model");

module.exports.index=async function(req,res){
	var food=await Food.find();
	res.render("food/index",{foods:food});
}