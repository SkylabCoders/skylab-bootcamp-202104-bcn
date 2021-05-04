import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import HeroesList from './components/HeroesList';
import HeroesFullDetail from './components/HeroFullDetail';

function App() {
  return (
    <>
      <header>
        <h1>Tour of Heroes</h1>
        <nav>
          <ul>
            <li>Heroes</li>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/heroes/" component={HeroesList} />
            <Route exact path="/heroes/:heroId" component={HeroesFullDetail} />
            <Redirect to="/heroes/" />
          </Switch>
        </Router>

      </main>
    </>
  );
}

export default App;
