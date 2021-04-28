import React from 'react';
import './styles.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HeroDetail from './components/HeroDetail';

function App() {
  return (
    <>
      <Router>
        <h1>Tour of Heroes</h1>
        <nav>
          <a href="./">Dashboard</a>
          <Link to="/detail">Heroes</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/detail" component={HeroDetail} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
