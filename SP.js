var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, '/public')));

app.set("view engine", "ejs");

app.get("*", function(req, res){
    res.render("SP");
});

app.get("/results", function(req, res){
    var root = req.params.root;
    res.render("results");
});
app.post("/results", function(req,res){
    res.redirect("/results");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("!!!!!SERVER ON!!!!!")
});