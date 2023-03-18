import React from "react";
import '../styles/Auth.css'
import { useNavigate } from "react-router-dom";
import * as Components from '../js/mainAuthen.js';
import {useState, useEffect} from "react";
import axios from "axios"; 
import Spinner from "react-bootstrap/Spinner"
function Auth() {
    const [signIn, toggle] = useState(true)
    const [signupData, setsignupData] = useState([])
    const [loginData, setloginData] = useState([])
    const [loading, setloading] = useState(false)
    const [signupResponse, setsignupResponse] = useState(null)
    const [loginResponse, setloginResponse] = useState(null)
    const navigate = useNavigate()
    const api_signup = "http://localhost/backend/controllers/Signup.php"; 
    const api_login = "http://localhost/backend/controllers/Login.php";
    const handleSubmitSignup = async(e) => {
        e.preventDefault()
        try {
            setloading(true)
            const response = await axios.post(api_signup, JSON.stringify(signupData))
            setsignupResponse(response.data)
            setloading(false)
        } catch (err) {
            throw new Error(err)
        }
    }
    const handleSubmitLogin = async(e) => {
        e.preventDefault()
        try {
            setloading(true)
            const response = await axios.post(api_login, JSON.stringify(loginData))
            setloginResponse(response.data)
            setsignupResponse("auth_failure")
            setloading(false)
        } catch (err) {
            throw new Error(err)
        }
    }
    const handleChangeSignup = (e) => {
        const {name,value} = e.target; 
        setsignupData(prev=>({...prev, [name] : value}))
    } 
    const handleChangeLogin = (e) => {
        const {name,value} = e.target; 
        setloginData(prev=>({...prev, [name] : value}))
    }
    useEffect(() => {
        signupResponse === "auth_success" ? toggle(true) : null
    }, [signupResponse])
    useEffect(() => {
        localStorage.setItem("auth", JSON.stringify(loginResponse))
        loginResponse === "login_success" && navigate("/admin")
    }, [loginResponse])
     return(
      <div className="Auth">
         <div className="overlayblk"></div>
        <h2>Bienvenue dans L'application AGPFE</h2>
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form onSubmit={handleSubmitSignup}>
                     <Components.Title>Créer un Compte</Components.Title>
                     <Components.Input type='text' placeholder='Identifiant' name="identifiant" onChange={handleChangeSignup} required/>
                     <Components.Input pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" type='email' placeholder='Email' name="email" onChange={handleChangeSignup} required/>
                     <Components.Input pattern="(?=.*[0-9])(?=.*[?!@#$%^&*])(?=.*[A-Z]).{8,64}" type='password' placeholder='Mot de Passe' name="password" onChange={handleChangeSignup} required onInvalid={e => {
                        e.target.setCustomValidity("Le Mot de Passe doit Comporter entre 8 et 64 Caractères et Contenir au moins une Lettre Majuscule, un Chiffre et l'un des Symboles suivants: (?!@#$%^&*)")
                     }} onInput={e=>e.target.setCustomValidity("")}/>
                     <Components.alert version="red">{(() => {switch(signupResponse){case "auth_failure": return "Vérifier votre Identifiant";case "duplicate_email": return "Ce Couriel existe déja";case "user_exists":return"Cette Utilisateur éxiste déja"}})()}</Components.alert>
                     {loading ? <Spinner animation="border" variant="danger"></Spinner> : <Components.Button>S'inscrire</Components.Button>} 
                 </Components.Form>
             </Components.SignUpContainer>
             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form onSubmit={handleSubmitLogin}>
                      <Components.Title>Connexion</Components.Title>
                      <Components.Input type='email' placeholder='Email' name="email" onChange={handleChangeLogin} required/>
                      <Components.Input type='password' placeholder='Mot de Pass' name="password" onChange={handleChangeLogin} required/>
                      {signupResponse === "auth_success" ? <Components.alert version="green">Entrez votre Email et Mot de Passe pour vous Connecter</Components.alert> : null}
                      {loginResponse === "login_failure" ? <Components.alert version="red">Email or Password Incorrect</Components.alert> : null}
                      <Components.Anchor href='#'>Mot de Passe Oublié?</Components.Anchor>
                      {loading ? <Spinner animation="border" variant="danger"></Spinner> : <Components.Button>Se Connecter</Components.Button>}
                  </Components.Form>
             </Components.SignInContainer>
             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>
                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Content de te Revoir!</Components.Title>
                     <Components.Paragraph>
                     Pour Rester en Contact avec Nous, Veuillez vous Connecter avec vos Informations Personnelles
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>Se Connecter</Components.GhostButton>
                     </Components.LeftOverlayPanel>
                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Salut!</Components.Title>
                       <Components.Paragraph>
                       Entrez vos Données Personnelles et Commencez votre Parcours avec Notre Application de Gestion de Projects de Fin D'étude
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                           S'inscrire
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
                 </Components.Overlay>
             </Components.OverlayContainer>
         </Components.Container>
         </div>
     )
}
export default Auth;