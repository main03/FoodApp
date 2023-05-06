const express = require("express");
const mongooose = require("mongoose");
const cors = require("cors");
mongooose.connect(
  "mongodb://localhost:27017/FoodApp" 
);
const books=require("./Routes/Book")
const app = express();
app.use(cors());
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use((req,res,next)=>
{
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
next();

});


const port=5000;
app.use("/uploads", express.static("uploads"));
app.use('/food', books)


console.log("Mongo DB Cloud Atlas Connected Successfullyy.....");
app.listen(5000 || port , () => console.log("Server running at PORT :"+ port));