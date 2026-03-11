const express = require("express");

const app = express();

const colleges = require("./colleges.json");

app.get("/colleges",(req,res)=>{
    res.json(colleges);
});

app.listen(3003,()=>{
    console.log("College Service running on port 3003");
});