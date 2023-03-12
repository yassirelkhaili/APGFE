import React from "react";
import "../styles/Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       <BsFacebook/>
       <BsLinkedin/>
       <FaTwitterSquare/>
       <BsInstagram/>
      </div>
      <p> &copy; 2023 admin@gmail.com</p>
    </div>
  );
}

export default Footer;
