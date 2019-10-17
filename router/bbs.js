let bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended : false});

module.exports = function(app){
	app.get("/bbs/view", function(req, res){
		let req_data = {
			id : req.query.id,
			page : req.query.page
		};
		res.render("bbsview.ejs", req_data);
	});
	
	app.get("/bbs/write", function(req, res){
		res.render("bbswrite.ejs");
	});

	app.post("/bbs/writeprocess", urlencodedParser, function(req, res){
		let req_data = {
			id : req.body.id,
			title : req.body.title,
			contents : req.body.contents
		};
		res.render("writeok.ejs", req_data);
	});

	app.get("/bbs/writeprocess", function(req, res){
		let req_data = {
			id : req.query.id,
			title : req.query.title,
			contents : req.query.contents
		};
		res.render("writeok.ejs", req_data);
	});

	app.get("/bbs/list", function(req, res){
		res.send("BBS LIST");
	});
};