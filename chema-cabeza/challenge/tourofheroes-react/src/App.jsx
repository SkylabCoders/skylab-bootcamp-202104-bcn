/* eslint-disable no-undef */
import React, { useState } from 'react';
import Header from './components/Header';
import HeroDetails from './components/HeroDetails';
import HeroesList from './components/HeroesList';
import './App.css';

function App() {
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

  const [selectedHero, setSelectedHero] = useState(null);

  return (
    <div>
      <Header />
      <HeroesList heroesList={heroes} setSelectedHero={setSelectedHero} />
      {selectedHero && (<HeroDetails hero={selectedHero} />) }
    </div>
  );
}

export default App;
