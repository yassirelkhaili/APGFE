import React, { Component } from'react';
import {Link} from 'react-router-dom';
import * as Components from '../js/mainAuthen.js';
import '../styles/Auth.css'
const ForgotPasswordPage = ()=>{

  return (
    <section className="Forget ">
      <div className="overlayblk"></div>
      <h2 style={{color:'white'}}>Mot de pass oublier</h2>
      <div>
        <Components.Container>
          <form className='form'>
            <h5 style={{marginLeft:'0px'}}>
          Adresse Email:
        </h5>
           <Components.Input type='email' placeholder='Saisir votre email' name="email"  required/>
            <Components.Button>
             <Link to="/Reset"> Send Reset Code</Link>
            </Components.Button>
          </form>
       </Components.Container>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
