const { response } = require("express");
var express = require("express");
var app = express();


app.get("/", function(req,res){
    res.sendFile(__dirname+"/html_index.html");
});

app.get("/json_output", function(req,res){
   var str={
       fist_name:"Pranav",
       last_name:"Bhangale"
   };
   console.log(str);
   res.send(JSON.stringify(str));
});

// app.get("/req_data", function(req,res){
//     var str={
//         fist_name:req.query["txtname"],
//         last_name:req.query["txtnumber"]
//     };

app.get("/req_data", function(req,res){
    var str={
        fist_name:req.query.txtname,
        last_name:req.query.txtnumber
    };
    console.log(str);
    res.send(JSON.stringify(str));
 });
 


var server = app.listen(8080, function(){
    console.log("Server is Running at http://localhost:8080");
});