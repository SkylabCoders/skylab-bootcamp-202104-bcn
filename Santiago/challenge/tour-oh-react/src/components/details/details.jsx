/* eslint-disable react/prop-types */
import React from 'react';

const HeroDetailComponent = ({ hero }) => (
  <div>
    <h2>
      Hero ID:
      {hero.id}
      {' -- '}
      {' '}
      SuperHero:
      {' '}
      {hero.superhero}
      {' -- '}
      {' '}
      Alter Ego:
      {' '}
      {hero.alterEgo}
    </h2>
  </div>
);

export default HeroDetailComponent;
