import React from 'react'
import NavbarEtud from './NavbarEtud'
import Footer from "../components/Footer"
import Progress from './Progress'
import Form from './Form'
import "../styles/StyleForm.css"
function Bord2() {
  return (
    <div className='bord'>
    <NavbarEtud/>
    <Progress/>
    <Form/>
    <Footer/>
    </div>
  )
}
export default Bord2