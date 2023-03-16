import React from 'react'
import "../styles/StyleHome.css";
import DesignImage from "../images/undraw_online_stats.svg"
function Design() {
  return (
    <div class="design">
            <div class="image">
                <img src={DesignImage} alt=""/>
            </div>
            <div class="text">
                <h2>AGPFE application vous permez de : </h2>
                <ul>
                <li>Économisez votre temps</li>
                    <li>Manage Votre PFE project facilement</li>
                    <li>Interface simple</li>
                    <li>Interaction entre les personnes</li>
                </ul>
            </div>
        </div>
  )
}

export default Design
