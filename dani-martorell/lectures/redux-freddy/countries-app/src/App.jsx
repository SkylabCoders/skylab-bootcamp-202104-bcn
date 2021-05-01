import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Dashboard from './components/Dashboard/index';
import Countries from './components/Countries/index';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Hello</h1>
          <Link to="/">Dashboard</Link>
          <Link to="/countries">Countries</Link>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/countries" exact component={Countries} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
export default App;
