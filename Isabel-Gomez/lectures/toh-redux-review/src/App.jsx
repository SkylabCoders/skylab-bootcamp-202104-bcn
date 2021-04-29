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
        <Nav>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/heroes" component={HeroList} />
            <Route exact path="/heroes/:heroId" component={HeroDetail} />
          </Switch>
        </Nav>
      </BrowserRouter>
    </>
  );
}

export default App;
