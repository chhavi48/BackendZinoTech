const express=require("express")
const NotesModel=require( "../Model/DataModel")
const notesRouter=express.Router();
notesRouter.get("/",async(req,res)=>{
    const user=req.body
    try{
    var notes= await NotesModel.find({user})
    }catch(err){
        console.log(err)
    }
    res.send(notes)
})

notesRouter.post("/create",async(req,res)=>{
const {group,house,userId}=req.body;
const new_note =new NotesModel({
    group,
    house,
    userId
})
await new_note.save()
res.send({massage:"notes successfully create",new_note})
})

//putt
notesRouter.put("/edit/:id",async(req,res) => {
    let user=req.params.id;
    const editUser=new NotesModel(user)
    console.log(editUser,req.params.id)
    try {
        await NotesModel.updateOne({ _id: req.params.id }, editUser);
        res.status(201).json(editUser);
      } catch (err) {
        res.status(409).json(err.message);
      }
})

notesRouter.delete("/del/:id",async(req,res)=>{
    try {
        await NotesModel.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "userDeltedSuccesfully" });
      } catch (err) {
        res.status(409).json(err.message);
      }
})


////delete  
// notesRouter.delete("/:userId/delete/:notesId",async(req,res)=>{
//     const userId=req.params.userId;
//     const notesId=req.params.notesId;
//     const note= await NotesModel.findOne({_id:notesId})
//     if(note.userId!==userId)
//     {
//         return res.send("you are not authorized to do it")
//     } 
//     const new_note= await NotesModel.findByIdAndDelete(notesId)
//     return res.send("deleted")
// })

 module.exports=notesRouter;