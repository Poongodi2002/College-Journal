import React from 'react';
import './../../Styles/ArticleAndSubmission.css';

const ArticleAndSubmission = () => {
  return (
    <div className="article-container">
      {/* Intro */}
      <div className="article-intro">
        <p>
          The <strong>Kaamadhenu Journal of Education Training and Development (KJETD)</strong> 
          accepts manuscripts through its online submission system as well as by email. 
          Authors are requested to follow the submission process carefully to ensure 
          smooth and timely review of their papers.
        </p>
      </div>

      {/* Steps */}
      <div className="article-steps">
        <h2>Steps for Submission</h2>
        <ol>
          <li>
            <strong>Prepare Your Manuscript</strong>
            <ul>
              <li>Ensure that your paper follows the Guidelines for Authors (formatting, referencing, plagiarism policy, etc.).</li>
              <li>Include a Title Page with author details (name, designation, institution, email).</li>
              <li>Prepare an Abstract (150–250 words) with 4–6 keywords.</li>
            </ul>
          </li>

          <li>
            <strong>Submit the Paper</strong>
            <ul>
              <li>Online Submission: (Insert journal’s web submission link here, if available).</li>
              <li>Email Submission: Manuscripts may be sent directly to: 
                <a href="mailto:principalkce@kascsathy.ac.in"> principalkce@kascsathy.ac.in</a>
              </li>
            </ul>
          </li>

          <li>
            <strong>Acknowledgement of Receipt</strong>
            <ul>
              <li>Authors will receive an acknowledgement email within 7 working days confirming receipt of the manuscript.</li>
            </ul>
          </li>

          <li>
            <strong>Peer Review Process</strong>
            <ul>
              <li>All submissions will undergo a double-blind peer review process.</li>
              <li>Review results (acceptance / revision / rejection) will be communicated to authors within 4–6 weeks.</li>
            </ul>
          </li>

          <li>
            <strong>Final Submission</strong>
            <ul>
              <li>Authors whose papers are accepted will be asked to submit the final revised version in MS Word format along with a copyright transfer form.</li>
            </ul>
          </li>

          <li>
            <strong>Publication</strong>
            <ul>
              <li>Accepted papers will be published in the next available issue of the journal.</li>
              <li>Authors will be notified via email once their paper is published online.</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Notes */}
      <div className="article-notes">
        <h2>Important Notes</h2>
        <ul>
          <li>Only original and unpublished manuscripts will be considered.</li>
          <li>The journal follows APA (7th Edition) for references and citations.</li>
          <li>The editorial board reserves the right to make editorial corrections without altering the content of the paper.</li>
        </ul>
      </div>
    </div>
  )
}

export default ArticleAndSubmission;
