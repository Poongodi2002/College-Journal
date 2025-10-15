import React from "react";
import { FaBookOpen } from "react-icons/fa";
import "./../../Styles/Downloads.css";

const Downloads = () => {
  return (
    <div className="downloads-container">
      <h2 className="downloads-title">Downloads</h2>
      <p className="downloads-intro">
        The <strong style={{color:'#1800ac'}}>Kaamadhenu Journal of Education Training and Development (KJETD)</strong>{" "}
        provides open-access resources to facilitate academic exchange and research.
        Readers, authors, and researchers may freely download the following materials.
      </p>

      <h3 className="downloads-section-title">Available Downloads</h3>
      <ul className="downloads-list">
        <li>
          <FaBookOpen className="book-icon" />
          Current Issue (PDF) –{" "}
          <a href="javascript_tutorial.pdf" className="downloads-link" download>
            Download Current Issue
          </a>
        </li>
        <li>
          <FaBookOpen className="book-icon" />
          Previous Issues (Archives) –{" "}
          <a href="javascript_tutorial.pdf" className="downloads-link" download>
            Go to Archives
          </a>
        </li>
        <li>
          <FaBookOpen className="book-icon" />
          Author Guidelines (PDF) –{" "}
          <a href="javascript_tutorial.pdf" className="downloads-link" download>
            Download Guidelines for Authors
          </a>
        </li>
        <li>
          <FaBookOpen className="book-icon" />
          Manuscript Template (Word File) –{" "}
          <a href="javascript_tutorial.pdf" className="downloads-link" download>
            Download Manuscript Template
          </a>
        </li>
        <li>
          <FaBookOpen className="book-icon" />
          Copyright Transfer Form (PDF) –{" "}
          <a href="javascript_tutorial.pdf" className="downloads-link" download>
            Download Form
          </a>
        </li>
        <li>
          <FaBookOpen className="book-icon" />
          Publication Ethics & Policy (PDF) –{" "}
          <a href="javascript_tutorial.pdf" className="downloads-link" download>
            Download Ethics Policy
          </a>
        </li>
        <li>
          <FaBookOpen className="book-icon" />
          Membership Form (Word/PDF) –{" "}
          <a href="javascript_tutorial.pdf" className="downloads-link" download>
            Download Membership Form
          </a>
        </li>
      </ul>

      <h3 className="downloads-section-title">Note for Users</h3>
      <ul className="downloads-list">
        <li>
          <FaBookOpen className="book-icon" />
          All resources are available for free download.
        </li>
        <li>
          <FaBookOpen className="book-icon" />
          Authors must use the official manuscript template before submission.
        </li>
        <li>
          <FaBookOpen className="book-icon" />
          For any technical difficulties in downloading files, please contact:{" "}
          <a href="mailto:principalkce@kascsathy.ac.in" className="downloads-link">
            principalkce@kascsathy.ac.in
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Downloads;
