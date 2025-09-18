import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../../Styles/Navbar.css";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header>
      {/* ==== TOP BAR ==== */}
      <div className="top-bar">
        <div className="logo-sec">
          <img src="/LOGO.jpeg" alt="Kaamadhenu Logo" className="logo" />
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
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>

          {/* About Dropdown */}
          <div className="dropdown" onClick={(e) => e.stopPropagation()}>
            <button
              className="dropbtn"
              onClick={() => toggleDropdown("about")}
            >
              About ▼
            </button>
            {openDropdown === "about" && (
              <div className="dropdown-content">
                <Link to="/about/aboutus" onClick={closeMenu}>About Us</Link>
                <Link to="/about/aims" onClick={closeMenu}>Aims</Link>
              </div>
            )}
          </div>

          <Link to="/archives" onClick={closeMenu}>Archives</Link>

          {/* Publications Dropdown */}
          <div className="dropdown" onClick={(e) => e.stopPropagation()}>
            <button
              className="dropbtn"
              onClick={() => toggleDropdown("publication")}
            >
              Publications ▼
            </button>
            {openDropdown === "publication" && (
              <div className="dropdown-content">
                <Link to="/publication/journal" onClick={closeMenu}>Journal</Link>
                <Link to="/publication/magazine" onClick={closeMenu}>Magazine</Link>
              </div>
            )}
          </div>

          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
