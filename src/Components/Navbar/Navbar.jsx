import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "../../Styles/Navbar.css";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

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
      </div>

      <nav className="nav-bar">
        <Link to="/">Home</Link>

        <div
          className={`dropdown ${openDropdown === "about" ? "show" : ""}`}
          onMouseEnter={() => toggleDropdown("about")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button className="dropbtn">About ▼</button>
          <div className="dropdown-content">
            <Link to="/about/aboutus">About Us</Link>
            <Link to="/about/aims">Aims</Link>
           
          </div>
        </div>
         <Link to="/archives">Archives</Link>

        <div
          className={`dropdown ${openDropdown === "publications" ? "show" : ""}`}
          onMouseEnter={() => toggleDropdown("publications")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button className="dropbtn">Publications ▼</button>
          <div className="dropdown-content">
            <Link to="/publication/journal">Journal</Link>
            <Link to="/publication/magazine">Magazine</Link>
          </div>
        </div>

        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
