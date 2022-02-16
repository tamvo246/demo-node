var User=require("../models/user.model");



module.exports.requireCookie=async function(req,res,next){
	// console.log("----"+req.cookies.userId);
	var users=await User.find();
	console.log(users);
	if(!req.signedCookies.userId){
		res.redirect("/auth/login");
		return;
	}

	const userCookie=users.filter((user)=>{
		return user.id==req.signedCookies.userId;
	})
	if(userCookie.length<1){
		res.redirect("/auth/login");
		return;
	}
	res.locals.user=userCookie[0];
	next();
}