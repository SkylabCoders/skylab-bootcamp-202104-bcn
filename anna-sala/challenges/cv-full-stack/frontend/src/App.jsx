import React from 'react';
import './styles.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Dashboard from './components/Dashboard/index';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/info" component={PersonalInfo} />
          <Route exact path="/education" component={Education} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
