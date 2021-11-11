import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

// document.body.onload = function () {
//   window.location.href = "http://localhost:3000/";
// };

function Header() {
  const [scroll, setScroll] = useState("transparent");
  const [toggle, setToggle] = useState("transparent");
  useEffect(() => {
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        items.forEach((item) => {
          item.classList.remove("active");
        });
        e.target.classList.add("active");
      });
    });
  });
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY <= 0 ? "transparent" : "#4b636e");
    setToggle(window.scrollY <= 0 ? "transparent" : "#34515e");
  });

  const handleToggle = () => {
    document.querySelector(".header-items").classList.toggle("toggle");
  };

  return (
    <div>
      <header className="header" style={{ backgroundColor: scroll }}>
        <Link to="/blog">
          <div className="logo item" onClick={() => window.scroll(0, 0)}>
            <i className="fas fa-blog"></i>
          </div>
        </Link>
        <ul className="header-items" style={{ backgroundColor: toggle }}>
          <Link to="/blog">
            <li className="item active" onClick={() => window.scroll(0, 0)}>
              Blog
            </li>
          </Link>
          <Link to="/movies">
            <li className="item" onClick={() => window.scroll(0, 0)}>
              Movies
            </li>
          </Link>
          <Link to="/foods">
            <li className="item" onClick={() => window.scroll(0, 0)}>
              Foods
            </li>
          </Link>
          <Link to="/write">
            <li className="item" onClick={() => window.scroll(0, 0)}>
              Write
            </li>
          </Link>
        </ul>
        <div className="contact-logo">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fas fa-phone-square-alt"></i>
        </div>
        <i onClick={handleToggle} class="fas fa-bars"></i>
      </header>
    </div>
  );
}

export default Header;
