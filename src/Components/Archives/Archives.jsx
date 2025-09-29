import React, { useState } from "react";
import './../../Styles/Archives.css';

const archiveData = [
  {
    volume: 1,
    issue: 2,
    period: "July–December 2025",
    pdf: "/pdfs/volume1_issue2.pdf"
  },
  {
    volume: 1,
    issue: 1,
    period: "January–June 2025",
    pdf: "/pdfs/volume1_issue1.pdf"
  },
];

const Archives = () => {
  const [modalPDF, setModalPDF] = useState(null);

  const openModal = (pdf) => setModalPDF(pdf);
  const closeModal = () => setModalPDF(null);

  return (
    <div className="archives-container">
      <h2 style={{color:'#0077cc'}}>Archives (For Online Serials Only)</h2>
      <p>
        The <strong style={{color:'#0077cc'}}> Kaamadhenu Journal of Education Training and Development (KJETD)</strong> maintains an open-access online archive of all its published issues. Readers can access previous volumes and issues to explore high-quality research articles, case studies, reviews, and educational innovations.
      </p>

      <table className="archives-table">
        <thead>
          <tr>
            <th>Volume</th>
            <th>Issue</th>
            <th>Period</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {archiveData.map((item, index) => (
            <tr key={index}>
              <td>{item.volume}</td>
              <td>{item.issue}</td>
              <td>{item.period}</td>
              <td>
                <button 
                  className="archives-link" 
                  onClick={() => openModal(item.pdf)}
                >
                  View Full Issue
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="archives-notes">
        <h3>Note to Readers</h3>
        <ul>
          <li>All issues are available for free download in PDF format.</li>
          <li>Authors and researchers are encouraged to cite articles from past issues while preparing new manuscripts.</li>
          <li>The Archives are regularly updated as new issues are released.</li>
        </ul>
      </div>

      {modalPDF && (
        <div className="pdf-modal">
          <button className="close-btn" onClick={closeModal}>X</button>
          <iframe 
            src={modalPDF} 
            width="100%" 
            height="600px" 
            title="PDF Preview"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Archives;
