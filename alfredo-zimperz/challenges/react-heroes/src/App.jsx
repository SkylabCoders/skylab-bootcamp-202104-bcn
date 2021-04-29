import React, { useState } from 'react';
import './App.css';
import heroes from './data/heroesData';
import HeroDetail from './components/HeroDetail';
import HeroesList from './components/HeroesList';

function App() {
  const [selectedHero, setSelectedHero] = useState(null);

  return (
    <div className="App">
      <h1>Tour of Heroes</h1>
      <HeroesList heroesList={heroes} setSelectedHero={setSelectedHero} />
      {selectedHero && (<HeroDetail hero={selectedHero} />) }
    </div>
  );
}

export default App;
