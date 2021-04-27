import React, { useState } from 'react';
import Dashboard from './components/dashboard/dashboard';
import heroes from './components/elements/heroes';
import HeroesList from './components/list/heroes-list';
import Details from './components/details/heroesDetails';

function App() {
  const [selectedHero, setSelectedHero] = useState();
  return (
    <div className="App">
      <Dashboard />
      <HeroesList heroList={heroes} setSelectedHero={setSelectedHero} />
      {selectedHero && (<Details superhero={selectedHero} />)}
    </div>
  );
}

export default App;
