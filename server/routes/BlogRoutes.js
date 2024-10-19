const express = require("express")
const { getallblog, deleteblogController, updateblog, createblogController, singleBlog } = require("../controller/BlogController")
const BlogRouter=express.Router()


BlogRouter.post("/createblogs",createblogController)
BlogRouter.get("/allblogs",getallblog)
BlogRouter.delete("/delete/:blogId",deleteblogController)
BlogRouter.patch("/update/:blogId",updateblog)
BlogRouter.get("/information/:blogId",singleBlog)



module.exports=BlogRouter