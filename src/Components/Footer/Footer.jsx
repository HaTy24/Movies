import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-title">
          <i className="fab fa-angellist"></i>
          <div>
            <h2>Become a frankfurt</h2>
            <p>sign up for email</p>
          </div>
        </div>
        <form>
          <input className="footer-input" type="email" />
          <input className="footer-button" type="submit" />
        </form>
      </div>
      <div className="footer-bottom">
        <div className="footer-item">
          <i className="fab fa-affiliatetheme"></i>
          <h2>Readit Blog</h2>
          <ul>
            <li>59h Nguyen Kiem, P.3, Q.Go Vap, TP.HCM</li>
            <li>0948123445</li>
            <li>hathienty2000@gmail.com</li>
            <li>Contact website administrator</li>
          </ul>
        </div>
        <div className="footer-item">
          <h2>Readit Blog</h2>
          <ul>
            <li>59h Nguyen Kiem, P.3, Q.Go Vap, TP.HCM</li>
            <li>0948123445</li>
            <li>hathienty2000@gmail.com</li>
            <li>Contact website administrator</li>
          </ul>
        </div>
        <div className="footer-item">
          <h2>Readit Blog</h2>
          <ul>
            <li>59h Nguyen Kiem, P.3, Q.Go Vap, TP.HCM</li>
            <li>0948123445</li>
            <li>hathienty2000@gmail.com</li>
            <li>Contact website administrator</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
