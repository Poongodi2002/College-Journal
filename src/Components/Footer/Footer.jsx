import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFax,
} from "react-icons/fa";
import "./../../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Contact Information Column */}
        <div className="footer-col">
          <h4>KASC</h4>
          <p>
            <FaMapMarkerAlt />
            Kaamadhenu Nagar, D.G. Pudur Post, 
            <br />
            Sathyamangalam - 638503,
            <br />
            Erode DT, Tamil Nadu
          </p>
          <p>
            <FaPhone /> +91 97509 94108
          </p>
          <p>
            <FaFax /> +91 4295 - 223743
          </p>
          <p>
            <FaEnvelope /> kascbed@gmail.com
          </p>
        </div>

        {/* Quick Links Column 1 */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/aims'>Aims and Scope</Link>
            </li>
            <li>
              <Link to='/guideline'>Guidelines for Author</Link>
            </li>
            <li>
              <Link to='/callofpapers'>Call for Papers</Link>
            </li>
            <li>
              <Link to='/articleandsubmission'>Article and Submission</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Column 2 */}
        <div className="footer-col">
          <h4>MORE LINKS</h4>
          <ul>
            <li>
              <Link to='/editorialboard'>Editorial Board</Link>
            </li>
            <li>
              <Link to='/archives'>Archives</Link>
            </li>
            <li>
              <Link to='/ethicsandpolicy'>Ethics and Policy</Link>
            </li>
            <li>
              <Link to='/downloads'>Downloads</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div className="footer-col">
          <h4>FOLLOW US</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Google">
              <FaGoogle />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright ©2024 - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;