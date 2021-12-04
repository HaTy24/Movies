import React from "react";
import Banner from "../../Components/Banner/Banner";
import SideBar from "../../Components/SideBar/SideBar";
import ListBlogs from "../../Components/ListBlogs/ListBlogs";
import "./Blog.scss";

function Blog() {
  return (
    <div>
      <Banner
        image="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
        title="Readit Blogs"
      />
      <div className="homeScreen">
        <SideBar />
        <ListBlogs />
      </div>
    </div>
  );
}

export default Blog;
