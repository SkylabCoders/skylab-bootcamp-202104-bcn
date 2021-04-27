import React from 'react';
import heroes from '../assets/heroes';

const HeroListComponent = () => (
  <ul className="list__container">
    {
          heroes && heroes.map(({ id, superhero }) => <li key={id}>{superhero}</li>)
      }
  </ul>
);

export default HeroListComponent;
