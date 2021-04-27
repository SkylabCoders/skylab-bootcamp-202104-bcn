/* eslint-disable react/prop-types */
import React from 'react';

const HeroDetailComponent = ({ hero }) => (
  <div>
    <h2>
      Details of:
      {hero.superhero}
    </h2>
    <ul>
      <li>
        Hero ID:
        {hero.id}
      </li>
      <li>
        Alter Ego:
        {hero.alterEgo}
      </li>
    </ul>
  </div>
);

export default HeroDetailComponent;
