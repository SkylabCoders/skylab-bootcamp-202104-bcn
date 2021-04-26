/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';

const HeroDetail = ({ currentHero }) => (
  <div className="heroesList">
    <h2>
        {currentHero.id}
    </h2>
    <h1>{currentHero.name}</h1>
  </div>
);
export default HeroDetail;