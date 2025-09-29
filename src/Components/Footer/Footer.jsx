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
        
        <div className="footer-col">
          <h4>KASC</h4>
          <p>
            Kamadhenu Nagar D.G. Pudur Post, Sathyamangalam-
            <br />
            Athani-Aapakoodal -Erode Road,
            <br />
            Sathyamangalam, Tamil Nadu 638503
          </p>
        </div>

        <div className="footer-col">
          <h4>INFORMATIONS FOR</h4>
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
               <Link to='/callofpapers'>Call of Papers</Link>
            </li>
            <li>
              <Link to='/articleandsubmission'>Article and Submission</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>CONTACT</h4>
          <p> 
            <FaMapMarkerAlt /> Bannari Amman College Opp
          </p>
          <p>
            <FaEnvelope /> office@kasccathy.ac.in
          </p>
          <p>
            <FaPhone /> +91 97509 94108
          </p>
          <p>
            <FaFax /> +91 4295 - 223743
          </p>
        </div>

        <div className="footer-col">
          <h4>FOLLOW US</h4>
          <div className="social-links">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaGoogle />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2020 Copyright: <a href="#">Kasc.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
