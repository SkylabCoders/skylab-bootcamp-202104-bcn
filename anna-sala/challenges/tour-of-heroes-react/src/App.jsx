import React, { useState } from 'react';
import './App.css';
import HeroesList from './components/HeroesList';
import HeroesDetail from './components/HeroesDetail';

const heroes = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

function App() {
  const [currentSelectedHero, selectedHero] = useState(null);
  return (
    <main>
      <header>
        <h1>Tour of Heroes</h1>
        <HeroesList
          heroesArray={heroes}
          heroSelector={selectedHero}
        />
      </header>
      { currentSelectedHero && <HeroesDetail heroToPrint={currentSelectedHero} />}
    </main>
  );
}

export default App;
