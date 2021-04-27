import React from 'react';
import heroes from '../elements/heroes';

const HeroesList = () => {
  const listHeroes = heroes.map(({ id, superhero }) => (
    <span>
      <li key={`${id}-${superhero}`} className="list__hero-item">{superhero}</li>
    </span>
  ));
  return (
    <ul className="list__container">
      {
    listHeroes
        }
    </ul>
  );
};

export default HeroesList;
