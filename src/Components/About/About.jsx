import React from 'react';
import './../../Styles/About.css';

const About = () => {
  return (
    <>
      {/* Top Banner  */}
      <div className="home-first-section">
        <div className="background-image"></div>
        <h3>JOURNAL</h3>
      </div>

      {/*  About Content  */}
      <div className="about-container">
        <p>
          Kaamadhenu College, a premier educational institution, has a clearly identified 
          vision and mission. Teaching–learning is at the core of this institutional ethos, 
          and a student-centric approach is a vital part of our educational journey. 
          Kaamadhenu College has always believed in progression through proper governance, 
          leadership, and management for the holistic development of its students.
        </p>

        {/* Vision & Objectives Section */}
        <div className="about-sections">


          {/* Vision */}
          <div className="vision">
            <h2> VISION</h2>
            <div className="vision-box">
              <p>
                The vision of Kaamadhenu College is to provide transformative education 
                to students so that they become well-equipped to meet global challenges, 
                respect human rights, practice non-violence, become environmentally 
                conscious, and are sensitized to community service.  
              </p>
              <p>
                We aim to impart education by which students’ minds achieve a broader 
                perspective to become honest and responsible citizens of the country.
              </p>
            </div>
          </div>

          {/* Objectives */}
          <div className="objectives">
            <h2> OUR OBJECTIVES</h2>
            <img src="/image-history.jpg" alt="Student Research" />
            <ul>
              <li>
                To provide an inclusive educational platform and enhance the strength 
                and capabilities of students from diverse socio-economic backgrounds. 
                We encourage appreciation, respect, and promotion of perspectives, rights, 
                and dignity of each individual.
              </li>
              <li>
                To build an empowered young generation that can act as essential 
                contributors in cultural, socio-economic, and sustainable 
                environmental development.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
