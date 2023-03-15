import React from "react";
import "../styles/StyleHome.css";
import Navbar from "../components/Navbar";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Design from "./Design";
import About from "./About";
import Services from "./Services";
function Home() {
  return (
    <>
    <Navbar/>
    <div className="homepage">
            <div className="overlay"></div>
            <div className="text">
                <div className="content">
                    <h2>Hello World! <br/>
                        We Are Kaspers, We Make ART
                    </h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Rem aliquid incidunt architecto, laudantium eligendi inventore totam
                        voluptatibus quibusdam natus exercitationem aspernatur dignissimos blanditiis,
                        ipsum nostrum et voluptate rerum nisi nam?
                    </p>
                </div>
            </div>
        </div>
        <Services/>
        <Design/>
        <About/>
        <Contact/>
        <Footer/>
        </>
  );
}

export default Home;
