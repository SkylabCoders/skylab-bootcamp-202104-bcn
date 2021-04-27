import React, { useState } from 'react';
import heroes from './store/store';
import Dashboard from './components/dashboard/dashboard';
import List from './components/list/list';
import HeroDetailComponent from './components/details/details';

function App() {
  const [selectedHero, setSelectedHero] = useState();
  return (
    <div className="App">
      <Dashboard />
      <List heroesList={heroes} setSelectedHero={setSelectedHero} />
      {selectedHero && (<HeroDetailComponent hero={selectedHero} />) }
    </div>
  );
}
export default App;
