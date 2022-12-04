const mongoose = require("mongoose");

const noteSchema  = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
    },
    description:{
        type:String,
        trim:true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
},{timestamps:true});

module.exports = mongoose.model('Note',noteSchema);