import "../styles/Auth.css";
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { TokenContext } from "../utils/TokenContext";
import { useNavigate } from "react-router-dom";

function LoginUi() {
  const [user, setuser] = useState([]);
  const { token, settoken } = useContext(TokenContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    if (token === "success") {
      navigate("/dashboard", {replace: true});
    }
  }, [token]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost/backend/controllers/Auth.php";
    try {
      const response = await axios.post(url, user);
      settoken(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img
                src="../assets/profile.png"
                alt="profile"
                className="profile"
              />
            </div>
          </div>
          <div>
            <h1 style={{ color: "#D6A330" }}>Login Page</h1>
            <div>
              <img src="../assets/email.jpg" alt="email" className="email" />
              <input
                type="email"
                placeholder="email.."
                name="email"
                className="name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="second-input">
              <img src="../assets/pass.png" alt="pass" className="email" />
              <input
                type="password"
                name="password"
                placeholder="password.."
                className="name"
                required
                onChange={handleChange}
              />
            </div>
            <p className="link">
              <a href="#">Forgot password ?</a>
            </p>
            <div className="login-button">
              <button type="submit" onClick={handleSubmit}>
                Login
              </button>
            </div>
            <p className="link">
              Or <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;
