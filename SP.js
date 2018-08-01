var express = require("express");
var app = express();
var path = require("path");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/root_bank", { useNewUrlParser: true });
app.use(express.static(path.join(__dirname, '/public')));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("SP");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("!!!!!SERVER ON!!!!!")
});