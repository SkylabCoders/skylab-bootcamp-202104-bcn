/* eslint-disable react/prop-types */
import React from 'react';

const HeroesList = ({ heroesList, setSelectedHero }) => (
  <ul>
    {
      heroesList.map((hero) => (
        <li key={hero.id}>
          <button type="button" onClick={() => setSelectedHero(hero)}>{hero.name}</button>
        </li>
      ))
    }
  </ul>
);

export default HeroesList;
