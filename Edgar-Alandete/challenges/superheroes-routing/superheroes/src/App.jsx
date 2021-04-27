import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HeroListComponent from './Components/HeroListComponent';

function App() {
  return (
    <>
      <header className="header">
        <nav className="header__navigator">
          <ul className="header__navigator-container">
            <li className="header__navigator-item">Heroes</li>
            <li className="header__navigator-item">Dashboard</li>
          </ul>
        </nav>
      </header>
      <Router>
        <Switch>
          <Route exact path="/heroes" component={HeroListComponent} />
          <Redirect to="./heroes" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
