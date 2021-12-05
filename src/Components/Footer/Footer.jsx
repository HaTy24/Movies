import React from "react";
import "./Footer.scss";

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
        </form>
      </div>
      <div className="footer-bottom">
        <div className="footer-item">
          <h2>Readit Blog</h2>
          <div>
            <span>59h Nguyen Kiem, P.3, Q.Go Vap, TP.HCM</span>
            <span>0948123445</span>
            <span>hathienty2000@gmail.com</span>
            <span>Contact website administrator</span>
          </div>
        </div>
        <div className="footer-item">
          <h2>Cinema</h2>
          <div>
            <span>59h Nguyen Kiem, P.3, Q.Go Vap, TP.HCM</span>
            <span>0948123445</span>
            <span>hathienty2000@gmail.com</span>
            <span>Contact website administrator</span>
          </div>
        </div>
        <div className="footer-item">
          <h2>Netflix</h2>
          <div>
            <span>59h Nguyen Kiem, P.3, Q.Go Vap, TP.HCM</span>
            <span>0948123445</span>
            <span>hathienty2000@gmail.com</span>
            <span>Contact website administrator</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
