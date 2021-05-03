/* eslint-disable no-console */
import React, { useRef } from 'react';
import loadGame from '../../redux/reducers/trivialReducer';
import './gameMode.css';

function GameMode() {
  const myRefDifficult = useRef(null);
  const myRefType = useRef(null);
  return (
    <main className="mode-game">
      <h1>GAME MODE</h1>
      <select className="mode-game__difficult" ref={myRefDifficult}>
        <option value="easy">EASY</option>
        <option value="medium">MEDIUM</option>
        <option value="hard">HARD</option>
      </select>
      <select className="mode-game__type" ref={myRefType}>
        <option value="boolean">BOOLEAN</option>
        <option value="multiple">MULTIPLE</option>
      </select>
      <button type="button" className="mode-game__accept" onClick={() => loadGame(myRefDifficult, myRefType)}>
        <img src="https://img.icons8.com/doodle/48/000000/ok.png" alt="OK" />
      </button>
    </main>
  );
}
export default GameMode;
