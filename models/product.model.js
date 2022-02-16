var mongoose=require('mongoose');

var productSchema= new mongoose.Schema({
	name:String,
	image:String,
	description:String
})


const Product = mongoose.model('product', productSchema,'product');

module.exports=Product;