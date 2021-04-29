import React from 'react';
import './styles.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/ui/Nav';
import HeroList from './components/heroes/HeroList';
import Dashboard from './components/dashboard/Dashboard';
import HeroDetail from './components/heroes/HeroDetail';

function App() {
  return (
    <BrowserRouter>
      <h1>Tour of Heroes</h1>
      <Nav />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/heroes" component={HeroList} />
        <Route path="/heroes/:heroId" component={HeroDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
