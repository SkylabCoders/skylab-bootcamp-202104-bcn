/* eslint-disable react/prop-types */
import React from 'react';

const HeroMoreDetails = ({ hero }) => (
  <div>
    <ul>
      <li>
        Publisher --
        {hero.publisher}
      </li>
      <li>
        ID of the hero --
        {hero.id}
      </li>
    </ul>
  </div>
);

export default HeroMoreDetails;
