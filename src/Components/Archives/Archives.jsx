import React from "react";
import './../../Styles/Archives.css'; // Import external CSS

const Archives = () => {
  return (
    <>
      <div className="archives-container">
        <p className="archives-intro">
          The <strong>Kaamadhenu Journal of Education Training and Development (KJETD)</strong> 
          maintains an open-access online archive of all its published issues. Readers can 
          access previous volumes and issues to explore high-quality research articles, 
          case studies, reviews, and educational innovations.
        </p>

        <h4 className="archives-section-title">Available Issues</h4>
        <ul className="archives-issues-list">
          <li>
            Volume 1, Issue 2 – July–December 2025 <br />
            <a href="#" className="archives-link">[View Full Issue]</a>
          </li>
          <li>
            Volume 1, Issue 1 – January–June 2025 <br />
            <a href="#" className="archives-link">[View Full Issue]</a>
          </li>
        </ul>

        <h4 className="archives-section-title">Note to Readers</h4>
        <ul className="archives-notes-list">
          <li>All issues are available for free download in PDF format.</li>
          <li>Authors and researchers are encouraged to cite articles from past issues while preparing new manuscripts.</li>
          <li>The Archives are regularly updated as new issues are released.</li>
        </ul>
      </div>
    </>
  );
};

export default Archives;
