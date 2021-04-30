/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import List from './Components/List';
import Details from './Components/Details';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/heroes" component={List} />
        <Route exact path="/heroes/:heroID" component={Details} />
        <Redirect to="/heroes" />
      </Switch>
    </Router>
  </div>
);

export default App;
