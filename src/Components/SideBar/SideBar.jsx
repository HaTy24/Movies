import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-about">
        <h2 className="sidebar-title">ABOUT Me</h2>
        <img
          className="about-img"
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1372&q=80"
          alt=""
        />
        <h3 className="about-name">Billion</h3>
      </div>
      <div className="sidebar-hobby">
        <h2 className="sidebar-title">My HOBBY</h2>
        <ul className="hobby-items">
          <li>Soccer</li>
          <li>Play Game</li>
          <li>Music</li>
          <li>Code</li>
          <li>Travel</li>
          <li>Movie</li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
