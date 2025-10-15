import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; 
import "../../Styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // All nav links in one array (easy to maintain)
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/aims", label: "Aims and Scope" },
    { path: "/guideline", label: "Guidelines for Author" },
    { path: "/callofpapers", label: "Call of Papers" },
    { path: "/articleandsubmission", label: "Article and Submission" },
    { path: "/editorialboard", label: "Editorial Board" },
    { path: "/archives", label: "Archives" },
    { path: "/ethicsandpolicy", label: "Ethics And Policy" },
    { path: "/downloads", label: "Downloads" },
    { path: "/membership", label: "Membership" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header>
      {/* Top Bar */}
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
          <a href="#" style={{color:'#ffffffff'}}><FaYoutube /></a>
          <a href="#" style={{color:'#ffffffff'}}><FaFacebookF /></a>
          <a href="#" style={{color:'#ffffffff'}}><FaInstagram /></a>
        </div>
      </div>
 
      {/* Main Header */}
      <div className="main-header">
        <img src="/KLOGO.jpeg" alt="Kaamadhenu Logo" className="logo" />
        <div className="college-info">
          <h2>KAAMADHENU JOURNAL OF EDUCATION TRAINING AND DEVELOPMENT</h2>
          <p>
            Recognized by National Council for Teacher Education & Affiliated to the Tamil Nadu Teachers Education University <br />
            Sathyamangalam – 638503, Erode DT.
          </p>
        </div>

        {/* Hamburger Button */}
        <button 
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <GiHamburgerMenu /> 
        </button>
      </div>

      {/* Nav Links */}
      <nav className={`nav-bar ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link, index) => (
          <Link 
            key={index} 
            to={link.path} 
            onClick={() => setMenuOpen(false)}  // 👈 auto-close on click
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
