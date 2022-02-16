var mongoose=require('mongoose');

var gardenSchema = new mongoose.Schema({
	name:String,
	image:String,
	description:String
	
})

const Garden = mongoose.model('garden', gardenSchema,'garden');

module.exports=Garden;