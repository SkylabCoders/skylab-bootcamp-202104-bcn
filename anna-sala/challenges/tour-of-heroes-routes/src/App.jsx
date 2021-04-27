import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import HeroesList from './components/HeroesList';

function App() {
  return (
    <main>
      <header>
        <h1>Tour of Heroes</h1>
        {/* <HeroesList
          heroesArray={heroes}
          heroSelector={selectedHero}
          heroSelected={currentSelectedHero}
        /> */}
      </header>
      <Router>
        <Switch>
          <Route exact path="/heroes/:heroId" component={HeroesList} />
          <Route exact path="/heroes/" component={HeroesList} />
          <Redirect to="/heroes/" />
        </Switch>
      </Router>

    </main>
  );
}

export default App;
