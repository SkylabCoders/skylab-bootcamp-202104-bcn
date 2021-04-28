import React from 'react';
import './styles.css';
import './App.css';
import {
  BrowserRouter, Switch, Route, Link
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HeroDetail from './components/HeroDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <h1>Tour of Heroes</h1>
          <Link to="/">Dashboard</Link>
          <Link to="/Heroes">Heroes</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/Detail/:heroId" exact component={HeroDetail} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
