const express=require('express');
const mongoose = require("mongoose");

const users=require('./routes/api/users')
const posts=require('./routes/api/posts')
const profile=require('./routes/api/profile')

const app=express();

//DB Config
const db=require('./config/keys').mongouri;
//Connects to mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch(() => {
    console.log("error");
  });

//route use
app.use('/api/users',users)
app.use('/api/profile',profile)
app.use('/api/posts',posts)



const port=process.env.PORT || 5000
app.get('/',(req,res)=>{
    res.send("Hi siva")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})