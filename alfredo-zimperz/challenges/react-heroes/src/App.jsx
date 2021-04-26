import React, { useState } from 'react';
import './App.css';
import HeroesList from './components/HeroesList';

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
    <div className="App">
      <h1>Tour of Heroes</h1>
      <HeroesList heroesList={heroes} setSelectedHero={setSelectedHero} />
      {selectedHero && <h2>{selectedHero.name}</h2> }
    </div>
  );
}

export default App;
