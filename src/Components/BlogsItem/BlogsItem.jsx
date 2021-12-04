import React from "react";
import { Link } from "react-router-dom";
import "./BlogsItem.scss";

function Post(props) {
  return (
    <Link to={`blog/${props.id}`}>
      <div className="blogsItem">
        <img className="blogsItem-img" src={props.image} alt="" />
        <div className="blogsItem-title">{props.title} </div>
      </div>
    </Link>
  );
}

export default Post;
