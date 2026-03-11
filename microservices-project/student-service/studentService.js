const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const students = require("./students.json");

app.get("/students",(req,res)=>{
    res.json(students);
});

app.get("/students/:id",(req,res)=>{
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if(!student){
        return res.json({message:"Student not found"});
    }

    res.json(student);
});

app.listen(3001,()=>{
    console.log("Student Service running on port 3001");
});