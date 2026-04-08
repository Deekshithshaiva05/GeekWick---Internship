const express = require('express')
const app = express()

app.get('/colleges',(req,res)=>{
    res.json([{id:1,name:"ATME"}])
})

app.listen(3003,()=>{
    console.log("College service running on 3003")
})