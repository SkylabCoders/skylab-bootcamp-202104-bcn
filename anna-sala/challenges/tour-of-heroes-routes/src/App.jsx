import React, { useState } from 'react';
import './App.css';
import HeroesList from './components/HeroesList';

import heroes from './assets/heroes';

function App() {
  const [currentSelectedHero, selectedHero] = useState(null);
  return (
    <main>
      <header>
        <h1>Tour of Heroes</h1>
        <HeroesList
          heroesArray={heroes}
          heroSelector={selectedHero}
          heroSelected={currentSelectedHero}
        />
      </header>

    </main>
  );
}

export default App;
