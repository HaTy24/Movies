import React, { useState, useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import Post from "../../Components/Post/Post";
import SideBar from "../../Components/SideBar/SideBar";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((blogs) => setBlogs(blogs));
  }, []);
  return (
    <div>
      <Banner
        image="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
        title="Readit Blogs"
      />
      <div className="homeScreen">
        <div className="items">
          {blogs.map((blog) => {
            return (
              <Post
                key={blog.id}
                image={blog.img}
                title={blog.title}
                des={blog.description}
              />
            );
          })}
        </div>
        <SideBar />
      </div>
    </div>
  );
}

export default Blog;
