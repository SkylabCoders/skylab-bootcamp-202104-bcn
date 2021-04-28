import React from 'react';
import './styles.css';
import './App.css';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HeroesList from './components/HeroesList';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Tour of Heroes</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/HeroesList">Heroes</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/" exact component={HeroesList} />
          <Route component={NotFound} />
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
