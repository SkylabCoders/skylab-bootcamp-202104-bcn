import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import heroes from './components/elements/heroes';
import HeroesList from './components/list/heroes-list';
import Details from './components/details/heroesDetails';

function App() {
  const [selectedHero, setSelectedHero] = useState();
  return (
    <>
      <div className="App">
        <Dashboard />
        <HeroesList heroList={heroes} setSelectedHero={setSelectedHero} />
        {selectedHero && (<Details superhero={selectedHero} />)}
      </div>
      <Router>
        <Switch>
          <Route exact path="/heroes" components={HeroesList} />
          <Route exact path="/heroes/:heroId" components={Details} />
          <Route exact path="/dashboard" components={Dashboard} />
          <Redirect to="/heroes" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
