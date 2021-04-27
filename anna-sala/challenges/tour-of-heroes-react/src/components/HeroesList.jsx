/* eslint-disable react/prop-types */
import React from 'react';

function HeroesList({ heroesArray, heroSelector }) {
  function updateSelectedHero(hero) {
    heroSelector(hero);
  }
  return (
    <nav>
      {
        heroesArray.map((hero) => <li><button type="button" id={hero.id} onClick={() => updateSelectedHero(hero)}>{hero.name}</button></li>)
    }
    </nav>
  );
}

export default HeroesList;
