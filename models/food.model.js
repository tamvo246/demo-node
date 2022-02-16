var mongoose=require('mongoose');

var foodSchema = new mongoose.Schema({
	name:String,
	image:String,
	description:String
	
})

const Food = mongoose.model('food', foodSchema,'food');

module.exports=Food;