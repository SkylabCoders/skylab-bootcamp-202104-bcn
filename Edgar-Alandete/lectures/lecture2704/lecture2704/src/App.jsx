import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HeroDetailComponent from './Components/HeroDetailComponent';
import HeroListComponent from './Components/HeroListComponent';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const handleSelectHero = (heroId) => {
    setCurrentId(heroId);
  };
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
      {(currentId !== 0)
        ? <HeroListComponent onOpen={handleSelectHero} />
        : <p>No hero selected</p>}
      <Router>
        <Switch>
          <Route extact path="/heroes/" component={HeroDetailComponent} />
          <Route extact path="/heroes/:heroId" component={HeroDetailComponent} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
