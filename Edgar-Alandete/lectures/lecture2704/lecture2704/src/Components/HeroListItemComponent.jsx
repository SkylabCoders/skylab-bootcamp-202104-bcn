import React from 'react';
import PropTypes from 'prop-types';

const HeroListItemComponent = ({ name }) => (
  <li className="list__hero-item">{name}</li>
);

HeroListItemComponent.propTypes = {
  // id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default HeroListItemComponent;
