import React, { useState } from 'react';
import './App.css';
import HeroesList from './components/HeroesList';
import HeroesDetail from './components/HeroesDetail';
import heroes from './store/store';

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
