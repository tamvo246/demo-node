var Products=require("../../models/product.model")
var mongoose = require('mongoose');

module.exports.index=async function(req,res,next){
	var product=await Products.find();
	res.json(product);

}

module.exports.create=async function(req,res,next){
	// console.log(req.body);

	await Products.create(req.body);

}

module.exports.findId=async function(req,res,next){

	// var _id = mongoose.Types.ObjectId.fromString(req.params)
	var product=await Products.findById(req.params.id).exec();
	console.log(product);
	// res.json(product);
}



module.exports.deleteOne=async function(req,res,next){
	await Products.deleteOne({"name":"I-PhoneX"})
}


module.exports.deleteMany=async function(req,res,next){
	await Products.deleteMany({"name":"I-PhoneX"})
}



