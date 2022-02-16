var express = require('express')
var router = express.Router()
var authMiddleware=require("../middleware/check.cookie")

var controller=require('../controller/controller.food')

router.get('/',authMiddleware.requireCookie,controller.index);

module.exports=router;