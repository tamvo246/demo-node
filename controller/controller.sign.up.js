var User=require('../models/user.model');
var md5 = require('md5');
module.exports.postCreate=async function(req,res,next){
	
	var name=req.body.name;
	var phone=req.body.phone;
	var password=md5(req.body.password);
	var username=req.body.username;
	var rePass=req.body.rePass;
	var age=parseInt(req.body.age);
	var avatar=req.avatar;

	if(!req.file){
		var avatar='uploads/c68c5d575b2b43481ac0c99d0eb33ef8';
	}else{
		var avatar=req.file.path;
		avatar=avatar.replace("\\",'/');
		avatar=avatar.replace("\\",'/').split("/").slice(1).join("/");
	}
	var sign={name,phone,username,password,avatar,age};
	// console.log(sign);
	await User.create({name:name,phone:phone,username:username,password:password,avatar:avatar,age:age})
	res.redirect("/auth/login");
}