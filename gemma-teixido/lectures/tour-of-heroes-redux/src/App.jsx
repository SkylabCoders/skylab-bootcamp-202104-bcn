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
        <h1>Tour Of Heroes</h1>
        <nav>
          <a href=" ">Dashboard</a>
          <Link to="/detail">Heroes</Link>
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
