var express = require("express");
var ejs = require("ejs");

var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

app.use(express.static("public"));

var controller1 = require("./router/root")(app);
var controller2 = require("./router/bbs")(app);

var server = app.listen(3000, function(){
	console.log("server starting");
});