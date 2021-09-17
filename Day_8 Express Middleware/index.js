const express = require("express");
const app = express();

const checkAdmin = (req, res, next) => {
  if (req.query.admin == "true") {
    next();
  } else {
    res.status(400).send("must be admin");
  }
};

const sendData = (req, res) => {
  res.json(req.query);
  console.log("is admin");
};

app.use(checkAdmin);
app.get("/user", sendData);


app.use(express.json({ extended: true })); 

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body); 
});

app.listen(5000 , ()=>{
    console.log("Server is Running at http://localhost:5000");
});
