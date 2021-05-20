import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import WorkExperience from './components/WorkExperience';
import Studies from './components/Studies';
// import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <main className="App">
      <header className="header">
        <h1>Hosni Marco Ruano</h1>
        <nav>

          <Link className="nav__link" to="/">Presentation</Link>
          <Link className="nav__link" to="/Studies">Studies</Link>
          <Link className="nav__link" to="/WorkExperience">Work Experience</Link>
        </nav>
      </header>
      <p className="importan-text">
        Fullstack developer
      </p>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/WorkExperience" exact component={WorkExperience} />
        <Route path="/Studies" exact component={Studies} />

      </Switch>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
