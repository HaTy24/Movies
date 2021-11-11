import React from "react";
import "./Post.css";

function Post(props) {
  return (
    <div className="post">
      <img className="post-img" src={props.image} alt="" />
      <div className="post-title">{props.title} </div>
    </div>
  );
}

export default Post;
