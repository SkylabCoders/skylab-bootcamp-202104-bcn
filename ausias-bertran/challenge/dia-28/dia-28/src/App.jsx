import React from 'react';
import './styles.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/index';
import HeroDetail from './components/HeroDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Tour of Heroes</h1>
        <nav>
          <a href="  ">Dashbooard</a>
          <a href="  ">Heroes</a>
        </nav>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/detail" component={HeroDetail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
