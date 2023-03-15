import React from "react";
import "../styles/StyleHome.css";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer">
            <p className="footer-parag">
                <placeholder data-i18n="footer">Tous Droits Réservés</placeholder> &copy;
                <a href="#" className="footer-link">Med school</a>
                <span className="this-year">{year}</span>
            </p>
        </div>
  );
}

export default Footer;
