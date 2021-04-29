import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <h1>TO DO LIST</h1>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/:taskId" component={Task} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
