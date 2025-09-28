import React from 'react'
import './../../Styles/Downloads.css'

const Downloads = () => {
  return (
    <div className="downloads-container">
      <h2 className="downloads-title">Downloads</h2>
      <p className="downloads-intro">
        The <strong>Kaamadhenu Journal of Education Training and Development (KJETD)</strong> 
        provides open-access resources to facilitate academic exchange and research. Readers, 
        authors, and researchers may freely download the following materials.
      </p>

      <h3 className="downloads-section-title">Available Downloads</h3>
      <ul className="downloads-list-numbered">
        <li>
          Current Issue (PDF) –{" "}
          <a href="#" className="downloads-link">Download Current Issue</a>
        </li>
        <li>
          Previous Issues (Archives) –{" "}
          <a href="#" className="downloads-link">Go to Archives</a>
        </li>
        <li>
          Author Guidelines (PDF) –{" "}
          <a href="#" className="downloads-link">Download Guidelines for Authors</a>
        </li>
        <li>
          Manuscript Template (Word File) –{" "}
          <a href="#" className="downloads-link">Download Manuscript Template</a>
        </li>
        <li>
          Copyright Transfer Form (PDF) –{" "}
          <a href="#" className="downloads-link">Download Form</a>
        </li>
        <li>
          Publication Ethics & Policy (PDF) –{" "}
          <a href="#" className="downloads-link">Download Ethics Policy</a>
        </li>
        <li>
          Membership Form (Word/PDF) –{" "}
          <a href="#" className="downloads-link">Download Membership Form</a>
        </li>
      </ul>

      <h3 className="downloads-section-title">Note for Users</h3>
      <ul className="downloads-list-bulleted">
        <li>All resources are available for free download.</li>
        <li>Authors must use the official manuscript template before submission.</li>
        <li>
          For any technical difficulties in downloading files, please contact:{" "}
          <a href="mailto:principalkce@kascsathy.ac.in" className="downloads-link">
            principalkce@kascsathy.ac.in
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Downloads
