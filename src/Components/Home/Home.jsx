import React from 'react';
import { Link } from "react-router-dom";
import { FaBookOpen } from 'react-icons/fa'; // opened book icon
import './../../Styles/Home.css'; 

const Home = () => {
  return (
    <div className="main-home">
      
      {/* First Section */}
      <div className="home-first-section" style={{ color: '#ffffff' }}>
        <div className="background-image"></div>
        <h3 style={{ color: '#f68713' }}>KAAMADHENU JOURNAL SITE</h3>
      </div>

      {/* Main Content */}
      <div className="home-content">

        {/* Left Sidebar */}
        <div className="sidebar left" style={{ background: '#fdf5ee' }}>
          <h4 style={{ background: '#1800ac', color: '#ffffff' }}>For Author</h4>
          <ul>
            <Link to="/aims"><li style={{ color: '#1800ac' }}>▶ Aims and Scope</li></Link> 
            <Link to='/guideline'><li style={{ color: '#1800ac' }}>▶ Guidelines for Author</li></Link>
            <Link to='/callofpapers'><li style={{ color: '#1800ac' }}>▶ Call of Papers</li></Link>
            <Link to='/articleandsubmission'><li style={{ color: '#1800ac' }}>▶ Article and Submission</li></Link>
            <Link to='/editorialboard'><li style={{ color: '#1800ac' }}>▶ Editorial Board</li></Link>
            <Link to="/archives"><li style={{ color: '#1800ac' }}>▶ Archives</li></Link>
            <Link to={'/ethicsandpolicy'}><li style={{ color: '#1800ac' }}>▶ Ethics And Policy</li></Link>
            <Link to='/downloads'><li style={{ color: '#1800ac' }}>▶ Downloads</li></Link>
          </ul>
        </div>

        {/* Center Content */}
        <div className="center-content">
          <h2 style={{ color: '#1800ac', borderBottom: '2px solid #f68713', display: 'inline-block', paddingBottom: '5px' }}>
            Welcome to Kaamadhenu E-Journal
          </h2>

          <p style={{ color: '#333' }}>
            Kaamadhenu Journal is a rapid processing journal that publishes 
            original research articles as well as review articles in several 
            areas of education for the enhancement of educational research work. 
            The Journal enables its readers to access the published articles free 
            of cost which helps in sharing the knowledge. 
            <br/><br/>
            Our Journal guarantees scholars and students of education 
            opportunities for reading, reprinting, and distributing 
            to facilitate academic and research activities.
          </p>

          <h3 style={{ color: '#f68713' }}>Our Journal Services</h3>
          <ul  style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li style={{  display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaBookOpen style={{ color: '#f68713' }}/> Quick response after receiving paper.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaBookOpen style={{ color: '#f68713' }}/> Secure process for paper publication after receiving publication fees and copyright form.
            </li>
            <li style={{  display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaBookOpen style={{ color: '#f68713' }}/> Economical paper publication fees.
            </li>
          </ul>

        </div>

        {/* Right Sidebar */}
        <div className="sidebar right" style={{ background: '#fdf5ee' }}>
          <h4 style={{ background: '#1800ac', color: '#ffffff' }}>Recent Articles</h4>
          <ul>
            <li style={{ color: '#1800ac' }}>Challenge or An Opportunity.</li>
            <li style={{ color: '#1800ac' }}>Impact of Happiness Curriculum Running in Delhi Government Schools.</li>
            <li style={{ color: '#1800ac' }}>Modern Day Leaders of the World and the Culture of Innovation.</li>
            <li style={{ color: '#1800ac' }}>Quality Concerns in Teacher Education.</li>
            <li style={{ color: '#1800ac' }}>The Impact of Technology and Globalisation in Education.</li>
            <li style={{ color: '#1800ac' }}>Vol–1 Year–2022</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
