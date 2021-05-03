import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HeroesDetails from './pages/HeroesDetails';
import HeroesPage from './pages/HeroesPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/heroes" component={HeroesPage} />
      <Route exact path="/details/:Id" component={HeroesDetails} />
      <Redirect to="/dashboard" />
    </Switch>
  </Router>

);

export default App;
