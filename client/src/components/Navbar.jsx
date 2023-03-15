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
                <img src={logo}/>
                </a>
                <nav>
                    <ul>
                        <li><Link to="/" spy={true} smooth={true}
                        offset={-100} duration={500} onClick={closeMenu}>Home</Link></li>
                        <li><Link to="services" spy={true} smooth={true}
                        offset={-100} duration={500} onClick={closeMenu}>Services</Link></li>
                        <li><Link to="about" spy={true} smooth={true}
                        offset={-100} duration={500} onClick={closeMenu}>About</Link></li>
                        <li><Link to="contact" spy={true} smooth={true}
                        offset={-100} duration={500} onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </nav>
                <div className="authent">
                    <div className="signup">
                        <Href to="/auth" className="signupButton">S'inscrire</Href>
                    </div>
                    <div className="signin">
                        <a href="#" className="signinButton">Login</a>
                    </div>
                </div>
            </div>
    </div>
      
  );
}

export default Navbar;
