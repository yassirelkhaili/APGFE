import React,{useRef} from 'react'
import "../styles/Attestation.css"
import logo from "../images/AGPFELogo.png"
import {useReactToPrint} from 'react-to-print';
import NavbarEtud from './NavbarEtud';
import {BsFillPrinterFill} from 'react-icons/bs';
import Footer from '../components/Footer';
function Attestation() {
    const componentRef=useRef();
    const handlePrint=useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:'emp-data',
        onAfterPrint:()=>('Print success')
    })
  return (
    <div className='attestaion'>
    <NavbarEtud/>
    <div class="encad">
        <div class="container">
            <div class="plceHolcontainer">
                <form action="#" method="get">
                    <div class="datpsgcon">
                        <label>Imprimer Votre attestation: </label>
                        <button style={{fontSize:'20px'}} onClick={handlePrint}><BsFillPrinterFill/></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div ref={componentRef} style={{whith:'100%',height:window.innerHeight}}>
    <table class="cert">
        <tr class="tr_logo">
            <td align="center" class="crt_logo">
                <img src={logo} alt="logo"/>
            </td>
        </tr>
        <tr>
            <td align="center">
                <h1 class="crt_title">Certificat D'Achèvement</h1>
                    <h2>Ce Certificat Est Présenté À : </h2>
                    <h1 class="colorName crt_user"><placeholder class="nom_student">Zakaria</placeholder></h1>
                    <h3 class="projectNom">Pour sa réalisation de projet : <placeholder class="nom_project"></placeholder></h3>
                    <h3 class="encadr_name">Projet encadré par : <placeholder class="encadrant_name"></placeholder></h3>
                    <h3>Décerné le : <placeholder class="date_certificate">19 Mars 2023</placeholder></h3>
            </td>
        </tr>
        <tfoot class="tfoot_jury">
                <tr class="row_jury one">
                    <td class="juryteam">
                        Jury
                    </td>
                    <td class="juryteam">
                        Remarque
                    </td>
                    <td class="juryteam">
                        Note
                    </td>
                </tr>
                <div class="ligne"></div>
                <tr class="row_jury two">
                    <td class="jury_content-one">
                        <placeholder class="dotimoji">⚫ : </placeholder><placeholder class="jr_one">...</placeholder><br/>
                        <placeholder class="dotimoji">⚫ : </placeholder><placeholder class="jr_two">...</placeholder><br/>
                        <placeholder class="dotimoji">⚫ : </placeholder><placeholder class="jr_three">...</placeholder><br/>
                        <placeholder class="dotimoji">⚫ : </placeholder><placeholder class="jr_four">...</placeholder>
                    </td>
                    <td class="jury_content-two">
                        <placeholder class="jury_remarque"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusantium praesentium eveniet laborum ipsa dolorum nihil, inventore magni assumenda earum modi maiores neque numquam cum qui doloremque temporibus? Cum, sapiente! </placeholder>
                    </td>
                    <td class="jury_content-three">
                        <placeholder class="jury_note">18</placeholder>/20
                    </td>
                </tr>
        </tfoot>
    </table>
    </div>
    <Footer/>
    </div>
  )
}

export default Attestation
