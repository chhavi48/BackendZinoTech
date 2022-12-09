const mongoose=require("mongoose");
const DataSchema= new mongoose.Schema({
     group:String,
     house: String,
    userId:{type:String,required:true}
})
const DataModel= mongoose.model("notes",DataSchema)
module.exports=DataModel;