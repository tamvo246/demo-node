module.exports.postCreate=function(req,res,next){
		var name=req.body.name;
		var phone=req.body.phone;
		var error=[];
		var value={name,phone}
		if(!name){
			error.push("User name are require");
		}
		if(!phone){
			error.push("Phone are require");
		}
		if(error.length){
			res.render("users/update",{error,value});
			return;
		}
		next();
	
	}
