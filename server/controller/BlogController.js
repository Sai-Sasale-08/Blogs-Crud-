const BlogModel = require("../model/BlogModel")


const createblogController=async (req,res)=>{

    const {title,author,content,published_date}=req.body
    try {
        await BlogModel.create({title,author,content,published_date,userId:req.user?._id})
        res.status(200).json({message:"Blog created"})
    } catch (error) {
        res.status(404).json({message:error})
    }
}

const deleteblogController = async (req, res) => {
    const { blogId } = req.params;
    if (!blogId) {
        return res.status(400).json({ message: "Blog ID is required" });
    }
    try {
        const blogdata = await BlogModel.findOne({ _id: blogId});
        if (!blogdata) {
            return res.status(404).json({ message: "blog not found" });
        }
        await BlogModel.findByIdAndDelete(blogId);
        res.status(200).json({ message: "blog deleted successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });  
    }
};

const updateblog=async(req,res)=>{
    const { blogId } = req.params;
    
    if (!blogId) {
        return res.status(400).json({ message: "Blog ID is required" });
    }
    try {
        const blogdata = await BlogModel.findOne({ _id: blogId});
        if (!blogdata) {
            return res.status(404).json({ message: "Blog not found" });
        }
        await BlogModel.findByIdAndUpdate(blogId,{...req.body});
        res.status(200).json({ message: "Blog updated successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });  
    }
}

const getallblog=async(req,res)=>{
   
    try {
        const blogdata=await BlogModel.find()
        if(!blogdata || blogdata.length==0){
            return res.status(400).json({ message: "Blog Not Found" });
        }
        res.status(200).json({message:"Blog Fetched Successfully",blogdata});
    } catch (error) {
        return res.status(400).json({ message: error.message }); 
    }
}

const singleBlog=async(req,res)=>{
    const { blogId } = req.params;
    
    if (!blogId) {
        return res.status(400).json({ message: "Blog ID is required" });
    }
    try {
        const blogdata = await BlogModel.find({ _id: blogId});
        if (!blogdata) {
            return res.status(404).json({ message: "Blog not found" });
        }
        
        res.status(200).json({ message: "Blog",blogdata });
    } catch (error) {
        return res.status(400).json({ message: error.message });  
    }
}






module.exports={createblogController,deleteblogController,updateblog,getallblog,singleBlog}