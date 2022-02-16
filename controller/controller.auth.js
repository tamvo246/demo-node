var file =require('fs');
var md5=require('md5');

// function readFile(){
// 	var readData=file.readFileSync('./data.json',{encoding:'utf8'})	
// 	data=JSON.parse(readData);
// 	return data['users'];
// }
// users=readFile();

var user=require("../database/db.user");


module.exports.postLogin= async function(req,res){

	// var users = User.find();
	var users=await user;

	var userName=req.body.username;
	var passWord=req.body.password;
	const userLogin=users.filter((user)=>{
		return userName===user.username;
	})
	var value={userName,passWord};
	var mess=[]

	// console.log(typeof(passWord));
	if(userLogin.length<1){
		mess.push("Username does not exist");
		res.render("login/login",{mess,value})
		return ;
	}
	var pass=md5(passWord);
	if(userLogin.length>0 && pass!=userLogin[0].password){
		// console.log(false);
		mess.push("Wrong password");
		res.render("login/login",{mess,value})
		return;
	}

	res.cookie("userId",userLogin[0].id,{
		signed:true
	});
	res.redirect('/user');
}