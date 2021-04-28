import React, { useState } from 'react';
import heroes from '../assets/heroes';
import HeroMoreDetails from './heroMoreDetailsComponent';

function HeroesListComponent() {
  const [selectedHero, setSelectedHero] = useState(null);
  const heroe = heroes.map((hero) => (
    <li key={hero.id}>
      {hero.superhero}
      <button type="button" onClick={() => setSelectedHero(hero)}>See some details</button>
      {selectedHero === hero && <HeroMoreDetails hero={hero} />}
    </li>
  ));
  return (
    <ul className="list-container">
      {heroe}
    </ul>
  );
}

export default HeroesListComponent;
