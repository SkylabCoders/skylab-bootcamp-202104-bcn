import { React } from 'react';
import
{
  Link
} from 'react-router-dom';
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
              <Link to="/login">Login to your Spotify</Link>
              {' '}
            </li>
            <li>Answer the questions about what do you feel listening today</li>
            <li>Modify the music list based on your answers</li>
            <li>Chill and listen with your dream list</li>
          </ul>
          <div className="containerImg" />
          <Link to="/form">BEGGIN TEST</Link>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
