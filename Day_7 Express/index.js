const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.status(200).send("Hello");
});



app.get("/user/:userid/student/:studentid", (req, res) => {
    console.log(req.query);
  res.send(req.params); // http://localhost:5000/user/6/student/1
});

app.listen(5000 , ()=>{
    console.log("Server is Running at http://localhost:5000")
});
