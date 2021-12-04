import React, { useState, useEffect } from "react";
import BlogsItem from "../../Components/BlogsItem/BlogsItem";
import "./ListBlogs.scss";

function ListBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((blogs) => setBlogs(blogs));
  }, []);
  return (
    <div className="listBlogs">
      <div className="listBlogs-items">
        {blogs.map((blog) => {
          return (
            <BlogsItem
              key={blog.id}
              id={blog.id}
              image={blog.img}
              title={blog.title}
              des={blog.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListBlogs;
