const Note = require("../models/note");

exports.createNotes = async(req,res)=>{
    try{
        let note = new Note({
            title:req.body.title,
            description:req.body.description,
            userId:req.userId
        });

        let result = await note.save();
        if(!result)
        return res.status(400).json({error:"Unable to save the notes",status:"failed"})
        return res.status(200).json({notes:result,message:"successfully  save the notes",status:"success"})

    }catch(err){
        return res.status(500).json({err:err.message,message:"Something went wrong",status:"failed"})
    }
}

exports.getAllNotesById = async(req,res)=>{
    try{
        let notes = await Note.find({userId:req.userId});
        if(!notes)
        return res.status(400).json({error:"Unable to save the notes",status:"failed"})
        return res.status(200).json({notes:notes,message:"All notes is here",status:"success"})

    }catch(err){
        return res.status(500).json({err:err.message,message:"Something went wrong",status:"failed"})
    }
}

exports.updateNotes = async(req,res)=>{
   try{
    const id = req.params.id;
    const {title,description} = req.body;

    const newNote={
        title:title,
        description:description
    }

    let note =  await Note.findByIdAndUpdate(id,newNote,{new:true})
    if(!note)
    return res.status(400).json({error:"Unable to save the notes",status:"failed"});
    return res.status(200).json({notes:note,message:"successfully updated the notes",status:"success"})

   }catch(err){
    return res.status(500).json({err:err.message,message:"Something went wrong",status:"failed"})
   }
}

exports.deleteNotes= async(req,res)=>{
    try{
     let id = req.params.id;
    let result =  await Note.findByIdAndRemove(id);
    if(!result)
    return res.status(400).json({error:"Unable to delete the notes",status:"failed"});
    return res.status(202).json({message:"successfully deleted the notes",status:"success"})

    }catch(err){
    return res.status(500).json({err:err.message,message:"Something went wrong",status:"failed"})
    }
}

exports.getAllNotes = async(req,res)=>{
    try{
        let notes = await Note.find();
        if(!notes)
    return res.status(400).json({error:"Unable to get the notes",status:"failed"});
    return res.status(200).json({notes:notes,message:"get all user notes here",status:"success"})

    }catch(err){
    return res.status(500).json({err:err.message,message:"Something went wrong",status:"failed"})
    }
}