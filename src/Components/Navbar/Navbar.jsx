import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; 
import "../../Styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <header>
    
      <div className="top-bar">
        <div className="top-left">
          <span>
            <IoLocationSharp /> Kaamadhenu Nagar, D.G. Pudur Post, Sathyamangalam - 638503, Erode DT , Tamil Nadu
          </span>
        </div>
        <div className="top-center">
          <span>
            <MdEmail /> kascbed@gmail.com
          </span>
          <span>
            <FaPhoneAlt /> 04295 223943
          </span>
        </div>
        <div className="top-right">
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

   
      <div className="main-header">
        <img src="/LOGO.jpeg" alt="Kaamadhenu Logo" className="logo" />
        <div className="college-info">
          <h2>KAAMADHENU COLLEGE OF EDUCATION</h2>
          <p>
            Recognized by National Council for Teacher Education & Affiliated to the Tamil Nadu Teachers Education University <br />
            Sathyamangalam – 638503, Erode DT.
          </p>
        </div>

        
        <button 
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <GiHamburgerMenu /> 
        </button>
      </div>

      
      <nav className={`nav-bar ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/aims">Aims and Scope</Link> 
        <Link to='/guideline'>Guidelines for Author</Link>
        <Link to='/callofpapers'>Call of Papers</Link>
        <Link to='/articleandsubmission'>Article and Submission</Link>
        <Link to='/editorialboard'>Editorial Board</Link>
        <Link to="/archives">Archives</Link>
        <Link to={'/ethicsandpolicy'}>Ethics And Policy</Link>
        <Link to='/downloads'>Downloads</Link>
        <Link to='/membership'>Membership</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
