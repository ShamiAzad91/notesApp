require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

//My Routes
const userRoutes = require("./routes/user");
const noteRoutes = require("./routes/note");


//DB connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true
}).then(()=>{
    console.log('DB CONNECTED')
}).catch((err)=>{
    console.log(err)
})

//middleware
app.use(express.json());

//my routes
app.use("/api",userRoutes);
app.use("/api",noteRoutes);


//port
const port = 8000;
//listening port;
app.listen(port,()=>{
    console.log(`Server is up and running at ${port}`);
})