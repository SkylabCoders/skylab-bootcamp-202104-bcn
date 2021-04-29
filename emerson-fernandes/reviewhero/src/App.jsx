import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch, Link
} from 'react-router-dom';
import Nav from './components/heroes/ui/Nav';

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>Tour of Heroes</h1>
        <Nav />
        <Switch>
          <Route />
          <Route />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
