const express = require('express')
const app = express()

app.get('/students',(req,res)=>{
    res.json([{id:1,name:"John"}])
})

app.listen(3001,()=>{
    console.log("Student service running on 3001")
})