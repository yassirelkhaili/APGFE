import React from 'react'
import NavbarEtud from './NavbarEtud'
import Footer from '../components/Footer'
function Profile() {
  return (
    <div>
        <NavbarEtud/>
    <div class="infostudent">
        <div class="container">
            <div class="container-infos">
                <h1> Etudiant Information</h1>
                <form id="student-infos">
                    <div class="form-item">
                        <label for="name">Nom :</label>
                        <placeholder class="nom_info"></placeholder>
                    </div>
                    <div class="form-item">
                        <label for="student-id">Prénom :</label>
                        <placeholder class="prenom_info"></placeholder>
                    </div>
                    <div class="form-item">
                        <label for="department">E-Mail : </label>
                        <placeholder class="email_info"></placeholder>
                    </div>
                    <div class="form-item">
                        <label for="department">Binôme : </label>
                        <placeholder class="nom_info"></placeholder>
                    </div>
                    <div class="form-item">
                        <label for="department">Nom L'Encadrant : </label>
                        <placeholder class="nom_info"></placeholder>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Profile
