import React from "react";
import './../../Styles/Aims.css'

const Aims = () => {
  return (
    <><div className="home-first-section">
        <div className="background-image"></div>
        <h3>AIMS AND SCOPE</h3>
      </div>
    
   
    <div className="aims-container">
      
      <p className="intro">
        The <strong style={{color: '#0056d2'}}>Kaamadhenu College Journal of Education</strong> is dedicated to 
        advancing knowledge and research in the field of education, particularly 
        with a focus on teacher education and allied disciplines. 
        Our journal provides a platform for educators, researchers, and students 
        to share innovative ideas, practices, and scholarly work.
      </p>

      <div className="aims-section">
        <h3>Our Aims</h3>
        <ul>
          <li>To publish high-quality research articles, case studies, and reviews in the field of education.</li>
          <li>To encourage new and emerging scholars to contribute to academic discourse.</li>
          <li>To promote innovative teaching-learning practices and policy-related research.</li>
          <li>To foster interdisciplinary research connecting education with technology and society.</li>
        </ul>
      </div>

      <div className="scope-section">
        <h3>Scope of the Journal</h3>
        <ul>
          <li>Teacher Education & Professional Development</li>
          <li>Educational Psychology & Pedagogical Innovations</li>
          <li>ICT in Education and Digital Learning</li>
          <li>Curriculum Studies & Instructional Design</li>
          <li>Inclusive Education & Special Needs</li>
          <li>Educational Leadership, Policy & Administration</li>
          <li>Comparative and International Education</li>
        </ul>
      </div>
    </div>
     </>
  );
  
};

export default Aims;
