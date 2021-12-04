import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "../../Sass/_variable.scss";
import "./Header.scss";

function Header({ login }) {
  const [scroll, setScroll] = useState("transparent");

  const location = useLocation();
  const path = location.pathname.split("/")[1];

  useEffect(() => {
    const items = document.querySelectorAll(".header-item");
    const check = path.toUpperCase();
    const checks = (path + "s").toUpperCase();
    items.forEach((item) => {
      item.addEventListener("click", () => {
        window.scroll(0, 0);
      });
      item.innerText === check || item.innerText === checks
        ? (item.style.color = "red")
        : (item.style.color = "#fff");
    });
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY <= 0 ? "transparent" : "#06121e");
    });
  });

  const handleToggle = () => {
    document.querySelector(".header-items").classList.toggle("toggle");
  };

  const handleLogin = () => {
    login(1);
  };

  return (
    <>
      <header className="header" style={{ backgroundColor: scroll }}>
        <div className="header-logo" onClick={() => window.scroll(0, 0)}>
          <i className="fas fa-blog"></i>
        </div>
        <ul className="header-items">
          <Link to="/blogs">
            <li className="header-item">Blogs</li>
          </Link>
          <Link to="/movies?page=1">
            <li className="header-item">Movies</li>
          </Link>
          <Link to="/tvseris">
            <li className="header-item">TVSeris</li>
          </Link>
          <Link to="/write">
            <li className="header-item">Write</li>
          </Link>
        </ul>
        <div className="header-contact">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fas fa-phone-square-alt"></i>
          <button className="header-button" onClick={() => handleLogin()}>
            Log in
          </button>
        </div>
        <i onClick={handleToggle} className="fas fa-bars"></i>
      </header>
    </>
  );
}

export default Header;
