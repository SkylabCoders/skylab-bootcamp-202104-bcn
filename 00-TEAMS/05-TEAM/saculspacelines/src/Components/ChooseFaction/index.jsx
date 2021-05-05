import React from 'react';
import { useHistory } from 'react-router-dom';
import lightSidePic from '../../Images/lightSide.svg';
import darkSidePic from '../../Images/darkSide.svg';
import './style/style.css';

function ChooseFaction() {
  const history = useHistory();

  return (
    <div className="factions">
      <header>
        <h1>Choose your Faction</h1>
      </header>
      <div className="faction-container">
        <button
          type="button"
          onClick={() => {
            history.push('/select-avatar/light');
          }}
        >
          <img
            src={lightSidePic}
            alt="light side"
            className="lightPic"

          />
        </button>
        <button
          type="button"
          onClick={() => {
            history.push('/select-avatar/dark');
          }}
        >
          <img src={darkSidePic} alt="dark side" className="darkPic" />
        </button>
      </div>
      <div className="button-container">
        <h2>Light Side</h2>
        <h2>Dark Side</h2>
      </div>
    </div>
  );
}

export default ChooseFaction;
