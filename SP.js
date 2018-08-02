var express = require("express");
var app = express();
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/root_bank", { useNewUrlParser: true });
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//Schema setup
var rootBankSchema = new mongoose.Schema({
    searchWord: String,
    rootWord: String
});

var rootBank = mongoose.model("root_bank", rootBankSchema);





var root_bank = [
    
    {searchWord: "وبالوالدين",
    rootWord: "ولد"}
    ];




app.get("/", function(req, res){
    res.render("SP");
});
app.post("/", function(req,res){
    var word = req.body.wd;
    var root = req.body.rtWd;
    var newRoot = {searchWord: word, rootWord: root};
    root_bank.push(newRoot);
    
  rootBank.find({}, function(err, rootbank){
      if(err){
          console.log(err);
      }else{
          res.render("SP", {root_bank:rootbank});
      }
  });
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("!!!!!SERVER ON!!!!!")
});