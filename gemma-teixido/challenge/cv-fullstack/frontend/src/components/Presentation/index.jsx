import React from 'react';
import './Presentation.css';
import profilePic from '../../assets/profile-pic.png';

function Presentation() {
  return (
    <>
      <main className="containerPresentation">
        <div className="containerPresentation__information">
          <div className="containerPresentation__information-img">
            <img src={profilePic} alt="User" />
          </div>
          <div className="containerPresentation__information-text">
            <h1>Gemma Teixidó Sánchez</h1>
            <h2>Full Stack Dev.</h2>
            <p>
              Skylab Coders Academy | JavaScript | React JS | GIT
              | HTML | CSS | Testing | NodeJS | MongoDB
            </p>
          </div>
          <div className="containerPresentation__information-button">
            <button className="moreInfo" type="button">More Info</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Presentation;
