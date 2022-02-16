var express = require('express')
var router = express.Router()
var multer  = require('multer')
var upload = multer({ dest: './public/uploads/' })
var controller=require('../controller/controller.sign.up')
// var authLogin=require("../middleware/check.cookie")
var signUp=require('../validate/validate.sign.up')
router.get('/',(req,res)=>{
	res.render("sign-up/index")
})

router.post('/post',upload.single('avatar'),signUp.postCreate,controller.postCreate)

module.exports=router;