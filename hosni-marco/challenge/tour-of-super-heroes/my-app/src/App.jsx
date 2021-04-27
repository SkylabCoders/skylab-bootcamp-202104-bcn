import React from 'react';
// import ProtoTypes from 'proto-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import ListComponent from './components/ListComponent';
import DetailHeroComponent from './components/DetailHeroComponent';
import './App.css';
// import Heroes from './assets/Heroes';

function App() {
  return (
    <>
      <header>
        <h1>Dashboard</h1>
      </header>
      <Router>
        <Switch>
          {/* <Route extact path="/heroes/:heroId" component={HeroDetailComponent} /> */}
          <Route extact path="/heroes/:heroId" component={DetailHeroComponent} />
          <Route extact path="/heroes/" component={ListComponent} />
          <Redirect to="./heroes" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
