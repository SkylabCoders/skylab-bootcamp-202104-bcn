import React from 'react';
import './index.css';
import './App.css';
import {
  Switch, Route, BrowserRouter, Link
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HeroDetails from './components/HeroDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Tour of heroes redux</h1>
        <nav type="button">
          <Link to="/">Dashboard</Link>
          <Link to="/detail">Details</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/detail" component={HeroDetails} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
