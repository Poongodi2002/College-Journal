import React from "react";
import "./../../Styles/Journal.css";

const Journal = () => {
  return (
    <>
    
    <div className="home-first-section">
        <div className="background-image"></div>
        <h3>JOURNAL</h3>
      </div>
    <div className="journal-page">
      

      <div className="journal-container">
        
        <h2>Kaamadhenu College Journal of Education</h2>
        <p><strong>ISSN (Online): 2589-XXXX | ISSN (Print): 2589-YYYY</strong></p>

        <section className="journal-section">
          <h3>About the Journal</h3>
          <p>
            The <strong>Kaamadhenu College Journal of Education</strong> is a peer-reviewed,
            open-access academic journal dedicated to publishing original research and
            scholarly articles in the field of education. The journal serves as a platform
            for researchers, scholars, and practitioners to share their findings, exchange
            knowledge, and promote innovation in teacher education and related fields.
          </p>
        </section>

        <section className="journal-section">
          <h3>Aims & Scope</h3>
          <p>
            The journal aims to promote research in areas such as pedagogy, curriculum
            development, educational psychology, ICT in education, teacher training,
            inclusive education, and policy studies. It welcomes both theoretical and
            applied research that contribute to the enhancement of educational practices.
          </p>
        </section>

        <section className="journal-section">
          <h3>Publication Details</h3>
          <ul>
            <li><strong>Frequency:</strong> Bi-Annual (Two Issues per Year)</li>
            <li><strong>Language:</strong> English</li>
            <li><strong>Format:</strong> Online and Print</li>
            <li><strong>Publisher:</strong> Kaamadhenu College of Education</li>
            <li><strong>Started:</strong> 2023</li>
          </ul>
        </section>

        <section className="journal-section">
          <h3>Editorial Board</h3>
          <p><strong>Editor-in-Chief:</strong> Dr. R. Kumar</p>
          <p><strong>Managing Editor:</strong> Prof. Latha S</p>
          <p><strong>Editorial Members:</strong> Dr. Priya D, Dr. Meena K, Prof. Arun V</p>
        </section>

        <section className="journal-section">
          <h3>Author Guidelines</h3>
          <p>
            Authors are requested to submit original manuscripts that have not been
            published elsewhere. All submissions will be peer-reviewed. Papers should
            follow APA format and must be submitted electronically via the
            <a href="/submit"> Submit Paper Portal</a>.
          </p>
        </section>

        <section className="journal-section">
          <h3>Plagiarism Policy</h3>
          <p>
            The journal maintains a strict anti-plagiarism policy. All manuscripts will
            be screened using plagiarism detection software. Submissions with more than
            10% similarity index will not be considered.
          </p>
        </section>
      </div>
    </div>
    </>
  );
};

export default Journal;
