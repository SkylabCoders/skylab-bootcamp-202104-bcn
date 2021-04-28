import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import HeroList from './component/hero-list/HeroList';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Link to="/">
          <button type="button">Dashboard</button>
        </Link>
        <Link to="/HeroList">
          <button type="button">Hero List</button>
        </Link>
        <Switch>
          <Route exact path="/">
            <h1>Primeira ruta</h1>
          </Route>
          <Route exact path="/HeroList">
            <HeroList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
