import React from 'react';
import './index.css';
import './App.css';
import {
  Switch, Route, BrowserRouter, Link
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HeroDetails from './components/HeroDetails';
import NotFound from './components/NotFound';
import HeroList from './components/HeroList';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Tour of heroes redux</h1>
        <nav type="button">
          <Link to="/">Dashboard</Link>
          <Link to="/list">Hero list</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/detail" component={HeroDetails} />
          <Route path="/list" component={HeroList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
