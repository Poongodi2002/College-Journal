import React from "react";
import "../../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="journal-name">
        <strong>Kaamadhenu Journal of Education Training and Development (KJETD)</strong>
      </p>
      <p>
        <strong>Address:</strong> Kaamadhenu College of Education, Sathyamangalam, 
        Erode, Tamil Nadu, India - 638 503.
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:principalkce@kascsathy.ac.in">
          principalkce@kascsathy.ac.in
        </a>
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a href="#" target="_blank" rel="noopener noreferrer">
          office@kasccathy.ac.in
        </a>
      </p>
      <p>
        <strong>Phone:</strong>+91 4295 - 223743
      </p>
    </div>
  );
};

export default Contact;
