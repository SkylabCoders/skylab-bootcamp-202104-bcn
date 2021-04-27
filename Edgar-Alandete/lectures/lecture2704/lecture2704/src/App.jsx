import React, { useState } from 'react';
import HeroListComponent from './Components/HeroListComponent';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const handleSelectHero = (heroId) => {
    setCurrentId(heroId);
  };
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Heroes</li>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      {(currentId !== 0)
        ? <HeroListComponent onOpen={handleSelectHero} />
        : <p>No hero selected</p>}
    </>
  );
}

export default App;
