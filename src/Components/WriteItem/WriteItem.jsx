import React, { useState } from "react";
import Axios from "axios";
import "./WriteItem.scss";

function WriteItem() {
  const [value, setValue] = useState({
    title: "",
    img: "",
    description: "",
    author: "",
  });
  const [count, setCount] = useState();

  const handleChange = (e) => {
    let newValue = { ...value };
    newValue[e.target.id] = e.target.value;
    setValue(newValue);
  };

  const handleChangDes = (e) => {
    let newValue = { ...value };
    const file = e.target.value + 1;
    newValue.description = e.target.value;
    setCount(file.match(/(\w+)/g).length);
    setValue(newValue);
  };
  const handlePost = () => {
    count <= 200 ||
    value.title === "" ||
    value.img === "" ||
    value.description === "" ||
    value.author === ""
      ? alert("Bài Blogs quá ngắn !!!")
      : Axios.post("http://localhost:3000/blogs", {
          title: value.title,
          img: value.img,
          description: value.description,
          author: value.author,
        }).then(alert("success!!!"));
  };
  return (
    <div className="Write">
      <form>
        <label htmlFor="title">Title</label>
        <input
          placeholder="Title"
          className="Write-title"
          type="text"
          onChange={(e) => handleChange(e)}
          id="title"
        ></input>
        <label>Image</label>
        <input
          placeholder="Link hình ảnh"
          className="Write-img"
          type="text"
          id="img"
          onChange={(e) => handleChange(e)}
        ></input>
        <label htmlFor="description">Description</label>
        <textarea
          placeholder="Description"
          onChange={(e) => handleChangDes(e)}
          id="description"
        ></textarea>
        <label htmlFor="author">Author</label>
        <input
          placeholder="Author"
          className="Write-author"
          type="text"
          onChange={(e) => handleChange(e)}
          id="author"
        ></input>
      </form>
      <button className="Write-button" onClick={() => handlePost()}>
        Post
      </button>
    </div>
  );
}

export default WriteItem;
