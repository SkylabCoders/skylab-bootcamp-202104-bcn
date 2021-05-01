import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import Countries from './components/countries/Countries';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Countries App</h1>
          <Link to="/">Dashboard</Link>
          <Link to="/countries">Countries</Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/countries" component={Countries} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
