import React from 'react';
import heroes from '../assets/heroes';

function HeroesListComponent() {
  const heroe = heroes.map(({ id, name }) => <li key={id}>{name}</li>);
  return (
    <ul>
      {heroe}
    </ul>
  );
}

export default HeroesListComponent;
