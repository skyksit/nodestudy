module.exports = function(app){
	let html = "index.ejs";
	app.get("/", function(req, res){
		res.render(html);
	});
};