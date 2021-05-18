import React from 'react';
import { useHistory } from 'react-router-dom';
import lightSidePic from '../../Images/lightSide.svg';
import darkSidePic from '../../Images/darkSide.svg';
import './style.css';

function ChooseFaction() {
  const history = useHistory();

  return (
    <div className="factions">
      <header>
        <h1>Choose your Faction</h1>
      </header>
      <div className="faction-container">
        <section className="faction-container__side">
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
              history.push('/select-avatar/light');
            }}
          >
            <h2 className="faction-name">Light Side</h2>
          </button>
        </section>
        <section className="faction-container__side">
          <button
            type="button"
            onClick={() => {
              history.push('/select-avatar/dark');
            }}
          >
            <img src={darkSidePic} alt="dark side" className="darkPic" />
          </button>
          <button
            type="button"
            onClick={() => {
              history.push('/select-avatar/dark');
            }}
          >
            <h2 className="faction-name">Dark Side</h2>
          </button>
        </section>
      </div>
      <div className="button-container" />
    </div>
  );
}

export default ChooseFaction;
