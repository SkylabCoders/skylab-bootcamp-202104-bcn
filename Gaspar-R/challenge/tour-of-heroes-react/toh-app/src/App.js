import './App.css';
import React, { useState } from 'react';
import HeroesList from './components/heroList';
import HeroDetail from './components/heroDetail';

function App() {
  const heroesList = [
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

  const [currentHero, setCurrentHero] = useState(null);

  return (
    <div className="App">
      <h1>Tour of heroes</h1>
      <HeroesList heroesList={heroesList} selectHero={setCurrentHero} />
      
      {currentHero && <HeroDetail currentHero={currentHero} />}
    </div>
  );
}

export default App;