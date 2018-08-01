var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/scripts')));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("SP");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("!!!!!SERVER ON!!!!!")
});