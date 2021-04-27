/* eslint-disable react/prop-types */
import React from 'react';

function HeroesDetail({ hero: { publisher, alterEgo } }) {
  return (
    <div>
      <p>{publisher}</p>
      <p>{alterEgo}</p>
    </div>
  );
}

export default HeroesDetail;
