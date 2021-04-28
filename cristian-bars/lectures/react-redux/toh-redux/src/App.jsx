import React from 'react';
import './styles.css';
import './App.css';
import {
  BrowserRouter, Route, Switch, Link
} from 'react-router-dom';
import Dashboard from './componentes/Dashboard';
import HeroDetail from './componentes/HeroDetail/Index';
import NotFound from './componentes/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Tour of Heroes</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/detail">Heroes</Link>
          <Link to="/404">Not Found</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/detail" component={HeroDetail} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
