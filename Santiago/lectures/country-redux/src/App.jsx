import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Countries from './components/Countries';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>HELLO</h1>
          <Link to="/">Dashboard</Link>
          <Link to="/countries">Countries</Link>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/countries" component={Countries} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
