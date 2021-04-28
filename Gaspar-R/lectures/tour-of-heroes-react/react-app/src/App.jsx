import React from 'react';
import './style.css'
import './App.css';
import {BrowserRouter, Route, Switch} form 'react-router-dom';
import Dashboard from './components/Dashborad';
// import <index className="css"></index>

function App() {
  return (
    <> 
    <BrowserRouter>  
    <h1> Tour of Heroes</h1>
    <nav>
      <a href="">Dashboard</a>
      <a href="">Heroes </a>
    </nav>
    <Switch>  
    <Route path="/components/Dashboard" component={Dashboard}></Route>
    <Route path="/components/Dashboard" component={HeroDetail}></Route>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
