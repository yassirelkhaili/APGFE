import React, { Component } from'react';
import * as Components from '../js/mainAuthen.js';
import '../styles/Auth.css'

const ResetPasswordPage = ()=>{
  return (
    <section className=" Forget bg-ct-blue-600 min-h-screen grid place-items-center">
        <div className="overlayblk"></div>
        <h2 style={{color:'white'}}>
          Reset Password
        </h2>
        <div>
        <Components.Container>
          <form
            className='form'
          >
            <Components.Input 
            label="New Password" name="password" type="password" placeholder='Nouveau Mot de pass' required/>
            <Components.Input
              label="Confirm Password"
              name="passwordConfirm"
              type="password"
              placeholder='Confirm Mot de pass' required
            />
            <Components.Button>
              Reset Password
            </Components.Button>
          </form>
        </Components.Container>
      </div>
    </section>
  );
};

export default ResetPasswordPage;