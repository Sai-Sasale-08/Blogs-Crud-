const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors")
const connection=require("./db")
const BlogRouter = require("./routes/BlogRoutes")
dotenv.config()
const app=express()


app.use(cors(
    {
        origin: ['http://localhost:3000','http://localhost:5173','http://localhost:5174'], // frontend origin
        credentials: true, // Allow credentials (cookies, authorization headers, etc.)
      }
))
app.use(express.json())
app.use("/blog",BlogRouter)


app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log(".....Connected To DB.....")
        console.log("server is running")
    } catch (error) {
        console.log(error)
    }
})


