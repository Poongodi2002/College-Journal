import React from 'react';
import './../../Styles/Aims.css';

const AimsAndScope = () => {
  return (
    <div className="aims-container">

      <div className="aims-intro">
        <p>
          The <strong style={{color:'#00a9f4'}}>Kaamadhenu Journal of Education Training and Development (KJETD)</strong> 
          is a peer-reviewed academic journal devoted to promoting excellence in education, 
          teacher training, and professional development. The journal aims to provide a platform 
          for scholars, researchers, teacher educators, practitioners, and policymakers to share 
          innovative ideas, empirical research, and theoretical perspectives that contribute to 
          the advancement of education.
        </p>
      </div>

      <div className="aims-section">
        <div className="aims-image">
          <img src="/abt.jpeg" alt="About Journal" />
        </div>
        <div className="aims-text">
          <h3>The scope of the journal includes (but is not limited to):</h3>
          <ul>
            <li>Teacher education and professional training</li>
            <li>Curriculum design, development, and innovation</li>
            <li>Educational psychology and learner development</li>
            <li>Educational sociology and philosophy</li>
            <li>ICT in education and digital learning</li>
            <li>Pedagogical strategies, assessment, and evaluation</li>
          </ul>
        </div>
      </div>



      <div className="aims-section reverse">
        <div className="aims-image">
          <img src="/campus02.jpg" alt="Campus" />
        </div>
        <div className="aims-text">
          <ul>
            <li>Inclusive education and special needs education</li>
            <li>Higher education, policies, and reforms</li>
            <li>Educational leadership and management</li>
            <li>Comparative and international education</li>
            <li>Lifelong learning and skill development</li>
            <li>Pedagogical strategies, assessment, and evaluation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AimsAndScope;
