 
var shortId=require('short-id');
var file =require('fs');
var ids=require('short-id')



var User=require("../models/user.model");
var Product=require('../models/product.model');


 module.exports=async function(req,res,next){



 	var products=JSON.stringify(await Product.find());
	var users=JSON.stringify(await User.find());


 	if (!req.signedCookies.sessionId) {
 		var ids=shortId.generate();
 		res.cookie("sessionId",ids,{
 			signed:true
 		});
	 	// var session=[{id:ids}];
	 	// session=JSON.stringify(session)
	 	// var content='{"users":'+users+',"products":'+products+',"session":'+session+'}';
		// file.writeFileSync("./data.json",content,{encoding:'utf8'});
 	}
 	next();
 }