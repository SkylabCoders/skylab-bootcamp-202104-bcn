import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HeroListItemComponent({ id, name }) {
  return (
    <li>
      <Link to={`heroes/${id}`}>
        {name}
      </Link>
    </li>
  );
}

HeroListItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default HeroListItemComponent;
