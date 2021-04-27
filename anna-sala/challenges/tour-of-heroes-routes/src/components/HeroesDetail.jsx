/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function HeroesDetail({ hero }) {
  return (
    <div>
      <p>{hero.publisher}</p>
      <p>{hero.alterEgo}</p>
      <Link to={`./${hero.id}`}>
        Learn More
      </Link>
    </div>
  );
}

export default HeroesDetail;
