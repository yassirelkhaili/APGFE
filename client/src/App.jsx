import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import About from "./pages/About";
import Services from "./pages/Services";
import Admin from "./pages/Admin";
import ForgotPasswordPage from "./pages/ForgetPassWord";
import ResetPasswordPage from "./pages/NewPassword";
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/forgetPass" element={<ForgotPasswordPage/>} />
            <Route path="/Reset" element={<ResetPasswordPage/>} />
            <Route element={<PrivateRoutes />}>
            <Route path="/admin" element={<Admin />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            </Route>  
          </Routes>    
      </Router>
    </div>
  );
}

export default App;
