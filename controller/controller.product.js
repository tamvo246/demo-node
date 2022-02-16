// var file =require('fs');


// function readFileUser(){
// 	var readData=file.readFileSync('./data.json',{encoding:'utf8'})	
// 	data=JSON.parse(readData);
// 	return data['users'];
// }


var User=require("../models/user.model");
var Product=require('../models/product.model');

module.exports.index= async function(req,res){

	var users= await User.find(); 

	if(!req.signedCookies.userId){
		res.locals.user=[{name:""}];
	}
	else{
			const userCookie=users.filter((user)=>{
			return user.id==req.signedCookies.userId;
			})
		if(userCookie.length<1){
			res.locals.user=[{name:""}];
		}
		res.locals.user=userCookie[0];
	}
	
	var products = await Product.find();
	var page=parseInt(req.query.page)||1;
	var numItem=8;
	var start=(page-1)*numItem;
	var end=(page-1)*numItem+numItem;
	productPage=products.slice(start,end);
	// console.log(products);
	
		// console.log(products);
		res.render('product/index',{productPage:productPage});
		// console.log(products);


	
}