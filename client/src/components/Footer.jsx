import React from "react";
import "../styles/StyleHome.css";
function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer">
            <p className="footer-parag">
                <a href="#" className="footer-link">AGPFE</a>
                <span className="this-year">{year}</span>
            </p>
        </div>
  );
}

export default Footer;
