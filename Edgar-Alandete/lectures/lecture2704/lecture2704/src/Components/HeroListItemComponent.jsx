import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeroListItemComponent = ({ superhero, id }) => (
  <li className="list__hero-item">
    <Link to={`./${id}`}>
      {superhero}
    </Link>
  </li>
);

HeroListItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
};
export default HeroListItemComponent;
