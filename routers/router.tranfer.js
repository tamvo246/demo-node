var express=require('express');
var router=express.Router();

var controller=require('../controller/controller.tranfer')
var authMiddleware=require("../middleware/check.cookie")

router.get("/create",authMiddleware.requireCookie,controller.create);
router.post("/create",authMiddleware.requireCookie,controller.postTransfer);

module.exports=router;