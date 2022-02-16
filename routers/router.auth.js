var express = require('express')
var router = express.Router()

var controller=require('../controller/controller.auth')
var authLogin=require("../middleware/check.cookie")
router.get('/login',(req,res)=>{
	res.render("login/login")
})

router.post('/login',controller.postLogin)

module.exports=router;