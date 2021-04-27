/* eslint-disable react/prop-types */
import React from 'react';

function HeroesDetail({ hero }) {
  return (
    <div>
      <p>{hero.id}</p>
      <p>{hero.name}</p>
    </div>
  );
}

export default HeroesDetail;
