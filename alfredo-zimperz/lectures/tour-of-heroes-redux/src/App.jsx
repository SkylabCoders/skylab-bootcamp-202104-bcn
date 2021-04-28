import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';
import './styles.css';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <h1>Tour of Heroes</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/heroes">Heroes</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/heroes" exact component={Heroes} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
