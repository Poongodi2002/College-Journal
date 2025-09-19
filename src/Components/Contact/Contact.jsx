import React from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";
import "../../Styles/Contact.css";

const Contact = () => {
  return (
    <>


    <div className="home-first-section">
        <div className="background-image"></div>
        <h3>CONTACT</h3>
      </div>
    <div className="contact-container">
      <div className="contact-info">
        <div className="info-box">
          <h3><FaUser /> Principal & Address</h3>
          <p>
            Kaamadhenu College of Education <br />
            Kaamadhenu Nagar, D.G. Pudur Post, <br />
            Sathyamangalam – 638503, Erode DT, <br />
            Tamil Nadu.
          </p>
        </div>

        <div className="info-box">
          <h3><FaBuilding /> Institution Details</h3>
          <p>
            Recognized by National Council for Teacher Education (NCTE) <br />
            Affiliated to Tamil Nadu Teachers Education University <br />
            Email: kascbed@gmail.com
          </p>
        </div>

        <div className="info-box">
          <h3><FaPhoneAlt /> Contact Numbers</h3>
          <p>
            Phone: 04295 223943 <br />
            Email: kascbed@gmail.com
          </p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Phone" />
          </div>
          <input type="email" placeholder="Your Email Id" />
          <select>
            <option>General Enquiry</option>
            {/* <option>Admissions</option>
            <option>Publications</option>
            <option>Facilities</option> */}
          </select>
          <textarea placeholder="Tell us about your project or idea"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
