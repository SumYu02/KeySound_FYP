import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/Frontend_Assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Returns</li>
        <li>Terms & Conditions</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <FaInstagram />
        </div>
        <div className="footer-icons-container">
          <FaWhatsapp />
        </div>
        <div className="footer-icons-container">
          <CiFacebook />
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
