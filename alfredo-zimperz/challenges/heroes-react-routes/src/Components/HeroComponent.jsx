import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import HeroDetailComponent from './HeroDetailComponent';

const HeroComponent = ({ selectedHero, setSelectedHero, hero }) => (

  <li key={hero.id}>
    <h3>{hero.superhero}</h3>
    <button type="button" onClick={() => setSelectedHero(hero)}>More</button>
    {selectedHero && selectedHero.id === hero.id
        && (
        <HeroDetailComponent
          id={selectedHero.id}
          publisher={selectedHero.publisher}
          alterEgo={selectedHero.alter_ego}
        />
        )}
  </li>
);

HeroComponent.propTypes = {
  setSelectedHero: PropTypes.func.isRequired,
  selectedHero: PropTypes.shape(
    {
      id: PropTypes.string,
      superhero: PropTypes.string,
      publisher: PropTypes.string,
      alter_ego: PropTypes.string,
      first_appearance: PropTypes.string,
      characters: PropTypes.string,
    },
  ),
  hero: PropTypes.shape(
    {
      id: PropTypes.string,
      superhero: PropTypes.string,
      publisher: PropTypes.string,
      alter_ego: PropTypes.string,
      first_appearance: PropTypes.string,
      characters: PropTypes.string,
    },
  ).isRequired,
};

HeroComponent.defaultProps = {
  selectedHero: null,
};

export default HeroComponent;
