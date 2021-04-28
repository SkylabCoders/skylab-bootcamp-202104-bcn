import React from 'react';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import './styles.css';
import './App.css';
import HeroDetail from './components/HeroDetail';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <h1>Tour of Heroes</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/detail">Heroes</Link>
        <Link to="/NotFound">NotFound</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/detail" component={HeroDetail} />
        <Route path="/NotFound" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
