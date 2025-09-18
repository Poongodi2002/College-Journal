import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Archives from './Components/Archives/Archives'
import Journal from "./Components/Publications/Journal";
import Magazine from "./Components/Publications/Magazine";
import AimsAndScope from "./Components/About/AimsAndScope";
import Contact from "./Components/Contact/Contact";


const App=()=>{
  return (
    <Router>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about/aboutus" element={<About />} />
  <Route path="/about/aims" element={<AimsAndScope />} />
  <Route path="/archives" element={<Archives />} />
  <Route path="/publication/journal" element={<Journal />} />
  <Route path="/publication/magazine" element={<Magazine />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

      <Footer />
    </Router>
  );
}

export default App;
