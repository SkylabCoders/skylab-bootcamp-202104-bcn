/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroesDetail from './HeroesDetail';
import heroes from '../assets/heroes';

function HeroesList() {
  const [currentSelectedHero, selectedHero] = useState(null);
  function updateSelectedHero(hero) {
    selectedHero(hero);
  }
  return (
    <nav>
      {
        heroes.map((hero) => (
          <li>
            <button type="button" id={hero.id} key={hero.name} onClick={() => updateSelectedHero(hero)}>Q</button>
            <Link to={`./${hero.id}`}>
              {hero.superhero}
            </Link>
            {currentSelectedHero === hero && <HeroesDetail hero={currentSelectedHero} />}
          </li>
        ))
      }
    </nav>
  );
}

export default HeroesList;
