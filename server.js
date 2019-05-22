const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const json = require('./routes/api/json')
const user =  require('./routes/api/users')
const auth = require('./routes/api/auth')
const app = express()

//BodyParser Middleware
app.use(bodyParser.json())

//DB config
const db = require('./config/keys').mongoURI

//use routes
app.use('/api/json',json)
app.use('/api/user',user)
app.use('/api/auth',auth)
//connect to mongo
mongoose
    .connect(db)
    .then(()=>console.log("MongoDB Connected..."))
    .catch(err=>console.log(err))

const port = process.env.PORT || 8000

app.listen(port,()=>console.log(`Server started on Port ${port}`))