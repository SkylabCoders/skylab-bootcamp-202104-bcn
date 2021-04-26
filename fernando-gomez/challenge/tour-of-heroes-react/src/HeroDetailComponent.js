import React from 'react';

const HeroDetail = ({ currentHero }) => (
  <div className="heroesList">
    <h1>{currentHero.name}</h1>
    <p>
      It's Id is
      {' '}
      {currentHero.id}
    </p>
  </div>
);
export default HeroDetail;
