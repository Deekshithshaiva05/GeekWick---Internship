const express = require('express')
const app = express()

app.get('/courses',(req,res)=>{
    res.json([{id:1,name:"AI"}])
})

app.listen(3002,()=>{
    console.log("Course service running on 3002")
})