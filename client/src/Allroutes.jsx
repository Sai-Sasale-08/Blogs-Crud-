import React from 'react'
import { Route, Routes } from "react-router-dom";
import BlogList from './components/BlogList';
import UpdateBlog from './components/BlogForm';
import CreateBlogs from './components/BlogCreate';
import BlogDetails from './components/BlogDetails';
import Homepage from './components/Homepage';
const Allroutes = () => {
  return (
    <div>
      <Routes>

      <Route path="/" element={<Homepage />}></Route>

        <Route path="/getblog" element={<BlogList />}></Route>
        
        <Route path="/update/:blogId" element={<UpdateBlog />}></Route>

        <Route path="/createblogs" element={<CreateBlogs />}></Route>

        <Route path="/information/:blogId" element={<BlogDetails />}></Route>

       
      </Routes>
    </div>
  )
}

export default Allroutes
