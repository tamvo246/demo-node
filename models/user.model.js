var mongoose=require('mongoose');

var userSchema = new mongoose.Schema({
	name:String,
	phone:String,
	username:String,
	password:String,
	avatar:String,
	age: Number
	
})

const User = mongoose.model('user', userSchema,'user');

module.exports=User;

