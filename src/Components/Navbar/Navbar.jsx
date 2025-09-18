import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../../Styles/Navbar.css";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header>
      {/* ==== TOP BAR ==== */}
      <div className="top-bar">
        <div className="logo-sec">
          <img
            src="/LOGO.jpeg"
            alt="Kaamadhenu Logo"
            className="logo"
          />
        </div>

        <div className="contact-info">
          <span>
            <FaPhoneAlt /> 04295 223943, 80125 21226
          </span>
          <span>
            <MdEmail /> kamadhenu@college.com
          </span>
        </div>

        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* ==== MAIN NAV ==== */}
      <nav className="main-nav">
        <Link to="/">Home</Link>
        
       <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown("about")}
          >
            About ▼
          </button>
          {openDropdown === "about" && (
            <div className="dropdown-content">
              <Link to="/about/aboutus">About Us</Link>
              <Link to='/about/aims'>Aims</Link>
            </div>
          )}
        </div>
        <Link to='/archives'>Archives</Link>

       


        {/* Journal */}
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown("publication")}
          >
            Publications ▼
          </button>
          {openDropdown === "publication" && (
            <div className="dropdown-content">
              <Link to="/publication/journal">Journal</Link>
              <Link to='/publication/magazine'>Magazine</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
