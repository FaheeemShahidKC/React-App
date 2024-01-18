require("dotenv").config()
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("db...");
})

const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, "public")));

const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')

app.use('/',userRouter)
app.use('/admin',userRouter)

app.listen(8080,()=>{
    console.log("Server Running...");
})