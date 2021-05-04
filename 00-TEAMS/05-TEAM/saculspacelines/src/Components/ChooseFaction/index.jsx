import React from 'react';
import lightSidePic from '../../Images/lightSide.svg';
import darkSidePic from '../../Images/darkSide.svg';
import './style.css';

function ChooseFaction() {
  return (
    <div>
      <header>
        <h1>Choose your Faction</h1>
      </header>
      <div className="faction-container">
        <img src={lightSidePic} alt="light side" className="lightPic" />
        <img src={darkSidePic} alt="dark side" className="darkPic" />
      </div>

      <button type="button">Dark Side</button>
      <button type="button">Light Side</button>
      <footer>
        <button type="button">Back</button>
        <input type="checkbox" name="terms of service" id="" />
        <p>terms of service</p>
      </footer>
    </div>
  );
}

export default ChooseFaction;
