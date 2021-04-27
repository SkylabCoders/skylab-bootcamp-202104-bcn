/* eslint-disable react/prop-types */
import React from 'react';

const HeroesDetails = ({ superhero }) => (
  <div>
    <h3>
      {superhero.superhero}
      {' '}
      ID:
    </h3>
    <p>
      {superhero.id}
    </p>
    <h3>
      {superhero.superhero}
      {' '}
      PUBLISHED:
    </h3>
    <p>
      {superhero.publisher}
    </p>
    <h3>
      {superhero.superhero}
      {' '}
      ALTER-EGO:
    </h3>
    <p>
      {superhero.alter_ego}
    </p>
  </div>
);

export default HeroesDetails;
