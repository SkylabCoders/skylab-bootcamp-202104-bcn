import React from 'react';
import PropTypes from 'prop-types';

const HeroListItemComponent = ({
  // eslint-disable-next-line camelcase
  id, superhero, selectHero, publisher, alterEgo, selectedHero,
}) => (
  <li key={id} superhero={superhero} id={id}>
    <button type="button" onClick={() => selectHero(id)}>Boton</button>
    {superhero}
    {selectedHero && selectedHero === id && (
    <>
      <p>
        Alter Ego:
        {' '}
        {alterEgo}
      </p>
      <p>
        Published by:
        {' '}
        {publisher}
      </p>
    </>
    )}
  </li>
);

HeroListItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alterEgo: PropTypes.string.isRequired,
  selectHero: PropTypes.func.isRequired,
  selectedHero: PropTypes.string.isRequired,
};

export default HeroListItemComponent;
