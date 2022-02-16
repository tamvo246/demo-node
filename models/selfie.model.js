var mongoose=require('mongoose');

var selfieSchema = new mongoose.Schema({
	name:String,
	image:String,
	description:String
	
})

const Selfie = mongoose.model('selfie', selfieSchema,'selfie');

module.exports=Selfie;