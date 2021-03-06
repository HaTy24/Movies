import React, { useState, useEffect } from "react";
import BlogsItem from "../../Components/BlogsItem/BlogsItem";
import { RestUrl } from "../../Config/Config";
import "./ListBlogs.scss";

function ListBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(RestUrl + "blogs")
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
