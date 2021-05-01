import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import './App.css';
import Countries from './components/countries/Countries';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Countries App</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/countries">Countries</Link>
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/countries" component={Countries} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
