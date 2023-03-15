import React, {useState} from "react";
import axios from "axios"
import "../styles/StyleHome.css";
import image from "../images/undraw_contact_us.svg"
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
      <div className="container">
                <div className="main-heading">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, Provident consectetur adipis Provident.</p>
      </div>
      <div className="content">
                    <form action="">
                        <input type="text" name="name" className="main-input" placeholder="Your Name" onChange={handleChange}/>
                        <input type="email" name="email" className="main-input" placeholder="Your Email" onChange={handleChange}/>
                        <input type="text" name="phone" className="main-input" placeholder="Your Phone Number" onChange={handleChange}/>
                        <textarea name="message" placeholder="Your Message" className="main-input" onChange={handleChange}></textarea>
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
