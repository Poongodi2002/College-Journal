import React from "react";
import "./../../Styles/Magazine.css";

const Magazine = () => {
  return (
    <>
    <div className="home-first-section">
        <div className="background-image"></div>
        <h3>MAGAZINE</h3>
      </div>
    <div className="magazine-page">
      

      <div className="magazine-container">
        {/* About Section */}
        <section className="magazine-section">
          <h2>Kaamadhenu College Magazine</h2>
          <p>
            The <strong>Kaamadhenu College Magazine</strong> is an annual publication
            that showcases the creativity, talent, and thoughts of our students and staff. 
            It features articles, essays, poems, artwork, and reports on campus activities 
            and achievements.
          </p>
        </section>

        {/* Editions */}
        <section className="magazine-section">
          <h3>Past Editions</h3>
          <div className="magazine-grid">
            <div className="magazine-card">
              <img src="/Campus3.jpg" alt="Magazine 2024" />
              <h4>Volume 5 – 2024</h4>
              <a href="/javascript_tutorial.pdf" download className="download-btn"> Download</a>
            </div>

            <div className="magazine-card">
              <img src="/Campus2.jpg" alt="Magazine 2023" />
              <h4>Volume 4 – 2023</h4>
              <a href="/javascript_tutorial.pdf" download className="download-btn">Download</a>
            </div>
          </div>
        </section>

        {/* Contribution Section */}
        <section className="magazine-section">
          <h3>Contribute to the Magazine</h3>
          <p>
            Students and faculty members are invited to contribute their articles, poems, 
            stories, essays, or artwork for the upcoming issue of the Kaamadhenu College Magazine.  
            Please submit your entries to <a href="mailto:magazine@kaamadhenu.edu">magazine@kaamadhenu.edu</a>.
          </p>
        </section>
      </div>
    </div>
    
    </>
    
  );
};

export default Magazine;
