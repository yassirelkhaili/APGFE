import React,{useState} from "react";
import { Link as Href} from "react-router-dom";
import { Link } from "react-scroll";
import "../styles/StyleHome.css";
import logo from "../images/AGPFELogo.png"
function Navbar() {
    const [click,setClick]=useState(false)
    const closeMenu=()=>setClick(false)
  return (
    <div className="header">
      <div className="container">
                <a href="#" className="logo"> 
                <img src={logo} style={{height: "120px", width:"100%"}}/>
                </a>
                <nav>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.17em" height="1em" className="svg-nav"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 28 24">
                        <path fill="currentColor"
                            d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z" />
                    </svg>
                    <ul>
                        <li><Link to="/" spy={true} smooth={true}
                        offset={-100} duration={500} onClick={closeMenu}>Home</Link></li>
                        <li><Link to="services" spy={true} smooth={true}
                        offset={-100} duration={500} onClick={closeMenu}>Services</Link></li>
                        <li><Link to="about" spy={true} smooth={true}
                        offset={-100} duration={500} onClick={closeMenu}>À Propos</Link></li>
                        <li><Link to="contact" spy={true} smooth={true}
                        offset={-100} duration={500} onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </nav>
                <div className="authent">
                    <div className="signup">
                        <Href to="/auth" className="signupButton">Access</Href>
                    </div>
                </div>
            </div>
    </div>
      
  );
}

export default Navbar;
