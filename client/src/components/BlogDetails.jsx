import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {

  //   const [data,setdata]=useState([])
  //   const {blogId}=useParams()
     

  //   useEffect(()=>{
  //       axios.get(`http://localhost:8080/blog/information/${blogId}`)
  //       .then((res)=>{
  //         setdata(res.data.blogdata)

  //       })
  //       .catch((err)=>{console.log(err)})
  //   },[])
  return (
    <div style={{textAlign:"center"}}>
      <h1>Details </h1>
      {/* <h1>{data.title}</h1> */}
      
    </div>
   )
}

export default BlogDetails
