import React from 'react';
import PropTypes from 'prop-types';

const HeroListItemComponent = ({ id, superhero }) => (
  <li key={id} superhero={superhero} id={id}>{superhero}</li>
);

HeroListItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
};

export default HeroListItemComponent;
