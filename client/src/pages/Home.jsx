import React from "react";
import "../styles/StyleHome.css";
import Navbar from "../components/Navbar";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Design from "./Design";
import About from "./About";
import Services from "./Services";
import GoToTop from "../components/GoToTop";
function Home() {
  return (
    <>
    <Navbar/>
    <div className="homepage">
            <div className="overlay"></div>
            <div className="text">
                <div className="content">
                <h2>Bienvenue à AGPFE,<br/>
                        Votre Meilleure application pour gérer votre PFE
                    </h2>
                    <p>que vous soyez étudiant, juré, encadrant vous avez peut-être eu 
                    beaucoup de mal à gérer la gestion de votre PFE;
                    Diminution des niveaux de performance
                    Manque de communication
                    Mauvais travail d'équipe
                    Gestion du temps
                    L'application AGPFE est faite pour vous.
                    </p>
                </div>
            </div>
        </div>
        <Services/>
        <Design/>
        <About/>
        <Contact/>
        <GoToTop/>
        <Footer/>
        </>
  );
}

export default Home;
