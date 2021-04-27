import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeroListItemComponent = ({ name, id }) => (
  <li className="list__hero-item">
    <Link to={`./heroes/${id}`}>
      {name}
    </Link>
  </li>
);

HeroListItemComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default HeroListItemComponent;
