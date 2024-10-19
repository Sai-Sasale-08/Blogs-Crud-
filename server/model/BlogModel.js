const mongoose=require("mongoose")

const BlogSchema= new mongoose.Schema({
    title:String,
    author:String,
    content:String,
    published_date:Date
})

const BlogModel=mongoose.model("Blogs",BlogSchema)

module.exports=BlogModel