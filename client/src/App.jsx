import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
function App() {
  const [token, settoken] = useState(null);
  return (
    <div className="App">
      <Router>
        
        <TokenContext.Provider value={{ token, settoken }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/auth" element={<Auth />} />
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
