import React from 'react';
import heroes from '../elements/heroes';

const FourHeroes = () => {
  const listItem = heroes.slice(0, 4).map(({ id, superhero }) => (
    <span>
      <li key={`${id}-${superhero}`} className="list__hero-item">{superhero}</li>
    </span>
  ));
  return (
    <ul className="list__container">
      {
     listItem
      }
    </ul>
  );
};

export default FourHeroes;
