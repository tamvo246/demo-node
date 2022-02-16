var file =require('fs');
var ids=require('short-id')

// }

var User=require("../models/user.model");
var Product=require('../models/product.model');



module.exports.index=async function (req,res){
	// console.log(users)
	users=await User.find();
	res.render('users/userList',{users});
}
module.exports.search=async function(req,res){
	// console.log(req.query);
	const users=await User.find();
	var query=req.query.q;
	var matchUser=users.filter((user)=>{
		return user.name.toLowerCase().lastIndexOf(query.toLowerCase())!==-1;
	})

	res.render('users/userList',{users:matchUser,query});
}

module.exports.create=function(req,res){
	res.render("users/create");
}
module.exports.postCreate=async function(req,res){
	var products=await Product.find();
	var users=await User.find();
	var name=req.body.name;
	var phone=req.body.phone;
	if(!req.file){
		var avatar='uploads/c68c5d575b2b43481ac0c99d0eb33ef8';
	}else{
		var avatar=req.file.path;
		avatar=avatar.replace("\\",'/');
		avatar=avatar.replace("\\",'/').split("/").slice(1).join("/");
	}
	// console.log(avatar);

	users.push({id:ids.generate(),name:name,phone:phone,avatar:avatar});
	var content=JSON.stringify(users);
	// console.log(products);

	content='{"users":'+content+',"products":'+products+'}';
	// console.log(content);
	file.writeFileSync("./data.json",content,{encoding:'utf8'});
	// console.log(users);
	res.redirect("/user");




}

module.exports.view=async function(req,res){
	var users=await User.find();
	let idParam=req.params.id;
	// res.render("users/"+id);
	const userParam=users.find((user)=>{
		return user.id==idParam;
	})


	res.render('users/detailUser',{user:userParam});


}


module.exports.update=async function(req,res,next){
	const userId=req.params.id;
	// console.log(req.params.id);
	var users=await User.findOne({"_id":userId})
	// console.log(users);
	res.render('users/update',{
		phone:users.phone,
		name:users.name,
		username:users.username,
		age:users.age
	});
}

module.exports.postUpdate=async function(req,res){
	let id=req.params.id;
	let phone=req.body.phone;
	let name=req.body.name;
	let username=req.body.username;
	let age=req.body.age;
	// console.log(req);
	await User.updateOne({"_id":id},{$set:{"phone":phone,"name":name,"username":username,"age":age}})
	res.redirect('/user');
}