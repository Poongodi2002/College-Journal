import React from 'react'
import './../../Styles/EthicsAndPolicy.css'

const EthicsAndPolicy = () => {
  return (
    <>
      <div className="ethics-policy-container">
        <h2 className="ethics-policy-title">Ethics and Publication Policy</h2>
        <p className="ethics-policy-intro">
          The <strong>Kaamadhenu Journal of Education Training and Development (KJETD)</strong> 
          is committed to upholding the highest standards of academic integrity and 
          publication ethics. The journal follows ethical practices to ensure transparency, 
          accountability, and fairness in scholarly publishing.
        </p>

        <h3 className="ethics-section-title">1. Responsibilities of Authors</h3>
        <ul className="ethics-list">
          <li>Authors must submit original and unpublished manuscripts that are not under review elsewhere.</li>
          <li>Proper citations and references must be provided for all sources used.</li>
          <li>Plagiarism, including self-plagiarism, is strictly prohibited.</li>
          <li>All authors should have substantially contributed to the research and writing of the manuscript.</li>
          <li>Any conflicts of interest must be disclosed at the time of submission.</li>
        </ul>

        <h3 className="ethics-section-title">2. Responsibilities of Editors</h3>
        <ul className="ethics-list">
          <li>The Editorial Board ensures a fair and unbiased review process.</li>
          <li>Editors will evaluate manuscripts based on their academic merit without discrimination.</li>
          <li>Confidentiality of submitted manuscripts will be strictly maintained.</li>
          <li>Editors have the authority to accept, reject, or request revisions based on reviewers’ recommendations.</li>
        </ul>

        <h3 className="ethics-section-title">3. Responsibilities of Reviewers</h3>
        <ul className="ethics-list">
          <li>Reviewers must provide constructive and timely feedback to improve the quality of manuscripts.</li>
          <li>Reviews should be conducted objectively, without personal criticism of the author(s).</li>
          <li>Reviewers must maintain confidentiality and not use unpublished materials for personal advantage.</li>
          <li>Any conflicts of interest that may influence the review must be disclosed to the editor.</li>
        </ul>

        <h3 className="ethics-section-title">4. Plagiarism and Misconduct Policy</h3>
        <ul className="ethics-list">
          <li>All manuscripts are checked for plagiarism using reliable detection software.</li>
          <li>Submissions with more than 10% similarity may be returned to the author or rejected.</li>
          <li>Fabrication, falsification of data, or unethical research practices will lead to rejection and possible blacklisting of the author.</li>
        </ul>

        <h3 className="ethics-section-title">5. Open Access and Copyright Policy</h3>
        <ul className="ethics-list">
          <li>KJETD is an open-access journal and all published articles are freely accessible online.</li>
          <li>Authors must sign a copyright transfer agreement upon acceptance of the manuscript.</li>
          <li>Articles may be used for educational and research purposes with proper citation of the source.</li>
        </ul>

        <h3 className="ethics-section-title">6. Ethical Compliance</h3>
        <ul className="ethics-list">
          <li>Authors must ensure that their research complies with ethical standards (e.g., informed consent, institutional approval for studies involving human participants).</li>
          <li>The journal reserves the right to withdraw published papers in case of proven ethical violations.</li>
        </ul>
      </div>
    </>
  )
}

export default EthicsAndPolicy
