import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import HeroList from './components/Heroes/HeroList';
import HeroDetail from './components/Heroes/HeroDetail';
import Nav from './components/ui/Nav';
import './styles.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Tour of Heroes</h1>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/heroes" component={HeroList} />
          <Route path="/heroes/:heroId" component={HeroDetail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
