import React from "react";
import '../styles/Logo.css';
import logo from '../assets/logo.jpg'
import { Link } from "react-router-dom";
const Logo=()=> {
    return(
        <div className="Reasons" id="reasons">
           <div className="left-r">
            <img src={logo} alt="" />
           </div>
           <div className="right-r">
                <div><span className="stroke-text">Notre </span>
                <span>  Espaces</span></div>
                <div>
                    <Link to='/auth' ><button className="delete">Admin</button></Link><br/>
                    <Link to='/auth' ><button className="delete">Enseignant</button></Link><br/>
                    <Link to='/auth' ><button className="delete">Etudiant</button></Link><br/>
                </div>
           </div>
        </div>
    )
}
export default Logo