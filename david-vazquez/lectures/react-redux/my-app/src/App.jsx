import React from 'react';
import './App.css';
import './styles.css';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HeroDetail from './components/HeroDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Tour of Heroes</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/detail">Details</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/detail" component={HeroDetail} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
