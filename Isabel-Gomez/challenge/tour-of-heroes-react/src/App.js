import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HeroesDetailsPage from './pages/HeroesDetailsPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="./pages/Dashboard" component={Dashboard} />
      <Route exact path="./pages/HeroesDetailsPage/:data.Id" component={HeroesDetailsPage} />
      <Redirect to="./pages/Dashboard" />
    </Switch>
  </Router>

);

export default App;
