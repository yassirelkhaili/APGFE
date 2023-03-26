import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import { TokenContext } from "./utils/TokenContext";
import About from "./pages/About";
import Services from "./pages/Services";
import ForgotPasswordPage from "./pages/ForgetPassWord";
import ResetPasswordPage from "./pages/NewPassword";
import NavbarEtud from "./Espace_Etudiant/NavbarEtud";
import Bord from "./Espace_Etudiant/Bord";
import Bord2 from "./Espace_Etudiant/Bord2";
import Profile from "./Espace_Etudiant/Profile";
import Attestation from "./Espace_Etudiant/Attestation";
import Admin from "./Espace_Admin/Admin";
function App() {
  const [loginResponse, setloginResponse] = useState(null)
  return (
    <div className="App">
      <Router>
        <TokenContext.Provider value={{ loginResponse, setloginResponse }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/forgetPass" element={<ForgotPasswordPage/>} />
            <Route path="/Reset" element={<ResetPasswordPage/>} />
            <Route path="/navbar" element={<Bord/>} />
            <Route path="/bord2" element={<Bord2/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/attestation" element={<Attestation/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />}/>
            </Route>  
          </Routes>
        </TokenContext.Provider> 
      </Router>
    </div>
  );
}

export default App;
