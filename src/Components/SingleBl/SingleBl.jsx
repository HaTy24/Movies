import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./SingleBl.scss";

function SingleBlog() {
  const [result, setResult] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  useEffect(() => {
    fetch(`http://localhost:3000/blogs/${path}`)
      .then((response) => response.json())
      .then((data) => setResult(data));
  }, [path]);
  return (
    <div className="SingleBlog">
      <h1 className="SingleBlog-title">{result.title}</h1>
      <div className="SingleBlog-text">
        <img src={result.img} alt="" />
        <span className="SingleBlog-description">{result.description}</span>
      </div>
      <span className="SingleBlog-author">Tác giả: {result.author}</span>
    </div>
  );
}

export default SingleBlog;
