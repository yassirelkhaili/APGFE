import React, {useState} from "react";
import "../styles/Contact.css";
import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import axios from "axios"

function Contact() {
  const [input, setinput] = useState()
  const handleChange = (e) => {
    setinput(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  const handleSubmit = () => {
    const url = "http://localhost/backend/controllers/Contact.php"
    try {
      const response = axios.post(url,input)
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: "url(assets/image.jpeg)" }}
      ></div>
      <div className="rightSide">
        <h1> Contactez-Nous</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name"><BsPersonCircle/></label>
          <input name="name"   placeholder="Nom Complet.." type="text" required onChange={handleChange}/>
          <label htmlFor="email"><HiOutlineMailOpen/></label>
          <input name="email" placeholder="Email.." type="email" required onChange={handleChange}/>
          <label htmlFor="phone"><BsFillTelephonePlusFill/></label>
          <input name="phone" placeholder="Téléphone.." type="text" required onChange={handleChange}/>
          <label htmlFor="message"></label>
          <textarea
            rows="6"
            placeholder="Enter votre message..."
            name="message"
            required
            onChange={handleChange}></textarea>
          <button type="submit"> Envoyer Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
