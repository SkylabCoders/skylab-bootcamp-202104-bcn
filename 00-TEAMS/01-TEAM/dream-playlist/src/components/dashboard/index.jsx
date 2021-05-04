import { React } from 'react';
import './dashboard.css';

function Dashboard() {
  return (
    <>
      <header>
        <h1 className="welcomeTitle">Welcome to Dream List</h1>
      </header>
      <main>
        <div className="containerIntroduction">
          <h3>Listen just the songs you want to hear, lets create your dream list</h3>
        </div>
        <div className="containerInstructions">
          <ul>
            <li>
              Lets see to which playlist do you listen
              {' '}
              <button type="button">Login to your Spotify</button>
              {' '}
            </li>
            <li>Answer the questions about what do you feel listening today</li>
            <li>Modify the music list based on your answers</li>
            <li>Chill and listen with your dream list</li>
          </ul>
          <div className="containerImg" />
          <button className="begginButton" type="button">BEGGIN TEST</button>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
