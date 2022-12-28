const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;


const apiData = require("./data.json");

app.get("/",(req,res)=>{
    res.send("hello i'm live");
})

app.get("/service",(req,res)=>{
    resp.send(apiData);
})

app.listen(port,()=>{
    console.log("hi i m live again");
})