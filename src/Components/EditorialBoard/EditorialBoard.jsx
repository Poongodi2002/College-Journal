import React from 'react'
import './../../Styles/EditorialBoard.css'

const EditorialBoard = () => {
  return (
    <div className="editorial-board">
      <h2 className="editorial-board__title">Editorial Board</h2>

      <div className="editorial-board__section">
        <h3 className="editorial-board__subtitle">Chief Editor</h3>
        <p className="editorial-board__name">Dr. P. Malar Selvi</p>
        <p className="editorial-board__affiliation">
          Kaamadhenu College of Education, Sathyamangalam, Erode, Tamil Nadu, India.
        </p>
        <p className="editorial-board__email">
          Email: <a href="mailto:jsecretary@kascsathy.ac.in">jsecretary@kascsathy.ac.in</a>
        </p>
      </div>

      <div className="editorial-board__section">
        <h3 className="editorial-board__subtitle">Associate Editor</h3>
        <p className="editorial-board__name">Dr. S. Ramprabhu</p>
        <p className="editorial-board__affiliation">
          Kaamadhenu College of Education, Sathyamangalam, Erode, Tamil Nadu, India.
        </p>
        <p className="editorial-board__email">
          Email: <a href="mailto:principalkce@kascsathy.ac.in">principalkce@kascsathy.ac.in</a>
        </p>
      </div>

      <div className="editorial-board__section">
        <h3 className="editorial-board__subtitle">Editorial Advisor</h3>
        <p className="editorial-board__name">Dr. S. Rajaguru</p>
        <p className="editorial-board__affiliation">
          Principal (Retd), Sri Ramakrishna Mission Vidyalaya College of Education, Coimbatore, Tamil Nadu.
        </p>
      </div>

      <div className="editorial-board__section">
        <h3 className="editorial-board__subtitle">Editorial Board Members</h3>
        <ul className="editorial-board__list">
          <li className="editorial-board__list-item">
            <p className="editorial-board__name">
              <strong style={{color:'#1eaaf1'}}>Dr. H. Indu</strong>, Registrar, Avinashilingam Institute for Home Science and Higher Education for Women, Coimbatore, Tamil Nadu-641043
            </p>
            <p className="editorial-board__email">
              Email: <a href="mailto:registrar@avinuty.ac.in">registrar@avinuty.ac.in</a>
            </p>
          </li>
          {/* Repeat same pattern for all members */}
        </ul>
      </div>
    </div>
  )
}

export default EditorialBoard
