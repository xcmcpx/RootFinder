//initialize all variables and dependencies for application (Express,mongoose, body-parser, correct path for file usage)
var express = require("express");
var app = express();
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//handshake for mongo database (useNewURLParser for most current versions)
mongoose.connect("mongodb://localhost:27017/root_bank", { useNewUrlParser: true });
//name the path/file location for application resources such as views/scripts/styles
app.use(express.static(path.join(__dirname, '/public')));
//dependecy that extends our functionality to grabs HTML elements.
app.use(bodyParser.urlencoded({extended:true}));

// set the view engine to ejs
app.set("view engine", "ejs");

//Schema setup for storage of roots in database
var rootBankSchema = new mongoose.Schema({
    searchWord: String,
    rootWord: String
});
//model for DB object
var rootBank = mongoose.model("root_bank", rootBankSchema);




//attempted array to store search root woord queries
var root_bank = [
    
    {searchWord: "وبالوالدين",
    rootWord: "ولد"}
    ];



// GET method that loads our homepage
app.get("/", function(req, res){
    res.render("SP");
});

// POST method that can be edited/applied to application when needed. Not 100% functional yet.
app.post("/", function(req,res){
    var word = req.body.wd;
    var root = req.body.rtWd;
    var newRoot = {searchWord: word, rootWord: root};
    root_bank.push(newRoot);
});


//developer tool/notification that our server connected without failure when debugging.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("!!!!!SERVER ON!!!!!")
});