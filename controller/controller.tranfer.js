var shortId=require('short-id')

var fs=require('fs');

function readFile(){
	var readData=fs.readFileSync('./transfer.json',{encoding:'utf8'})	
	data=JSON.parse(readData);
	return data['transfer'];
}

var transfer=readFile();


module.exports.create=function(req,res,next){
	res.render("tranfer/create",{ csrfToken: req.csrfToken() });
}

module.exports.postTransfer=function(req,res,next){
	var accountId=req.body.accountId;
	var amount=parseInt(req.body.amount);
	var id=shortId.generate();
	var data={
		id,
		accountId,
		amount,
		userId:req.signedCookies.userId
	}
	transfer.push(data);
	var content='{"transfer":'+JSON.stringify(transfer)+'}'
	fs.writeFileSync('./transfer.json',content,{encoding:'utf8'});
	res.redirect("/tranfer/create");

}