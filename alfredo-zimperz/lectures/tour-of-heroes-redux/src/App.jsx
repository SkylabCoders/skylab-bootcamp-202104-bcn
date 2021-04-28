import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';
import NotFound from './components/NotFound';
import HeroDetail from './components/Hero-detail';
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
          <Route path="/heroes/:id" component={HeroDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
