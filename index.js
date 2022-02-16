var express=require('express');
var app=express();
var port=3000;
var bodyParser = require('body-parser')

var fetch=require('node-fetch');
var axios = require('axios')

var routerUser=require('./routers/router.user');
var routerLogin=require('./routers/router.auth');
var routerProduct=require('./routers/router.product')
var file =require('fs');
var cookieParser = require('cookie-parser');
var sessionMiddleware=require('./middleware/check.session')
var routerCart=require('./routers/router.cart');
var routerTranfer=require('./routers/router.tranfer');
var routerApiProduct=require('./api/routers/product.api');
var routerSignUp=require('./routers/router.sign.up')
var routerFood=require('./routers/router.food')
var routerGarden=require('./routers/router.garden')
var routerSelfie=require('./routers/router.selfie')

var csrf = require('csurf')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/express-demo',{useNewUrlParser: true, useUnifiedTopology: true});



app.use(cookieParser("h8r8quujw9922292j"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'));
app.use(sessionMiddleware);
// app.use(csrf({cookie:true}));
app.use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', '*'); // change '*' to domain to restrict access to domain only
 res.header(
  'Access-Control-Allow-Headers',
  'Origin, X-Requested-With, ContentType, Accept, Authorization'
 );
 next();
})

app.set('view engine','pug')
app.set('views','./views')

// async function getApi(){
// 	const response=await fetch('https://jsonplaceholder.typicode.com/posts')
// 	const posts= await response.json()
// 	return posts
// }



app.get('/',(req,res)=>{
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    res.json(response.data);
  })
   .catch(function (error) {
    console.log(error);
  })
	

})


app.use('/auth',routerLogin);
app.use('/user',routerUser);
app.use('/product',routerProduct);
app.use('/cart',routerCart);
app.use('/tranfer',routerTranfer);
app.use('/api/product',routerApiProduct);
app.use('/sign-up',routerSignUp)
app.use('/food',routerFood)
app.use('/garden',routerGarden)
app.use('/selfie',routerSelfie)


app.listen(port,()=>{
	console.log(`App listening port ${port}`);
});
