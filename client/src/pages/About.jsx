import React from 'react'
import "../styles/StyleHome.css";
import AboutImage from "../images/undraw_content_team.svg"
function About() {
  return (
    <div class="about">
            <div class="container">
                <div class="main-heading">
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, Provident consectetur adipis Provident.</p>
                </div>
                <img src={AboutImage} alt="team"/>
            </div>
        </div>
  )
}

export default About
