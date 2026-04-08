const express = require("express");

const app = express();

const courses = require("./courses.json");

app.get("/courses",(req,res)=>{
    res.json(courses);
});

app.listen(3002,()=>{
    console.log("Course Service running on port 3002");
});