import React from 'react'
import "../styles/StyleHome.css";
import AboutImage from "../images/undraw_content_team.svg"
function About() {
  return (
    <div class="about">
            <div class="container">
            <div class="main-heading">
                    <h2>À propos</h2>
                    <div class="apropo">
                        <p>sur AGPFE, la solution ultime pour gérer votre PFE project. Notre
                        équipe d'experts a travaillé sans relâche pour créer une plateforme conviviale, Notre plateforme conviviale facilite la création, le suivi et la gestion de projets finaux pour les étudiants, tout en
                        offrant aux jurys et aux enseignants des outils efficaces pour évaluer et noter les projets.
                        <br/><br/>
                        Merci d'avoir choisi AGPFE. Nous avons hâte de vous aider à gérer facilement vos projets
                        finaux.
                        </p>
                        <div class="imgcontner">
                        <img src={AboutImage} alt="team"/>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default About
