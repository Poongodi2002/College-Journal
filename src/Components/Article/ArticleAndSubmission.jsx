import React from 'react';
import './../../Styles/ArticleAndSubmission.css';
import { FaBookOpen } from 'react-icons/fa'; // opened book icon

const ArticleAndSubmission = () => {
  return (
    <div className="article-container">
      
      <div className="article-intro">
        <p>
          The <strong style={{color:'#1800ac'}}>Kaamadhenu Journal of Education Training and Development (KJETD)</strong> 
          accepts manuscripts through its online submission system as well as by email. 
          Authors are requested to follow the submission process carefully to ensure 
          smooth and timely review of their papers.
        </p>
      </div>

      <div className="article-steps">
        <h2>Steps for Submission</h2>
        <ol>
          <li>
            <strong style={{color:'#1800ac'}}>Prepare Your Manuscript</strong>
            <ul className="icon-list">
              <li><FaBookOpen className="book-icon"/> Ensure that your paper follows the Guidelines for Authors (formatting, referencing, plagiarism policy, etc.).</li>
              <li><FaBookOpen className="book-icon"/> Include a Title Page with author details (name, designation, institution, email).</li>
              <li><FaBookOpen className="book-icon"/> Prepare an Abstract (150–250 words) with 4–6 keywords.</li>
            </ul>
          </li>

          <li>
            <strong style={{color:'#1800ac'}}>Submit the Paper</strong>
            <ul className="icon-list">
              <li><FaBookOpen className="book-icon"/> Online Submission: (Insert journal’s web submission link here, if available).</li>
              <li><FaBookOpen className="book-icon"/> Email Submission: Manuscripts may be sent directly to: 
                <a href="mailto:principalkce@kascsathy.ac.in"> principalkce@kascsathy.ac.in</a>
              </li>
            </ul>
          </li>

          <li>
            <strong style={{color:'#1800ac'}}>Acknowledgement of Receipt</strong>
            <ul className="icon-list">
              <li><FaBookOpen className="book-icon"/> Authors will receive an acknowledgement email within 7 working days confirming receipt of the manuscript.</li>
            </ul>
          </li>

          <li>
            <strong style={{color:'#1800ac'}}>Peer Review Process</strong>
            <ul className="icon-list">
              <li><FaBookOpen className="book-icon"/> All submissions will undergo a double-blind peer review process.</li>
              <li><FaBookOpen className="book-icon"/> Review results (acceptance / revision / rejection) will be communicated to authors within 4–6 weeks.</li>
            </ul>
          </li>

          <li>
            <strong style={{color:'#1800ac'}}>Final Submission</strong>
            <ul className="icon-list">
              <li><FaBookOpen className="book-icon"/> Authors whose papers are accepted will be asked to submit the final revised version in MS Word format along with a copyright transfer form.</li>
            </ul>
          </li>

          <li>
            <strong style={{color:'#1800ac'}}>Publication</strong>
            <ul className="icon-list">
              <li><FaBookOpen className="book-icon"/> Accepted papers will be published in the next available issue of the journal.</li>
              <li><FaBookOpen className="book-icon"/> Authors will be notified via email once their paper is published online.</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="article-notes">
        <h2 style={{color:'#1800ac'}}>Important Notes</h2>
        <ul className="icon-list">
          <li><FaBookOpen className="book-icon"/> Only original and unpublished manuscripts will be considered.</li>
          <li><FaBookOpen className="book-icon"/> The journal follows APA (7th Edition) for references and citations.</li>
          <li><FaBookOpen className="book-icon"/> The editorial board reserves the right to make editorial corrections without altering the content of the paper.</li>
        </ul>
      </div>
    </div>
  ) 
}

export default ArticleAndSubmission;
