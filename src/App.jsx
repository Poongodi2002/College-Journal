import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import AimsAndScope from "./Components/Aim/AimsAndScope";
import GuideLine from "./Components/Guide/GuideLine";
import CallOfPapers from "./Components/papers/CallOfPapers";
import ArticleAndSubmission from "./Components/Article/ArticleAndSubmission";
import EditorialBoard from './Components/EditorialBoard/EditorialBoard'
import EthicsAndPolicy from "./Components/EthicsAndPolicy/EthicsAndPolicy";
import Downloads from "./Components/Downloads/Downloads";
import Membership from "./Components/Membership/Membership";

import Archives from './Components/Archives/Archives'
import Journal from "./Components/Publications/Journal";
import Magazine from "./Components/Publications/Magazine";
import Contact from "./Components/Contact/Contact";



const App=()=>{
  return (
    <Router>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/aims" element={<AimsAndScope />} />
  <Route path='/guideline' element={<GuideLine/>} />
  <Route path='/callofpapers' element={<CallOfPapers />} />
  <Route path='/articleandsubmission' element={<ArticleAndSubmission />} />
  <Route path='/editorialboard' element={<EditorialBoard />} />
  <Route path='/ethicsandpolicy' element={<EthicsAndPolicy />} />
  <Route path="/downloads" element={<Downloads />} />
  <Route path='/membership' element={<Membership />} />

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
