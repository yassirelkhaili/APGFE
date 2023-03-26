import React from 'react'
import "../styles/StyleEtudt.css"
import logo from "../images/AGPFELogo.png"
function NavbarEtud() {
  return (
    <div className='HEAD'>
    <div className="container">
            <a href="#" className="logo">
                <img src={logo} alt="Logo"/>
            </a>
            <nav>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.17em" height="1em" class="svg-nav"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 28 24">
                    <path fill="currentColor"
                        d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z" />
                </svg>
                <ul>
                    <li><a href="navbar" class="active">Tableau De Bord</a></li>
                    <li><a href="bord2" >Dépot</a></li>
                    <li><a href="attestation">Attestation</a></li>
                </ul>
            </nav>
            <div class="profile">
                <a href="profile" class="profilebtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm0-26h10v2H22zm0 5h10v2H22zm0 5h7v2h-7z" />
                    </svg>
                </a>
            </div>
            <div class="decnx">
                <div class="dcnxdiv">
                    <a href="#" class="signoutButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M6 2h9a2 2 0 0 1 2 2v2h-2V4H6v16h9v-2h2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                            <path fill="currentColor" d="M16.09 15.59L17.5 17l5-5l-5-5l-1.41 1.41L18.67 11H9v2h9.67z" />
                        </svg>
                    </a>
                </div>
            </div>
            </div>
            </div>
  )
}
export default NavbarEtud
