import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import List from './components/list/List';
import Details from './components/details/details';
import Header from './components/header/header';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/heroes" component={List} />
          <Route exact path="/heroes/:heroId" component={Details} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect to="./heroes" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
