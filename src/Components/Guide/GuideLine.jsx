import React from 'react';
import './../../Styles/GuideLine.css';

const GuideLine = () => {
  return (
    <div className="guideline-container">
      
      <div className="guideline-intro">
        <p>
          The <strong style={{color:'#1eaaf1'}}>Kaamadhenu Journal of Education Training and Development (KJETD)</strong> invites original and unpublished research articles, reviews, case studies, and reflections in the field of education. Authors are requested to follow the guidelines below before submitting their manuscripts.
        </p>
      </div>

      <div className="guideline-sections">
        <div className="guideline-section">
          <h3>1. Manuscript Preparation</h3>
          <ul>
            <li>Manuscripts must be written in English and submitted in MS Word format.</li>
            <li>The paper should be typed in Times New Roman, font size 12, with 1.5 line spacing.</li>
            <li>The length of the article should be between 3000–5000 words, including references, tables, and appendices.</li>
            <li>Margins: 1 inch on all sides.</li>
            <li>All pages should be numbered consecutively.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3>2. Structure of the Manuscript</h3>
          <ul>
            <li>Title Page: Title of the paper, author(s) name, designation, institutional affiliation, contact details, and email address.</li>
            <li>Abstract: A concise summary of about 150–250 words, followed by 4–6 keywords.</li>
            <li>Introduction: Background, objectives, and significance of the study.</li>
            <li>Methodology: Research design, participants, instruments, and procedures.</li>
            <li>Results and Discussion: Findings of the study with critical interpretation.</li>
            <li>Conclusion: Summary, implications, and scope for future research.</li>
            <li>References: Should follow the APA (7th Edition) style strictly.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3>3. Figures and Tables</h3>
          <ul>
            <li>All figures and tables should be numbered sequentially and placed within the text.</li>
            <li>Each table/figure must have a clear title and source (if applicable).</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3>4. Plagiarism Policy</h3>
          <ul>
            <li>Submissions must be original and not under consideration elsewhere.</li>
            <li>Papers will be screened using plagiarism detection tools.</li>
            <li>Manuscripts with more than 10% similarity may be rejected.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3>5. Review Process</h3>
          <ul>
            <li>All submitted manuscripts undergo a double-blind peer review process.</li>
            <li>The editorial board reserves the right to accept, revise, or reject any submission.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3>6. Submission Procedure</h3>
          <ul>
            <li>Authors should submit their manuscripts electronically through the Article Submission System available on the journal website or send your paper to: <strong style={{color:'#0077cc'}}>principalkce@kascsathy.ac.in</strong></li>
            <li>The journal strictly adheres to ethical standards in research and publication.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3>7. Contact for Submission</h3>
          <p>For any queries or submission assistance, please contact:</p>
          <p><strong style={{color:'#1eaaf1'}} >Email:</strong > jsecretary@kascsathy.ac.in | principalkce@kascsathy.ac.in</p>
        </div>
      </div>
    </div>
  )
}

export default GuideLine;
