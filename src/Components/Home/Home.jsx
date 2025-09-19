import React from 'react';
import { Link } from "react-router-dom";
import './../../Styles/Home.css'; 

const Home = () => {
  return (
    <div className="main-home">
      
      <div className="home-first-section">
        <div className="background-image"></div>
        <h3>KAAMADHENU JOURNAL SITE</h3>
      </div>

      <div className="home-content">

        <div className="sidebar left">
          <h4>For Author</h4>
          <ul>
            <Link to='/'><li>▶ Home</li></Link>
            <Link to='/'><li>▶ Home</li></Link>
            <Link to='/'><li>▶ Home</li></Link>
            <Link to='/'><li>▶ Home</li></Link>
            <Link to='/'><li>▶ Home</li></Link>
            <Link to='/'><li>▶ Home</li></Link>
            <Link to='/'><li>▶ Home</li></Link>
           <Link to='/'> <li>▶ Home</li></Link>
          </ul>
        </div>


        <div className="center-content">
          <h2>Welcome to Kaamadhenu E-Journal</h2>
          <p>
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

          <h3>Our Journal Services</h3>
          <ul className="services">
  <li>Quick response after receiving paper.</li>
  <li>Secure process for paper publication after receiving publication fees and copyright form.</li>
  <li>Economical paper publication fees.</li>
</ul>

        </div>

        <div className="sidebar right">
          <h4>Recent Articles</h4>
          <ul>
            <li>Challenge or An Opportunity.</li>
            <li>Impact of Happiness Curriculum Running in Delhi Government Schools.</li>
            <li>Modern Day Leaders of the World and the Culture of Innovation.</li>
            <li>Quality Concerns in Teacher Education.</li>
            <li>The Impact of Technology and Globalisation in Education.</li>
            <li>Vol–1 Year–2022</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
