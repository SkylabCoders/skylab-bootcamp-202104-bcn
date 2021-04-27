import React from 'react';
import { useParams } from 'react-router';
import heroes from './data/heroes';
// import PropTypes from 'prop-types';

const HeroesDetailComponent = () => {
  const { id } = useParams();
  const selectedHero = heroes.find((hero) => hero.id === id);
  return (
    <div>
      <h2>
        {selectedHero.superhero}
        {' '}
        details
      </h2>
      <p>{selectedHero.publisher}</p>
      <p>{selectedHero.alter_ego}</p>
    </div>
  );
};

export default HeroesDetailComponent;
