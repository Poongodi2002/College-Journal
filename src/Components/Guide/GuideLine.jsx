import React from 'react';
import './../../Styles/GuideLine.css';
import { FaBookOpen } from "react-icons/fa";

const GuideLine = () => {
  return (
    <div className="guideline-container">
      
      <div className="guideline-intro">
        <p>
          The <strong style={{color:'#1800ac'}}>Kaamadhenu Journal of Education Training and Development (KJETD)</strong> invites original and unpublished research articles, reviews, case studies, and reflections in the field of education. Authors are requested to follow the guidelines below before submitting their manuscripts.
        </p>
      </div>

      <div className="guideline-sections">
        <div className="guideline-section">
          <h3 style={{color:'#f68713'}}>1. Manuscript Preparation</h3>
          <ul>
            <li><FaBookOpen className="book-icon" /> Manuscripts must be written in English and submitted in MS Word format.</li>
            <li><FaBookOpen className="book-icon" /> The paper should be typed in Times New Roman, font size 12, with 1.5 line spacing.</li>
            <li><FaBookOpen className="book-icon" /> The length of the article should be between 3000–5000 words, including references, tables, and appendices.</li>
            <li><FaBookOpen className="book-icon" /> Margins: 1 inch on all sides.</li>
            <li><FaBookOpen className="book-icon" /> All pages should be numbered consecutively.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3 style={{color:'#f68713'}}>2. Structure of the Manuscript</h3>
          <ul>
            <li><FaBookOpen className="book-icon" /> Title Page: Title of the paper, author(s) name, designation, institutional affiliation, contact details, and email address.</li>
            <li><FaBookOpen className="book-icon" /> Abstract: A concise summary of about 150–250 words, followed by 4–6 keywords.</li>
            <li><FaBookOpen className="book-icon" /> Introduction: Background, objectives, and significance of the study.</li>
            <li><FaBookOpen className="book-icon" /> Methodology: Research design, participants, instruments, and procedures.</li>
            <li><FaBookOpen className="book-icon" /> Results and Discussion: Findings of the study with critical interpretation.</li>
            <li><FaBookOpen className="book-icon" /> Conclusion: Summary, implications, and scope for future research.</li>
            <li><FaBookOpen className="book-icon" /> References: Should follow the APA (7th Edition) style strictly.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3 style={{color:'#f68713'}}>3. Figures and Tables</h3>
          <ul>
            <li><FaBookOpen className="book-icon" /> All figures and tables should be numbered sequentially and placed within the text.</li>
            <li><FaBookOpen className="book-icon" /> Each table/figure must have a clear title and source (if applicable).</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3 style={{color:'#f68713'}}>4. Plagiarism Policy</h3>
          <ul>
            <li><FaBookOpen className="book-icon" /> Submissions must be original and not under consideration elsewhere.</li>
            <li><FaBookOpen className="book-icon" /> Papers will be screened using plagiarism detection tools.</li>
            <li><FaBookOpen className="book-icon" /> Manuscripts with more than 10% similarity may be rejected.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3 style={{color:'#f68713'}}>5. Review Process</h3>
          <ul>
            <li><FaBookOpen className="book-icon" /> All submitted manuscripts undergo a double-blind peer review process.</li>
            <li><FaBookOpen className="book-icon" /> The editorial board reserves the right to accept, revise, or reject any submission.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3 style={{color:'#f68713'}}>6. Submission Procedure</h3>
          <ul>
            <li><FaBookOpen className="book-icon" /> Authors should submit their manuscripts electronically through the Article Submission System available on the journal website or send your paper to: <strong style={{color:'#1800ac'}}>principalkce@kascsathy.ac.in</strong></li>
            <li><FaBookOpen className="book-icon" /> The journal strictly adheres to ethical standards in research and publication.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3 style={{color:'#f68713'}}>7. Contact for Submission</h3>
          <p>For any queries or submission assistance, please contact:</p>
          <p><strong style={{color:'#1800ac'}}>Email:</strong> jsecretary@kascsathy.ac.in | principalkce@kascsathy.ac.in</p>
        </div>
      </div>
    </div>
  )
}

export default GuideLine;
