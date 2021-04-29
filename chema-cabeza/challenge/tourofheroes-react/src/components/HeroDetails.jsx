/* eslint-disable react/prop-types */
import React from 'react';

const HeroDetails = ({ hero }) => (
  <div>
    <h2>
      {hero.id}
      -
      {hero.name}
    </h2>
  </div>
);

export default HeroDetails;
