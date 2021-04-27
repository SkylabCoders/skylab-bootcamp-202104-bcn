
import React from 'react';

const HeroDetail = ({ currentHero: {id,name} }) => (
  <div className="heroesList">
    <h2>
        {id}
    </h2>
    <h1>{name}</h1>
  </div>
);
export default HeroDetail;