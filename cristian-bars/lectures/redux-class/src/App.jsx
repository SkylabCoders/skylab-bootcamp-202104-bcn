import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello, Skylab</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/countries">Countries</Link>
      </header>
      <main>
        <Router>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/countries" exact component={Countries} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
