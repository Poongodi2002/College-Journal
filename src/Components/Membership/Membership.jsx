import React from "react";
import { FaBookOpen } from "react-icons/fa";
import "./../../Styles/Membership.css";

const Membership = () => {
  return (
    <div className="membership-container">
      <h2 className="title">Membership</h2>
      <p className="intro">
        The{" "}
        <strong style={{ color: "#1800ac" }}>
          Kaamadhenu Journal of Education Training and Development (KJETD)
        </strong>{" "}
        invites academicians, researchers, professionals, and students to become members of the
        journal community. Membership provides opportunities for collaboration, academic exchange,
        and access to journal resources.
      </p>

      <h3 className="subtitle">Types of Membership</h3>
      <div className="membership-section">
        <h4>
          <FaBookOpen className="book-icon" /> Annual Membership
        </h4>
        <ul className="list">
          <li>Valid for one year from the date of registration.</li>
          <li>
            <strong style={{ color: "#ff7b00" }}>Benefits:</strong>
            <ul className="list">
              <li>Access to all journal issues.</li>
              <li>Eligibility to publish articles with discounted publication fees.</li>
              <li>Certificate of membership.</li>
            </ul>
          </li>
        </ul>

        <h4>
          <FaBookOpen className="book-icon" /> Lifetime Membership
        </h4>
        <ul className="list">
          <li>One-time registration, valid for lifetime.</li>
          <li>
            <strong style={{ color: "#ff7b00" }}>Benefits:</strong>
            <ul className="list">
              <li>Free access to journal issues.</li>
              <li>Priority consideration for publication.</li>
              <li>
                Opportunity to serve as a reviewer or editorial board member (subject to approval).
              </li>
              <li>Certificate of lifetime membership.</li>
            </ul>
          </li>
        </ul>

        <h4>
          <FaBookOpen className="book-icon" /> Institutional Membership
        </h4>
        <ul className="list">
          <li>For universities, colleges, research institutes, and libraries.</li>
          <li>
            <strong style={{ color: "#ff7b00" }}>Benefits:</strong>
            <ul className="list">
              <li>Access to multiple users within the institution.</li>
              <li>Listing of the institution as a partner organization on the journal website.</li>
              <li>Special opportunities for collaborative academic activities.</li>
            </ul>
          </li>
        </ul>
      </div>

      <h3 className="subtitle">Membership Benefits</h3>
      <ul className="list">
        <li>
          <FaBookOpen className="book-icon" /> Access to published issues in PDF format.
        </li>
        <li>
          <FaBookOpen className="book-icon" /> Eligibility for reduced publication charges (if
          applicable).
        </li>
        <li>
          <FaBookOpen className="book-icon" /> Recognition as part of the academic community of
          KJETD.
        </li>
        <li>
          <FaBookOpen className="book-icon" /> Priority updates on conferences, workshops, and
          academic events.
        </li>
      </ul>

      <h3 className="subtitle">How to Apply for Membership</h3>
      <ul className="list">
        <li>
          <FaBookOpen className="book-icon" /> Download the Membership Form from the{" "}
          <a href="#">Download Section</a>.
        </li>
        <li>
          <FaBookOpen className="book-icon" /> Fill in the required details.
        </li>
        <li>
          <FaBookOpen className="book-icon" /> Submit the form along with the membership fee to:{" "}
          <a href="mailto:principalkce@kascsathy.ac.in">principalkce@kascsathy.ac.in</a>
        </li>
        <li>
          <FaBookOpen className="book-icon" /> A confirmation and membership certificate will be
          sent via email.
        </li>
      </ul>

      <h3 className="subtitle">Contact for Membership</h3>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:principalkce@kascsathy.ac.in">principalkce@kascsathy.ac.in</a>
      </p>
      <p>
        <strong>Official Address:</strong> Kaamadhenu College of Education, Sathyamangalam, Erode,
        Tamil Nadu, India - 638 503.
      </p>
    </div>
  );
};

export default Membership;
