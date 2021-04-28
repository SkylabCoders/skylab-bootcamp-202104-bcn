import React from 'react';
import './styles.css';
import './App.css';
import {
  BrowserRouter, Route, Switch, Link
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HeroDetail from './components/HeroDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Tour of heroes</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/detail">Details</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/detail" component={HeroDetail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
