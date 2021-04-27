import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import HeroListComponent from './Components/HeroListComponent';

function App() {
  return (
    <>
      <HeaderComponent />
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
