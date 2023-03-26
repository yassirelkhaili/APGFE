import React from 'react'
import NavbarEtud from './NavbarEtud'
import Infos from './Infos'
import Projects from './Projects'
import Footer from "../components/Footer"
import Progress from './Progress'
function Bord() {
  return (
    <div className='bord'>
      <NavbarEtud/>
      <Infos/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default Bord
