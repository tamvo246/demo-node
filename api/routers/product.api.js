var express = require('express')
var router = express.Router()

var controller=require('../controller/controller.product')
var authMiddleware=require('../../middleware/check.cookie')

router.get('/',controller.index)

router.post('/create',controller.create);

router.get('/find/:id',controller.findId);

router.get('/delete-one/',controller.deleteOne);

router.get('/delete-many/',controller.deleteMany);

module.exports=router;