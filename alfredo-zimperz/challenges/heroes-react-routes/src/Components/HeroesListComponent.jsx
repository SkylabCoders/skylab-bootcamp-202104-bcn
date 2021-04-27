import React, { useState } from 'react';
import heroes from './data/heroes';
import HeroComponent from './HeroComponent';

const HeroesListComponent = () => {
  const [selectedHero, setSelectedHero] = useState(null);
  return (
    <section className="heroes">
      <h2>HeroesList</h2>
      <ul className="heroes-list">
        {heroes.map((hero) => (
          <HeroComponent
            setSelectedHero={setSelectedHero}
            selectedHero={selectedHero}
            hero={hero}
            key={hero.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default HeroesListComponent;
