module.exports.postCreate=function(req,res,next){
		var name=req.body.name;
		var phone=req.body.phone;
		var password=req.body.password;
		var username=req.body.username;
		var rePass=req.body.rePass;
		var age=req.body.age;

		var error=[];
		var value={name,phone,password,username,rePass,age}
		if(!name){
			error.push("User name are require");
			
		}
		if(!phone){
			error.push("Phone are require");
			// return;
		}if(!username){
			error.push("User name are require");
			// return;
		}
		if(!password){
			error.push("Password are require");
			// return;
		}
		if(password!==rePass){
			error.push("Re Password are require");
			// return;
		}
		if(!age){
			error.push("Age are require");
			// return;
		}


		if(error.length){
			res.render("sign-up/index",{error:error[0],value});	
			return;
		}
		next();
	
	}
