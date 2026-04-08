const express = require('express')

const app = express()

app.use(express.json())

// import routes
const studentsRoutes = require('./routes/studentRoutes')
const courseRoutes = require('./routes/courseRoutes')

// routes
app.use('/api',studentsRoutes)
app.use('/api',courseRoutes)

// colleges route
app.get('/api/colleges',(req,res)=>{
    res.json([
        {id:1,name:"ATME"},
        {id:2,name:"MIT"},
        {id:3,name:"NIE"}
    ])
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})