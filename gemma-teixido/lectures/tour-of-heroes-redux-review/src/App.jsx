import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Nav from './components/ui';
import Dashboard from './components/dashboard/Dashboard';
import HeroList from './components/heroes/HeroList';
import HeroDetails from './components/heroes/HeroDetails';
import './styles.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Tour of Heroes</h1>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/heroes" component={HeroList} />
          <Route exact path="/details:heroId" component={HeroDetails} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
