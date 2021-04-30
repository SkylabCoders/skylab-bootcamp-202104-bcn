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
import HeroDetailComponent from './Components/HeroDetailComponent';
import DashboardComponent from './Components/DashboardComponent';

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/dashboard" component={DashboardComponent} />
          <Route exact path="/heroes/:heroId" component={HeroDetailComponent} />
          <Route exact path="/heroes" component={HeroListComponent} />
          <Redirect to="./dashboard" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
