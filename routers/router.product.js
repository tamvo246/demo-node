var express = require('express')
var router = express.Router()

var controller=require('../controller/controller.product')
var authMiddleware=require("../middleware/check.cookie")

router.get('/',controller.index)

module.exports=router;