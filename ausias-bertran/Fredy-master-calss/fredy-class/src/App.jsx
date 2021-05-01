import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Dashboard from './componentes/Dashborad/index';
import Countries from './componentes/Countries';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Hello, Skylab</h1>
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
