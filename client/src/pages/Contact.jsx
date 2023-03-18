import React, {useState, useRef} from "react";
import axios from "axios"
import "../styles/StyleHome.css";
import image from "../images/undraw_contact_us.svg"
import ReCAPTCHA from "react-google-recaptcha"
function Contact() {
  const [input, setinput] = useState()
  const captcha = useRef(false)
  const handleChange = (e) => {
    setinput(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  const handleSubmit = () => {
    const url = "http://localhost/backend/controllers/Contact.php"
      if (captcha.current) {
        try {
          const response = axios.post(url,input)
          console.log(response.data)
      } catch (err) {
        console.log(err)
      }
      }
    }
  return (
    <div className="contact">
      <div className="container">
                <div className="main-heading">
                    <h2>Contactez-Nous</h2>
                    <p>Vous pouvez nous contacter via ce formulaire, nous sommes plus qu'heureux de vous aider.</p>
      </div>
      <div className="content">
                    <form action="">
                        <input type="text" name="name" className="main-input" placeholder="Votre Nom Complet" onChange={handleChange}/>
                        <input type="email" name="email" className="main-input" placeholder="Votre Email" onChange={handleChange}/>
                        <input type="text" name="phone" className="main-input" placeholder="Votre Numéro de Téléphone" onChange={handleChange}/>
                        <textarea name="message" placeholder="Votre Message" className="main-input" onChange={handleChange}></textarea>
                        <ReCAPTCHA sitekey="6LevFBElAAAAANWUmw7A0GSLWuSTVoB8FeAq1K9A" onChange={() => captcha.current = true}></ReCAPTCHA>
                        <input type="submit" value="Send Message" onClick={handleSubmit}/>
                    </form>
                    <div className="infos">
                        <img src={image} alt=""/>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Contact;
