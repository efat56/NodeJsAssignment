const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth.js")
const empRoute = require("./routes/employee.js");
const cookieParser = require("cookie-parser")

dotenv.config()
const app = express()
app.use(express.json());
app.use(cookieParser())

const connect = async ()=> {
    try {
        await mongoose.connect(process.env.mongo)
        console.log("mongodb connected")
    } catch(error){
        throw error
    }
}
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})


app.use("/api/auth", authRoute);
app.use("/api/emp",empRoute);


app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})
app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend")
})