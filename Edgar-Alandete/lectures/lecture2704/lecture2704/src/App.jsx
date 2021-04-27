import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HeroDetailComponent from './Components/HeroDetailComponent';
import HeroListComponent from './Components/HeroListComponent';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Heroes</li>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <Router>
        <Switch>
          <Route extact path="/heroes/:heroId" component={HeroDetailComponent} />
          <Route extact path="/heroes/" component={HeroListComponent} />
          <Redirect to="./heroes" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
