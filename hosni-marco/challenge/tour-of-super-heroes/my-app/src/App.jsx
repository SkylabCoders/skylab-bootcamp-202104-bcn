import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import ListComponent from './components/ListComponent';
import DetailHeroComponent from './components/DetailHeroComponent';
import './App.css';
// import InfoHeroComponent from './components/InfoHeroComponent';

function App() {
  return (
    <>
      <header>
        <h1>Dashboard</h1>
      </header>
      <Router>
        <Switch>
          {/* <Route extact path="/heroes/:heroId" component={InfoHeroComponent} /> */}
          <Route extact path="/heroes/:heroId" component={DetailHeroComponent} />
          <Route extact path="/heroes/" component={ListComponent} />
          <Redirect to="./heroes" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
