const express=require("express")

const connection =require("./Config/db")
const DataRouter =require("./Routes/DataRoute");

const app= express()
app.use(express.json()) 
require('dotenv').config()



app.use("/notes",DataRouter)
app.listen(process.env.PORT,async()=>{
    try{
await connection;
console.log("connected to DB ")
    }
    catch(err){
        console.log("failed to connect db");
        console.log(err)

    }
    console.log(`server runing at ${process.env.PORT}`)
})