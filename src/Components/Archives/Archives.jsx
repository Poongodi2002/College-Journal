import React, { useState } from "react";
import archivesData from "../../Utils/archivesData";
import "./../../Styles/Archives.css";

const Archives = () => {
  const [selectedVolume, setSelectedVolume] = useState(archivesData[0]);

  return (
    <>
    <div className="home-first-section">
        <div className="background-image"></div>
        <h3>ARCHIVESL</h3>
      </div>
      <div className="archives-page">

      <aside className="archives-sidebar">
        <h4>Volumes</h4>
        <ul>
          {archivesData.map((vol, i) => (
            <li 
              key={i} 
              onClick={() => setSelectedVolume(vol)}
              className={selectedVolume.volume === vol.volume ? "active" : ""}
            >
              Volume {vol.volume} ({vol.year})
            </li>
          ))}
        </ul>
      </aside>
      <div className="archives-content">
        {selectedVolume.issues.map((issue, idx) => (
          <div key={idx} className="archive-issue">
            <div className="issue-header">
              YEAR-{selectedVolume.year} | VOLUME-{selectedVolume.volume} | ISSUE-{issue.issue}
            </div>
             {issue.articles.map((article, index) => (
              <div key={index} className="article-card">
                <h4>{article.type} | Kaamadhenu Journal. {article.date}</h4>
                {/* <a href={article.doi} target="_blank" rel="noopener noreferrer" className="doi-link">
                  {article.doi}
                </a>
                <h3 className="article-title">
                  <a href={article.pdf} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h3> */}
                <p className="authors">{article.authors}</p>

                <div className="article-actions">
                  {/* <a href={article.abstract} target="_blank" rel="noopener noreferrer"> Abstract</a>
                  <a href={article.fullText} target="_blank" rel="noopener noreferrer"> Full-Text</a> */}
                  <a href={article.pdf} download> PDF Download</a>
                </div>
              </div>
      ))}
          </div>
        ))}
      </div>
    </div>
    </>
    
  

           
        
  );
};

export default Archives;
