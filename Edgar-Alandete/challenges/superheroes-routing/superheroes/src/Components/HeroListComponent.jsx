import React from 'react';
import heroes from '../assets/heroes';
import HeroListItemComponent from './HeroListItemComponent';

const HeroListComponent = () => (
  <ul className="list__container">
    {
          heroes
          && heroes.map(
            ({ id, superhero }) => <HeroListItemComponent id={id} superhero={superhero} />,
          )
    }
  </ul>
);

export default HeroListComponent;
