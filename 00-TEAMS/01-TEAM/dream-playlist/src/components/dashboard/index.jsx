import { React } from 'react';
import
{ Link } from 'react-router-dom';
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
          <ul className="instructions">
            <li className="first-li">
              <img className="musicLogo" src="https://img.icons8.com/doodle/48/000000/apple-music--v1.png" alt="music-logo" />
              Lets see to which playlist do you listen.
            </li>
            <li>
              <img className="musicLogo" src="https://img.icons8.com/doodle/48/000000/apple-music--v1.png" alt="music-logo" />
              {' '}
              Answer the questions about what do you feel listening today

            </li>
            <li>
              <img className="musicLogo" src="https://img.icons8.com/doodle/48/000000/apple-music--v1.png" alt="music-logo" />
              {' '}
              Modify the music list based on your answers

            </li>
            <li>
              <img className="musicLogo" src="https://img.icons8.com/doodle/48/000000/apple-music--v1.png" alt="music-logo" />
              Chill and listen with your dream list
            </li>
          </ul>
          <div className="containerImg" />
          <button type="button"><Link to="/form">BEGIN TEST</Link></button>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
