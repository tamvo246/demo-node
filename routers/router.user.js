var express = require('express')
var router = express.Router()
var file =require('fs');

var controller=require("../controller/controller.user");
var validate=require("../validate/validate.user")
var authMiddleware=require("../middleware/check.cookie")
var authMiddleware=require("../middleware/check.cookie")
var validate=require("../validate/validate.user")

var multer  = require('multer')
var upload = multer({ dest: './public/uploads/' })

router.get('/',authMiddleware.requireCookie,controller.index)

router.get('/search',authMiddleware.requireCookie,controller.search)

router.get("/create",authMiddleware.requireCookie,controller.create)

router.post("/create",
	upload.single('avatar'),
	authMiddleware.requireCookie,
	validate.postCreate,
	controller.postCreate)

router.get('/:id',authMiddleware.requireCookie,controller.view);

router.get('/update/:id',authMiddleware.requireCookie,controller.update)

router.post('/update/:id',
	upload.single('avatar'),	
	authMiddleware.requireCookie,
	// validate.postCreate,
	controller.postUpdate
	)
module.exports=router;