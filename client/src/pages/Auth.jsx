import React from "react";
import { Link } from "react-router-dom";
import '../styles/Auth.css'
import * as Components from '../JS/mainAuthen.js';
function Auth() {
    const [signIn, toggle] = React.useState(true);
     return(
      <div className="Auth">
         <div class="overlayblk"></div>
        <h2> Bienvenue Dans AGPFE App Web </h2>
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Créer Compte</Components.Title>
                     <Components.Input type='text' placeholder='Identifiant' required/>
                     <Components.Input type='text' placeholder='Nom' required/>
                     <Components.Input type='email' placeholder='Email' required/>
                     <Components.Input type='password' placeholder='Mot de Pass' required/>
                     <Components.Button>S'inscrire</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>
             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Se Connecter</Components.Title>
                      <Components.Input type='email' placeholder='Email' required />
                      <Components.Input type='password' placeholder='Mot de Pass' required/>
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button>Se Connecter</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         
         </div>
     )
}
export default Auth;