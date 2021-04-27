/* eslint-disable react/prop-types */
import React from 'react';
import HeroesDetail from './HeroesDetail';

function HeroesList({ heroesArray, heroSelector, heroSelected }) {
  function updateSelectedHero(hero) {
    heroSelector(hero);
  }
  return (
    <nav>
      {
        heroesArray.map((hero) => (
          <li>
            <button type="button" id={hero.id} onClick={() => updateSelectedHero(hero)}>Q</button>
            {hero.superhero}
            {heroSelected === hero && <HeroesDetail hero={heroSelected} />}
          </li>
        ))
      }

    </nav>
  );
}

export default HeroesList;
