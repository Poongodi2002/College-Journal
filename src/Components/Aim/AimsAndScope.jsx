import React from 'react';
import { FaBookOpen } from 'react-icons/fa'; // opened book icon
import './../../Styles/Aims.css';

const AimsAndScope = () => {
  return (
    <div className="aims-container">

      <div className="aims-intro">
        <p>
          The <strong style={{color:'#1800ac'}}>Kaamadhenu Journal of Education Training and Development (KJETD)</strong> 
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
          <h3 style={{color:'#f68713'}}>The scope of the journal includes (but is not limited to):</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ display:'flex', alignItems:'center', gap:'8px', color:'#1800ac' }}>
              <FaBookOpen style={{ color:'#f68713' }}/> Teacher education and professional training
            </li>
            <li style={{ display:'flex', alignItems:'center', gap:'8px', color:'#1800ac' }}>
              <FaBookOpen style={{ color:'#f68713' }}/> Curriculum design, development, and innovation
            </li>
            <li style={{ display:'flex', alignItems:'center', gap:'8px', color:'#1800ac' }}>
              <FaBookOpen style={{ color:'#f68713' }}/> Educational psychology and learner development
            </li>
            <li style={{ display:'flex', alignItems:'center', gap:'8px', color:'#1800ac' }}>
              <FaBookOpen style={{ color:'#f68713' }}/> Educational sociology and philosophy
            </li>
            <li style={{ display:'flex', alignItems:'center', gap:'8px', color:'#1800ac' }}>
              <FaBookOpen style={{ color:'#f68713' }}/> ICT in education and digital learning
            </li>
            <li style={{ display:'flex', alignItems:'center', gap:'8px', color:'#1800ac' }}>
              <FaBookOpen style={{ color:'#f68713' }}/> Pedagogical strategies, assessment, and evaluation
            </li>
          </ul>
        </div>
      </div>

      <div className="aims-section reverse">
        <div className="aims-image">
          <img src="/campus02.jpg" alt="Campus" />
        </div>
        <div className="aims-text">
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ display:'flex', alignItems:'center', gap:'8px', color:'#1800ac' }}>
              <FaBookOpen style={{ color:'#f68713' }}/> Inclusive education and special needs education
            </li>
            <li style={{ display:'flex', alignItems:'center', gap:'8px', color:'#1800ac' }}>
              <FaBookOpen style={{ color:'#f68713' }}/> Higher education, policies, and reforms
            </li>
            <li style={{ display:'flex', alignItems:'center', gap:'8px', color:'#1800ac' }}>
              <FaBookOpen style={{ color:'#f68713' }}/> Educational leadership and management
            </li>
            <li style={{ display:'flex', alignItems:'center', gap:'8px', color:'#1800ac' }}>
              <FaBookOpen style={{ color:'#f68713' }}/> Comparative and international education
            </li>
            <li style={{ display:'flex', alignItems:'center', gap:'8px', color:'#1800ac' }}>
              <FaBookOpen style={{ color:'#f68713' }}/> Lifelong learning and skill development
            </li>
            <li style={{ display:'flex', alignItems:'center', gap:'8px', color:'#1800ac' }}>
              <FaBookOpen style={{ color:'#f68713' }}/> Pedagogical strategies, assessment, and evaluation
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default AimsAndScope;
